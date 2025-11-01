import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Lesson, Activity, CEFRLevel, ActivityType, Question } from '../../types';
import { ArrowLeftIcon, CheckCircleIcon, ChevronRightIcon, Loader2Icon, PauseIcon, PlayIcon, TargetIcon, XIcon } from './icons';
import { generateSpeech } from '../services/geminiService';

interface ModuleTestViewProps {
  lesson: Lesson;
  courseLevel: CEFRLevel;
  onComplete: () => void;
  onBack: () => void;
}

// Helper functions for audio decoding (should be shared in a utility file in a real app)
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}


const ModuleTestView: React.FC<ModuleTestViewProps> = ({ lesson, onComplete, onBack }) => {
    const [step, setStep] = useState<'start' | 'reading' | 'listening' | 'writing' | 'results'>('start');
    const [answers, setAnswers] = useState<Record<string, string>>({});
    
    // Audio Player State
    const [isLoadingAudio, setIsLoadingAudio] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

    const readingActivity = useMemo(() => lesson.activities.find(a => a.type === ActivityType.Quiz && a.title.includes('Reading')), [lesson.activities]);
    const listeningActivity = useMemo(() => lesson.activities.find(a => a.type === ActivityType.Quiz && a.title.includes('Listening')), [lesson.activities]);
    const writingActivity = useMemo(() => lesson.activities.find(a => a.type === ActivityType.Writing), [lesson.activities]);

    const readingQuestions = readingActivity?.questions || [];
    const listeningQuestions = listeningActivity?.questions || [];

    const handleSelectAnswer = (questionId: string, answer: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
    };

    const handleWritingChange = (text: string) => {
        if (writingActivity) {
            setAnswers(prev => ({ ...prev, [writingActivity.id]: text }));
        }
    };
    
    const isSectionComplete = (questions: Question[]) => {
        return questions.every(q => answers[q.id] !== undefined);
    };

    useEffect(() => {
        // Cleanup audio on component unmount
        return () => {
            if (audioSourceRef.current) {
                audioSourceRef.current.stop();
            }
            if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
                audioContextRef.current.close();
            }
        };
    }, []);

    const handlePlayAudio = async () => {
        if (!listeningActivity?.dialogue) return;
        
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        const audioContext = audioContextRef.current;

        if (isPlaying && audioSourceRef.current) {
            audioSourceRef.current.stop();
            setIsPlaying(false);
            return;
        }

        if (audioBuffer) {
            const source = audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioContext.destination);
            source.onended = () => setIsPlaying(false);
            source.start(0);
            audioSourceRef.current = source;
            setIsPlaying(true);
        } else {
            setIsLoadingAudio(true);
            const dialogueText = listeningActivity.dialogue.map(d => `${d.speaker}: ${d.line}`).join('\n');
            const base64Audio = await generateSpeech(dialogueText);
            setIsLoadingAudio(false);

            if (base64Audio && audioContext) {
                try {
                    const buffer = await decodeAudioData(decode(base64Audio), audioContext, 24000, 1);
                    setAudioBuffer(buffer);
                    const source = audioContext.createBufferSource();
                    source.buffer = buffer;
                    source.connect(audioContext.destination);
                    source.onended = () => setIsPlaying(false);
                    source.start(0);
                    audioSourceRef.current = source;
                    setIsPlaying(true);
                } catch (error) {
                    console.error("Error decoding audio data:", error);
                }
            }
        }
    };

    const renderHeader = (title: string, progress: number) => (
        <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
                <p className="text-sm text-text-secondary font-semibold">{lesson.title}</p>
            </div>
            <div className="w-full bg-base-300 rounded-full h-2 mt-4">
                <div className="bg-secondary h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
      </div>
    );

    const renderQuizSection = (activity: Activity, questions: Question[]) => (
        <>
            <div className="bg-base-200 rounded-lg p-4 mb-6">
                <p className="font-semibold text-text-primary">{activity.title}</p>
                <p className="text-sm text-text-secondary mt-1">{activity.content}</p>
                {activity.title.includes('Listening') && (
                     <div className="mt-4">
                        <button 
                            onClick={handlePlayAudio} 
                            disabled={isLoadingAudio} 
                            className="flex items-center gap-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg disabled:bg-gray-400 transition-colors"
                        >
                            {isLoadingAudio ? <Loader2Icon className="h-5 w-5 animate-spin" /> : isPlaying ? <><PauseIcon className="h-5 w-5" /> Pause Audio</> : <><PlayIcon className="h-5 w-5" /> Play Audio</>}
                        </button>
                    </div>
                )}
            </div>
            <div className="space-y-6">
            {questions.map((q, index) => (
                <div key={q.id}>
                    <p className="font-semibold text-text-primary">{index + 1}. {q.text}</p>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {q.options.map(option => {
                            const isSelected = answers[q.id] === option;
                            return (
                                <button
                                    key={option}
                                    onClick={() => handleSelectAnswer(q.id, option)}
                                    className={`p-3 text-left rounded-lg border-2 transition-all duration-200 ${isSelected ? 'border-primary bg-blue-50' : 'border-base-300 hover:border-secondary'}`}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                </div>
            ))}
            </div>
        </>
    );

    const score = (questions: Question[]) => Object.values(questions).reduce((total, q) => {
        return answers[q.id] === q.correctAnswer ? total + 1 : total;
    }, 0);

    const readingScore = score(readingQuestions);
    const listeningScore = score(listeningQuestions);
    const totalScore = readingScore + listeningScore;
    const totalQuestions = readingQuestions.length + listeningQuestions.length;
    const scorePercentage = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;


    if (step === 'start') {
        return (
            <div className="bg-base-100 rounded-xl shadow-lg p-6 md:p-8 text-center max-w-2xl mx-auto">
                 <button onClick={onBack} className="absolute top-4 left-4 p-2 rounded-full hover:bg-base-200 transition-colors">
                    <ArrowLeftIcon className="h-6 w-6 text-text-secondary" />
                </button>
                <h2 className="text-3xl font-bold text-text-primary">{lesson.title}</h2>
                <p className="text-text-secondary mt-2">This test has three sections: Reading, Listening, and Writing. Good luck!</p>
                <button 
                    onClick={() => setStep('reading')}
                    className="mt-8 bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                    Start Test
                </button>
            </div>
        );
    }
    
    if (step === 'results') {
        return (
             <div className="bg-base-100 rounded-xl shadow-lg p-6 md:p-8 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-text-primary">Test Complete!</h2>
                <div className={`mt-6 w-32 h-32 mx-auto rounded-full flex items-center justify-center ${scorePercentage >= 70 ? 'bg-green-100' : 'bg-red-100'}`}>
                    <span className={`text-5xl font-bold ${scorePercentage >= 70 ? 'text-green-600' : 'text-red-600'}`}>{scorePercentage}%</span>
                </div>
                <p className="text-xl font-semibold text-text-primary mt-4">You scored {totalScore} out of {totalQuestions}</p>
                 <div className="mt-2 text-text-secondary">
                    <span>Reading: {readingScore}/{readingQuestions.length}</span>
                    <span className="mx-2">|</span>
                    <span>Listening: {listeningScore}/{listeningQuestions.length}</span>
                </div>
                
                {writingActivity && (
                    <div className="mt-6 text-left space-y-2">
                        <h3 className="font-bold text-lg">Your Writing Submission:</h3>
                         <div className="p-3 rounded-lg bg-base-200">
                            <p className="font-semibold">{writingActivity.content}</p>
                            <p className="mt-2 text-text-secondary italic">"{answers[writingActivity.id] || 'No answer submitted.'}"</p>
                        </div>
                    </div>
                )}

                <button 
                    onClick={onComplete}
                    className="mt-8 w-full bg-accent hover:bg-amber-500 text-text-primary font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                    Finish & Continue
                </button>
            </div>
        );
    }

    return (
        <div className="bg-base-100 rounded-xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
            {step === 'reading' && renderHeader('Section 1: Reading', 0)}
            {step === 'listening' && renderHeader('Section 2: Listening', 33)}
            {step === 'writing' && renderHeader('Section 3: Writing', 66)}

            {step === 'reading' && readingActivity && renderQuizSection(readingActivity, readingQuestions)}
            {step === 'listening' && listeningActivity && renderQuizSection(listeningActivity, listeningQuestions)}
            
            {step === 'writing' && writingActivity && (
                 <>
                    <div className="bg-base-200 rounded-lg p-4 mb-6">
                        <p className="font-semibold text-text-primary">{writingActivity.title}</p>
                        <p className="text-sm text-text-secondary mt-1">{writingActivity.content}</p>
                    </div>
                    <textarea 
                        className="w-full h-40 p-3 bg-base-200 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Write your answer here..."
                        value={answers[writingActivity.id] || ''}
                        onChange={(e) => handleWritingChange(e.target.value)}
                    />
                </>
            )}

            <div className="mt-8 flex justify-end">
                {step === 'reading' && (
                    <button onClick={() => setStep('listening')} disabled={!isSectionComplete(readingQuestions)} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors disabled:bg-gray-400">
                        Next Section <ChevronRightIcon className="inline h-5 w-5"/>
                    </button>
                )}
                 {step === 'listening' && (
                    <button onClick={() => setStep('writing')} disabled={!isSectionComplete(listeningQuestions)} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors disabled:bg-gray-400">
                        Next Section <ChevronRightIcon className="inline h-5 w-5"/>
                    </button>
                )}
                 {step === 'writing' && (
                    <button onClick={() => setStep('results')} disabled={!answers[writingActivity.id]} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors disabled:bg-gray-400">
                        Finish Test <CheckCircleIcon className="inline h-5 w-5"/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default ModuleTestView;