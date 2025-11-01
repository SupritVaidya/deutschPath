import React, { useState, useMemo } from 'react';
import { markLessonComplete } from './src/services/lessonProgress';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { User, Course, Module, Lesson, UserProgressDB, Activity } from './types';
import { MOCK_COURSES, MOCK_USERS_DB, MOCK_USER_PROGRESS_DB } from './constants';
import Dashboard from './src/components/Dashboard';
import CourseView from './src/components/CourseView';
import LessonView from './src/components/LessonView';
import { Header } from './src/components/Header';
import { HelpCircleIcon } from './src/components/icons';
import AIAssistant from './src/components/AIAssistant';
import LoginScreen from './src/components/LoginScreen';
import ProfileModal from './src/components/ProfileModal';

const mergeProgressWithCourses = (coursesTemplate: Course[], userProgress: any): Course[] => {
  if (!userProgress) return JSON.parse(JSON.stringify(coursesTemplate));
  const userCourses = JSON.parse(JSON.stringify(coursesTemplate));
  userCourses.forEach((course: Course) => {
    const courseProg = userProgress[course.id];
    if (courseProg) {
      course.progress = courseProg.progress || 0;
      course.modules.forEach((module: Module) => {
        const moduleProg = courseProg.modules?.[module.id];
        if (moduleProg) {
          module.progress = moduleProg.progress || 0;
          module.lessons.forEach((lesson: Lesson) => {
            const lessonProg = moduleProg.lessons?.[lesson.id];
            if (lessonProg) {
              lesson.isCompleted = lessonProg.isCompleted || false;
              lesson.activities.forEach((activity: Activity) => {
                  if(lessonProg.completedActivities?.[activity.id]) {
                      activity.isCompleted = true;
                  }
              })
            }
          });
        }
      });
    }
  });
  return userCourses;
};

