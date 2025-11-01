import React from 'react';
import { Course, Lesson, Module } from '../../types';
import { ArrowLeftIcon, CheckCircleIcon, ChevronRightIcon, LockIcon } from './icons';

interface CourseViewProps {
  course: Course;
  onSelectLesson: (lessonId: string) => void;
  onBack: () => void;
}

interface LessonItemProps {
  lesson: Lesson;
  onClick: () => void;
  status: 'completed' | 'unlocked' | 'locked';
}

const LessonItem: React.FC<LessonItemProps> = ({ lesson, onClick, status }) => {
  const isLocked = status === 'locked';

  const iconMap = {
    completed: <CheckCircleIcon className="h-5 w-5 text-white" />,
    unlocked: <ChevronRightIcon className="h-5 w-5 text-white" />,
    locked: <LockIcon className="h-5 w-5 text-gray-500" />,
  };

  const iconBgColorMap = {
    completed: 'bg-green-500',
    unlocked: 'bg-secondary',
    locked: 'bg-base-300',
  };

  return (
    <li
      onClick={!isLocked ? onClick : undefined}
      className={`flex items-center justify-between p-4 bg-base-100 rounded-lg transition-all duration-200 ${isLocked ? 'opacity-60 cursor-not-allowed' : 'hover:bg-base-200 cursor-pointer'}`}
    >
      <div className="flex items-center gap-4">
        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${iconBgColorMap[status]}`}>
          {iconMap[status]}
        </div>
        <div>
          <p className={`font-semibold ${isLocked ? 'text-text-secondary' : 'text-text-primary'}`}>{lesson.title}</p>
          <p className="text-sm text-text-secondary">{lesson.estimatedTime} min</p>
        </div>
      </div>
      {!isLocked && <ChevronRightIcon className="h-5 w-5 text-gray-400" />}
    </li>
  );
};

const ModuleCard: React.FC<{ module: Module; onSelectLesson: (lessonId: string) => void; isLocked: boolean }> = ({ module, onSelectLesson, isLocked }) => {
  return (
  <div className="bg-base-100 rounded-xl shadow-md p-6 relative">
    {isLocked && (
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center rounded-xl z-10">
            <div className="text-center">
                <LockIcon className="h-8 w-8 text-text-secondary mx-auto"/>
                <p className="font-semibold text-text-secondary mt-2">Complete previous module to unlock</p>
            </div>
        </div>
    )}
    <h3 className="text-xl font-bold text-text-primary">{module.title}</h3>
    <div className="mt-2 mb-4">
        <div className="w-full bg-base-300 rounded-full h-2">
            <div className="bg-accent h-2 rounded-full" style={{ width: `${module.progress}%` }}></div>
        </div>
    </div>
    <ul className="space-y-3">
      {module.lessons.map((lesson, index) => {
        let status: 'completed' | 'unlocked' | 'locked';
        if (lesson.isCompleted) {
          status = 'completed';
        } else {
          status = 'unlocked';
        }
        
        return (
            <LessonItem 
            key={lesson.id} 
            lesson={lesson} 
            onClick={() => onSelectLesson(lesson.id)} 
            status={status}
            />
        );
      })}
    </ul>
  </div>
)};


const CourseView: React.FC<CourseViewProps> = ({ course, onSelectLesson, onBack }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-base-300 transition-colors">
          <ArrowLeftIcon className="h-6 w-6 text-text-secondary" />
        </button>
        <div>
          <span className="text-sm font-bold bg-primary text-white py-1 px-3 rounded-full">{course.level}</span>
          <h2 className="text-3xl font-bold text-text-primary mt-2">{course.title}</h2>
        </div>
      </div>
      
      <div className="space-y-6">
        {course.modules.map((module, index) => {
          const isModuleLocked = false;
          return (
            <ModuleCard 
              key={module.id} 
              module={module} 
              onSelectLesson={onSelectLesson}
              isLocked={isModuleLocked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CourseView;