import React, { useState } from 'react';
import { Lesson, Activity, Question } from '../../types';
import { CheckCircleIcon, TargetIcon, XIcon } from './icons';

interface AssessmentViewProps {
  lesson: Lesson;
  quizActivity: Activity;
  onComplete: () => void;
}

const AssessmentView: React.FC<AssessmentViewProps> = ({ lesson, quizActivity, onComplete }) => {
  const questions = quizActivity.questions || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (questionId: string, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const score = Object.entries(selectedAnswers).reduce((total, [questionId, answer]) => {
      const question = questions.find(q => q.id === questionId);
      if (question && question.correctAnswer === answer) {
          return total + 1;
      }
      return total;
  }, 0);
  
  const scorePercentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <div className="bg-base-100 rounded-xl shadow-lg p-6 md:p-8 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary">Test Complete!</h2>
        <div className={`mt-6 w-32 h-32 mx-auto rounded-full flex items-center justify-center ${scorePercentage >= 70 ? 'bg-green-100' : 'bg-red-100'}`}>
            <span className={`text-5xl font-bold ${scorePercentage >= 70 ? 'text-green-600' : 'text-red-600'}`}>{scorePercentage}%</span>
        </div>
        <p className="text-xl font-semibold text-text-primary mt-4">You scored {score} out of {questions.length}</p>
        
        <div className="mt-6 text-left space-y-4">
            <h3 className="font-bold text-lg">Review Your Answers:</h3>
            {questions.map(q => {
                const userAnswer = selectedAnswers[q.id];
                const isCorrect = userAnswer === q.correctAnswer;
                return (
                    <div key={q.id} className="p-3 rounded-lg bg-base-200">
                        <p className="font-semibold">{q.text}</p>
                        <div className={`mt-2 flex items-center gap-2 text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {isCorrect ? <CheckCircleIcon className="h-5 w-5" /> : <XIcon className="h-5 w-5" />}
                            <span>Your answer: {userAnswer || "No answer"}</span>
                        </div>
                        {!isCorrect && (
                            <div className="mt-1 flex items-center gap-2 text-sm text-blue-600">
                                <TargetIcon className="h-5 w-5" />
                                <span>Correct answer: {q.correctAnswer}</span>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>

        <button 
            onClick={onComplete}
            className="mt-8 w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
        >
            Finish & Continue
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return <div>No questions found.</div>;
  }

  return (
    <div className="bg-base-100 rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold text-text-primary">{lesson.title}</h2>
        <p className="text-sm text-text-secondary mt-1">Question {currentQuestionIndex + 1} of {questions.length}</p>
        <div className="w-full bg-base-300 rounded-full h-2 mt-4">
          <div className="bg-secondary h-2 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-text-primary text-center">{currentQuestion.text}</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentQuestion.options.map(option => {
            const isSelected = selectedAnswers[currentQuestion.id] === option;
            return (
              <button
                key={option}
                onClick={() => handleSelectAnswer(currentQuestion.id, option)}
                className={`p-4 rounded-lg text-left transition-all duration-200 border-2 ${isSelected ? 'border-primary bg-blue-50' : 'border-base-300 hover:border-secondary'}`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="mt-8 text-right">
        <button
            onClick={handleNext}
            disabled={!selectedAnswers[currentQuestion.id]}
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default AssessmentView;