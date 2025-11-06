import React, { useEffect, useState } from 'react';
import { calculateLessonProgress } from '../services/lessonProgress';
import { User, Course } from '../../types';
import { ChevronRightIcon, LockIcon } from './icons';
// Removed unused import: fetchModuleProgress
// Removed unused import: moduleProgress

interface DashboardProps {
  user: User;
  courses: Course[];
  onSelectCourse: (courseId: string) => void;
}

const CourseCard: React.FC<{ course: Course; onClick: () => void; isLocked: boolean }> = ({ course, onClick, isLocked }) => (
  <div 
    onClick={onClick}
    className={`bg-base-100 rounded-xl shadow-lg transition-all duration-300 overflow-hidden flex flex-col relative ${isLocked ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-xl cursor-pointer'}`}
  >
    {isLocked && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-xl z-10">
            <LockIcon className="h-10 w-10 text-white" />
        </div>
    )}
    <div className="p-6 flex-grow">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-sm font-bold bg-primary text-white py-1 px-3 rounded-full">{course.level}</span>
          <h3 className="text-xl font-bold mt-3 text-text-primary">{course.title}</h3>
        </div>
        <ChevronRightIcon className="h-6 w-6 text-gray-400 mt-1" />
      </div>
      <p className="text-text-secondary mt-2 text-sm">{course.description}</p>
    </div>
    <div className="p-6 pt-0">
      <p className="text-xs text-text-secondary font-medium mb-1">PROGRESS</p>
      <div className="w-full bg-base-300 rounded-full h-2.5">
        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
      </div>
      <span className="text-xs font-semibold text-primary mt-1 block">{Number(course.progress).toFixed(2)}% Complete</span>
    </div>
  </div>
);

const Dashboard: React.FC<DashboardProps> = ({ user, courses, onSelectCourse }) => {
  const [levelProgress, setLevelProgress] = useState<{ [level: string]: number }>({});
  useEffect(() => {
    async function fetchProgress() {
      try {
        const progress = await calculateLessonProgress(user.id);
        setLevelProgress(progress);
      } catch (err) {
        setLevelProgress({});
      }
    }
    fetchProgress();
  }, [user.id]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-text-primary">Willkommen zurück, {user.name.split(' ')[0]}!</h2>
        <p className="text-text-secondary mt-1">Ready to continue your German learning journey?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => {
          const isLocked = false;
          // Use levelProgress for this course's progress if available (by level, lowercased)
          let progress = levelProgress[course.level.toLowerCase()] ?? 0;
          // If the value is a fraction (0-1), convert to percentage
          if (progress > 0 && progress <= 1) progress = progress * 100;
          console.log('Course:', course.level, 'Progress:', progress);
          return (
            <CourseCard 
              key={course.id} 
              course={{ ...course, progress }}
              onClick={() => !isLocked && onSelectCourse(course.id)}
              isLocked={isLocked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;