const App: React.FC = () => {
  const [usersDb, setUsersDb] = useState(MOCK_USERS_DB);
  const [userProgressDb, setUserProgressDb] = useState<UserProgressDB>(MOCK_USER_PROGRESS_DB);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const navigate = useNavigate();

  const courses = useMemo(() => {
    if (!currentUser) return [];
    return mergeProgressWithCourses(MOCK_COURSES, userProgressDb[currentUser.id]);
  }, [currentUser, userProgressDb]);

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setSelectedLessonId(null);
    navigate(`/course/${courseId}`);
  };

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    if (selectedCourseId) {
      navigate(`/course/${selectedCourseId}/lesson/${lessonId}`);
    }
  };

  const handleBackToDashboard = () => {
    setSelectedCourseId(null);
    setSelectedLessonId(null);
    navigate('/Dashboard');
  };

  const handleBackToCourse = () => {
    setSelectedLessonId(null);
    if (selectedCourseId) {
      navigate(`/course/${selectedCourseId}`);
    }
  };

  // Fix handleCompleteActivity
  const handleCompleteActivity = (lessonId: string, activityId: string) => {
    if (!currentUser || !selectedCourseId) return;
    const newProgressDb = JSON.parse(JSON.stringify(userProgressDb));
    const userProgress = newProgressDb[currentUser.id] || {};
    const courseTemplate = MOCK_COURSES.find(c => c.id === selectedCourseId);
    if (!courseTemplate) return;
    let lessonModule = null;
    let lessonObj = null;
    for (const module of courseTemplate.modules) {
      const foundLesson = module.lessons.find(l => l.id === lessonId);
      if (foundLesson) {
        lessonModule = module;
        lessonObj = foundLesson;
        break;
      }
    }
    if (!lessonModule || !lessonObj) return;
    userProgress[selectedCourseId] = userProgress[selectedCourseId] || { progress: 0, modules: {} };
    userProgress[selectedCourseId].modules[lessonModule.id] = userProgress[selectedCourseId].modules[lessonModule.id] || { progress: 0, lessons: {} };
    const lessonProgress = userProgress[selectedCourseId].modules[lessonModule.id].lessons[lessonId] || { completedActivities: {} };
    lessonProgress.completedActivities = lessonProgress.completedActivities || {};
    lessonProgress.completedActivities[activityId] = true;
    // Mark lesson as completed if all activities are done
    if (lessonObj.activities.every(act => lessonProgress.completedActivities[act.id])) {
      lessonProgress.isCompleted = true;
    }
    userProgress[selectedCourseId].modules[lessonModule.id].lessons[lessonId] = lessonProgress;
    // Update module progress
    const completedLessons = Object.values(userProgress[selectedCourseId].modules[lessonModule.id].lessons).filter((l: any) => l.isCompleted).length;
    userProgress[selectedCourseId].modules[lessonModule.id].progress = Math.round((completedLessons / lessonModule.lessons.length) * 100);
    // Update course progress
    let totalLessonsInCourse = 0;
    let totalCompletedLessonsInCourse = 0;
    courseTemplate.modules.forEach(module => {
      totalLessonsInCourse += module.lessons.length;
      const moduleProgress = userProgress[selectedCourseId].modules[module.id];
      if (moduleProgress && moduleProgress.lessons) {
        totalCompletedLessonsInCourse += Object.values(moduleProgress.lessons).filter((l: any) => l.isCompleted).length;
      }
    });
    userProgress[selectedCourseId].progress = Math.round((totalCompletedLessonsInCourse / totalLessonsInCourse) * 100);
    setUserProgressDb(newProgressDb);
  };

  // Add handleCompleteLesson
  const handleCompleteLesson = (lessonId: string) => {
    if (!currentUser || !selectedCourseId) return;
    markLessonComplete(currentUser.id, lessonId)
      .then(() => {
        // Update local progress as before
        const newProgressDb = JSON.parse(JSON.stringify(userProgressDb));
        const userProgress = newProgressDb[currentUser.id] || {};
        const courseTemplate = MOCK_COURSES.find(c => c.id === selectedCourseId);
        if (!courseTemplate) return;
        let lessonModule = null;
        let lessonObj = null;
        for (const module of courseTemplate.modules) {
          const foundLesson = module.lessons.find(l => l.id === lessonId);
          if (foundLesson) {
            lessonModule = module;
            lessonObj = foundLesson;
            break;
          }
        }
        if (!lessonModule || !lessonObj) return;
        userProgress[selectedCourseId] = userProgress[selectedCourseId] || { progress: 0, modules: {} };
        userProgress[selectedCourseId].modules[lessonModule.id] = userProgress[selectedCourseId].modules[lessonModule.id] || { progress: 0, lessons: {} };
        const lessonProgress = userProgress[selectedCourseId].modules[lessonModule.id].lessons[lessonId] || { completedActivities: {} };
        lessonProgress.isCompleted = true;
        userProgress[selectedCourseId].modules[lessonModule.id].lessons[lessonId] = lessonProgress;
        // Update module progress
        const completedLessons = Object.values(userProgress[selectedCourseId].modules[lessonModule.id].lessons).filter((l: any) => l.isCompleted).length;
        userProgress[selectedCourseId].modules[lessonModule.id].progress = Math.round((completedLessons / lessonModule.lessons.length) * 100);
        // Update course progress
        let totalLessonsInCourse = 0;
        let totalCompletedLessonsInCourse = 0;
        courseTemplate.modules.forEach(module => {
          totalLessonsInCourse += module.lessons.length;
          const moduleProgress = userProgress[selectedCourseId].modules[module.id];
          if (moduleProgress && moduleProgress.lessons) {
            totalCompletedLessonsInCourse += Object.values(moduleProgress.lessons).filter((l: any) => l.isCompleted).length;
          }
        });
        userProgress[selectedCourseId].progress = Math.round((totalCompletedLessonsInCourse / totalLessonsInCourse) * 100);
        setUserProgressDb(newProgressDb);
        handleBackToCourse();
      })
      .catch((err) => {
        alert('Failed to mark lesson as complete: ' + err.message);
      });
  };

  const selectedCourse = useMemo(
    () => courses.find(c => c.id === selectedCourseId),
    [courses, selectedCourseId]
  );

  const selectedLesson = useMemo(() => {
    if (!selectedCourse) return null;
    for (const module of selectedCourse.modules) {
      const lesson = module.lessons.find(l => l.id === selectedLessonId);
      if (lesson) return lesson;
    }
    return null;
  }, [selectedCourse, selectedLessonId]);

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedCourseId(null);
    setSelectedLessonId(null);
    navigate('/'); // Go back to login on logout
  };

  const handleUpdateUser = (userId: string, newName: string, newEmail: string): { success: boolean, error?: string } => {
    const emailExists = (Object.values(usersDb) as User[]).some(user => user.email === newEmail && user.id !== userId);
    if (emailExists) {
      return { success: false, error: 'This email is already in use by another account.' };
    }
    const updatedUsersDb = { ...usersDb };
    if (updatedUsersDb[userId]) {
      updatedUsersDb[userId] = { ...updatedUsersDb[userId], name: newName, email: newEmail };
      setUsersDb(updatedUsersDb);
      if (currentUser && currentUser.id === userId) {
        setCurrentUser(updatedUsersDb[userId]);
      }
      setIsProfileModalOpen(false);
      return { success: true };
    }
    return { success: false, error: 'User not found.' };
  };

  const renderContent = () => {
    if (selectedLesson && selectedCourse) {
      return (
        <LessonView 
          lesson={selectedLesson} 
          courseLevel={selectedCourse.level}
          onBack={handleBackToCourse}
          onCompleteLesson={() => handleCompleteLesson(selectedLesson.id)}
          onCompleteActivity={(activityId) => handleCompleteActivity(selectedLesson.id, activityId)}
        />
      );
    }
    if (selectedCourse) {
      return (
        <CourseView 
          course={selectedCourse} 
          onSelectLesson={handleSelectLesson} 
          onBack={handleBackToDashboard} 
        />
      );
    }
    return (
      <Dashboard 
        user={currentUser} 
        courses={courses} 
        onSelectCourse={handleSelectCourse} 
      />
    );
  };

  return (
    <div className="min-h-screen bg-base-200 font-sans">
      <Header 
        user={currentUser} 
        onLogout={handleLogout} 
        onEditProfile={() => setIsProfileModalOpen(true)}
      />
      <main className="container mx-auto p-4 md:p-6">
        <Routes>
          <Route path="/" element={<LoginScreen setCurrentUser={setCurrentUser}/>} />
          <Route path="/Dashboard" element={
            <Dashboard 
              user={currentUser} 
              courses={courses} 
              onSelectCourse={handleSelectCourse} 
            />
          } />
          <Route path="/course/:courseId" element={
            selectedCourse ? (
              <CourseView 
                course={selectedCourse} 
                onSelectLesson={handleSelectLesson} 
                onBack={handleBackToDashboard} 
              />
            ) : null
          } />
          <Route path="/course/:courseId/lesson/:lessonId" element={
            selectedCourse && selectedLesson ? (
              <LessonView 
                lesson={selectedLesson} 
                courseLevel={selectedCourse.level}
                onBack={handleBackToCourse}
                onCompleteLesson={() => handleCompleteLesson(selectedLesson.id)}
                onCompleteActivity={(activityId) => handleCompleteActivity(selectedLesson.id, activityId)}
              />
            ) : null
          } />
        </Routes>
      </main>
      <button
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-6 right-6 bg-accent hover:bg-amber-500 text-text-primary w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 z-40"
        aria-label="Open AI Assistant"
      >
        <HelpCircleIcon className="w-8 h-8" />
      </button>

      {isAssistantOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end justify-center sm:items-center sm:justify-end">
             <AIAssistant 
                userLevel={currentUser?.currentLevel ?? 'A1'} 
                onClose={() => setIsAssistantOpen(false)} 
             />
        </div>
      )}

      {isProfileModalOpen && (
         <ProfileModal
            user={currentUser}
            usersDb={usersDb}
            onClose={() => setIsProfileModalOpen(false)}
            onSave={handleUpdateUser}
        />
      )}
    </div>
  );
};

export default App;