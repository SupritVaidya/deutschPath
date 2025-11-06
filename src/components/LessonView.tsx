import React, { useState, useMemo, useRef } from 'react';
import { Lesson, Activity, ActivityType, CEFRLevel } from '../../types';
import { ArrowLeftIcon, LanguagesIcon, PlayIcon, PauseIcon, Loader2Icon, CheckCircleIcon, XIcon, TargetIcon } from './icons';
import ConversationPractice from './ConversationPractice';
import AssessmentView from './AssessmentView';
import { generateSpeech } from '../services/geminiService';
import ModuleTestView from './ModuleTestView';

interface LessonViewProps {
  lesson: Lesson;
  courseLevel: CEFRLevel;
  onBack: () => void;
  onCompleteLesson: () => void;
  onCompleteActivity: (activityId: string) => void;
}

const ActivityCard: React.FC<{ activity: Activity; onStartPractice: (topic: string) => void; onCompleteActivity: (activityId: string) => void; }> = ({ activity, onStartPractice, onCompleteActivity }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const isConversation = activity.type === ActivityType.Conversation;
  const isListeningActivity = activity.type === ActivityType.Listening;
  
  // Grammar Quiz State
  const isGrammarQuiz = activity.type === ActivityType.Grammar && activity.questions && activity.questions.length > 0;
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showQuizResults, setShowQuizResults] = useState(activity.isCompleted || false);

  // Audio Player State
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  const handlePlayPause = async () => {
    if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    const audioContext = audioContextRef.current;
    
    if (isPlaying) {
        if (audioSourceRef.current) {
            audioSourceRef.current.stop();
            audioSourceRef.current = null;
        }
        setIsPlaying(false);
        return;
    }

    if (audioBuffer) {
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.onended = () => {
            setIsPlaying(false);
            audioSourceRef.current = null;
        };
        source.start(0);
        audioSourceRef.current = source;
        setIsPlaying(true);
    } else if (activity.dialogue) {
        setIsLoadingAudio(true);
        const dialogueText = activity.dialogue.map(d => `${d.speaker}: ${d.line}`).join('\n');
        const base64Audio = await generateSpeech(dialogueText);
        setIsLoadingAudio(false);

        if (base64Audio && audioContext) {
            try {
                const decodedBytes = decode(base64Audio);
                const buffer = await decodeAudioData(decodedBytes, audioContext, 24000, 1);
                setAudioBuffer(buffer);

                const source = audioContext.createBufferSource();
                source.buffer = buffer;
                source.connect(audioContext.destination);
                source.onended = () => {
                    setIsPlaying(false);
                    audioSourceRef.current = null;
                };
                source.start(0);
                audioSourceRef.current = source;
                setIsPlaying(true);
            } catch (error) {
                console.error("Error decoding audio data:", error);
            }
        }
    }
  };

  const handleSelectQuizAnswer = (questionId: string, answer: string) => {
    if (activity.isCompleted || showQuizResults) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmitQuiz = () => {
    if (!activity.questions) return;
    setShowQuizResults(true);
    const score = activity.questions.reduce((total, q) => (selectedAnswers[q.id] === q.correctAnswer ? total + 1 : total), 0);
    const scorePercentage = Math.round((score / activity.questions.length) * 100);
    if (scorePercentage >= 70 && !activity.isCompleted) {
        onCompleteActivity(activity.id);
    }
  };

  const score = useMemo(() => {
    if (!isGrammarQuiz || !activity.questions) return 0;
    return activity.questions.reduce((total, q) => (selectedAnswers[q.id] === q.correctAnswer ? total + 1 : total), 0);
  }, [selectedAnswers, activity.questions, isGrammarQuiz]);


  return (
    <div className={`bg-base-100 p-5 rounded-lg shadow space-y-3 transition-all duration-300 ${activity.isCompleted ? 'border-l-4 border-green-500' : 'border-l-4 border-transparent'}`}>
      <div>
        <p className="font-bold text-sm text-primary">{activity.type}</p>
        <h4 className="text-lg font-semibold text-text-primary mt-1">{activity.title}</h4>
        <p className="text-text-secondary mt-1">{activity.content}</p>
      </div>

      {/* Vocabulary Section */}
      {activity.vocabulary && (
        <div className="pt-2">
          <div className="bg-base-200/60 rounded-lg p-4">
            <h5 className="font-semibold text-text-primary mb-2">Vocabulary List</h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm">
              {activity.vocabulary.map((item, index) => (
                <li key={index} className="flex items-baseline">
                  <span className="text-text-secondary w-10 text-right mr-2 font-mono">{item.article || ''}</span>
                  <div className="flex-1">
                    <span className="font-semibold text-text-primary">{item.german}</span>
                    <span className="text-text-secondary"> - {item.english}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Dialogue Section */}
      {activity.dialogue && (
        <div className="pt-2">
           <div className="bg-base-200/60 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-4">
                  <h5 className="font-semibold text-text-primary">Dialogue</h5>
                   {isListeningActivity && (
                        <button 
                            onClick={handlePlayPause} 
                            disabled={isLoadingAudio} 
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white disabled:bg-gray-400 transition-colors"
                            aria-label={isPlaying ? 'Pause dialogue' : 'Play dialogue'}
                        >
                            {isLoadingAudio ? <Loader2Icon className="h-5 w-5 animate-spin" /> : isPlaying ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5 pl-0.5" />}
                        </button>
                    )}
                </div>
                {activity.dialogueTranslation && (
                    <button onClick={() => setShowTranslation(!showTranslation)} className="flex items-center gap-1 text-sm text-primary hover:underline font-semibold">
                        <LanguagesIcon className="h-4 w-4" />
                        {showTranslation ? 'Hide' : 'Show'} Translation
                    </button>
                )}
            </div>
            <div className="space-y-2 text-sm">
              {activity.dialogue.map((turn, index) => (
                <div key={index}>
                  <p><span className="font-bold text-text-primary">{turn.speaker}:</span> {turn.line}</p>
                  {showTranslation && activity.dialogueTranslation?.[index] && (
                    <p className="text-text-secondary pl-2 italic">
                        <span className="font-bold">{activity.dialogueTranslation[index].speaker}:</span> {activity.dialogueTranslation[index].line}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

       {/* Grammar Quiz Section */}
       {isGrammarQuiz && activity.questions && (
        <div className="pt-2">
          <div className="bg-base-200/60 rounded-lg p-4">
            <h5 className="font-semibold text-text-primary mb-4">Practice Quiz</h5>
            <div className="space-y-5">
              {activity.questions.map(q => (
                <div key={q.id}>
                  <p className="font-semibold text-text-primary">{q.text}</p>
                  <div className="mt-3 space-y-2">
                    {q.options.map(option => {
                      const isSelected = selectedAnswers[q.id] === option;
                      const isCorrect = option === q.correctAnswer;
                      let resultClass = '';
                      let resultIcon = null;

                      if (showQuizResults) {
                        if (isCorrect) {
                          resultClass = 'border-green-500 bg-green-100/60 text-green-800';
                          if (isSelected) resultIcon = <CheckCircleIcon className="h-5 w-5 text-green-600" />;
                        } else if (isSelected && !isCorrect) {
                          resultClass = 'border-red-500 bg-red-100/60 text-red-800';
                          resultIcon = <XIcon className="h-5 w-5 text-red-600" />;
                        } else {
                          resultClass = 'border-base-300';
                        }
                      } else {
                        resultClass = isSelected ? 'border-primary bg-blue-100/60' : 'border-base-300 hover:border-secondary';
                      }

                      return (
                        <button
                          key={option}
                          onClick={() => handleSelectQuizAnswer(q.id, option)}
                          disabled={showQuizResults}
                          className={`w-full p-3 rounded-lg text-left transition-all duration-200 border-2 flex justify-between items-center ${resultClass} disabled:cursor-not-allowed`}
                        >
                          <span>{option}</span>
                          {resultIcon}
                        </button>
                      );
                    })}
                  </div>
                   {showQuizResults && selectedAnswers[q.id] !== q.correctAnswer && (
                       <div className="mt-2 flex items-center gap-2 text-sm text-primary">
                           <TargetIcon className="h-5 w-5" />
                           <span>Correct answer: {q.correctAnswer}</span>
                       </div>
                   )}
                </div>
              ))}
            </div>
            {!activity.isCompleted && (
              <div className="mt-6 text-right">
                {showQuizResults ? (
                   <div className="text-center font-semibold text-lg text-text-primary p-3 bg-base-100 rounded-lg">
                        You scored {score} out of {activity.questions.length}!
                   </div>
                ) : (
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(selectedAnswers).length !== activity.questions.length}
                    className="bg-accent hover:bg-amber-500 text-text-primary font-bold py-2 px-6 rounded-lg transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Check Answers
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}


      {isConversation && (
         <div className="pt-2">
            <button 
                onClick={() => onStartPractice(activity.title)}
                className="w-full md:w-auto bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
                Start Conversation Practice
            </button>
         </div>
      )}
    </div>
  );
};


const LessonView: React.FC<LessonViewProps> = ({ lesson, courseLevel, onBack, onCompleteLesson, onCompleteActivity }) => {
  const [practicingTopic, setPracticingTopic] = useState<string | null>(null);
  const [isTakingTest, setIsTakingTest] = useState(false);

  const quizActivity = useMemo(() => 
    lesson.activities.find(a => a.type === ActivityType.Quiz && a.questions && a.questions.length > 0),
    [lesson.activities]
  );
  
  const isModuleTest = useMemo(() => lesson.title.toLowerCase().includes('module test'), [lesson.title]);

  const handleStartPractice = (topic: string) => {
    setPracticingTopic(topic);
  };
  
  const handleEndPractice = () => {
    setPracticingTopic(null);
    const conversationActivity = lesson.activities.find(a => a.type === ActivityType.Conversation);
    if (conversationActivity) {
      onCompleteActivity(conversationActivity.id);
    }
  };

  const handleStartTest = () => {
    setIsTakingTest(true);
  }

  const handleTestComplete = () => {
    onCompleteLesson();
    // onBack will be called by the parent component after state update
  }

  if (practicingTopic) {
    return <ConversationPractice topic={practicingTopic} level={courseLevel} onEnd={handleEndPractice} />;
  }
  
  if (isModuleTest) {
      return <ModuleTestView lesson={lesson} courseLevel={courseLevel} onComplete={onCompleteLesson} onBack={onBack} />
  }

  if (isTakingTest && quizActivity) {
    return <AssessmentView lesson={lesson} quizActivity={quizActivity} onComplete={handleTestComplete} />;
  }

  const containsNonQuizActivities = lesson.activities.some(a => a.type !== ActivityType.Quiz && a.type !== ActivityType.Grammar);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-base-300 transition-colors">
          <ArrowLeftIcon className="h-6 w-6 text-text-secondary" />
        </button>
        <div>
          <h2 className="text-3xl font-bold text-text-primary">{lesson.title}</h2>
          <p className="text-text-secondary">Estimated time: {lesson.estimatedTime} minutes</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-text-primary">Activities</h3>
        {quizActivity && !isModuleTest ? (
            <div className="bg-base-100 p-5 rounded-lg shadow text-center">
                 <h4 className="text-lg font-semibold text-text-primary">{quizActivity.title}</h4>
                 <p className="text-text-secondary mt-2">{quizActivity.content}</p>
                 <button 
                    onClick={handleStartTest}
                    className="mt-4 bg-accent hover:bg-amber-500 text-text-primary font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                    Start Test
                </button>
            </div>
        ) : (
            lesson.activities.map(activity => (
              <ActivityCard 
                key={activity.id} 
                activity={activity} 
                onStartPractice={handleStartPractice}
                onCompleteActivity={onCompleteActivity}
              />
            ))
        )}
      </div>
      
      {!quizActivity && !isModuleTest && !lesson.isCompleted && containsNonQuizActivities && (
        <div className="mt-8 text-center">
            <button
                onClick={onCompleteLesson}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto"
            >
                <CheckCircleIcon className="w-6 h-6" />
                Complete Lesson & Continue
            </button>
        </div>
      )}
    </div>
  );
};

// Helper functions for audio decoding
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


export default LessonView;
