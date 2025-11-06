export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Added for authentication
  avatarUrl: string;
  currentLevel: CEFRLevel;
  goals: string[];
}

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'G-A1' | 'G-A2' | 'G-B1' | 'G-B2' | 'G-C1' | 'G-C2';

export interface Course {
  id: string;
  level: CEFRLevel;
  title: string;
  description: string;
  modules: Module[];
  progress: number; // This will now be user-specific
}

export interface Module {
  id:string;
  title: string;
  lessons: Lesson[];
  progress: number; // This will now be user-specific
}

export interface Lesson {
  id: string;
  title: string;
  activities: Activity[];
  estimatedTime: number; // in minutes
  isCompleted: boolean; // This will now be user-specific
}

export enum ActivityType {
  Reading = 'Reading',
  Listening = 'Listening',
  Speaking = 'Speaking',
  Writing = 'Writing',
  Grammar = 'Grammar',
  Vocabulary = 'Vocabulary',
  Quiz = 'Quiz',
  Conversation = 'Conversation Practice',
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  content: string; // General description or instructions
  isCompleted?: boolean;
  questions?: Question[];
  // New detailed content fields
  vocabulary?: {
    german: string;
    english: string;
    article?: 'der' | 'die' | 'das';
  }[];
  dialogue?: {
    speaker: string;
    line: string;
  }[];
  dialogueTranslation?: {
    speaker: string;
    line: string;
  }[];
}


export interface ChatMessage {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    feedback?: {
        correction: string;
        explanation: string;
    }
}

// New types for user-specific progress
export interface UserProgress {
  [courseId: string]: {
    progress: number;
    modules: {
      [moduleId: string]: {
        progress: number;
        lessons: {
          [lessonId: string]: {
            isCompleted: boolean;
            completedActivities?: { [activityId: string]: boolean };
          };
        };
      };
    };
  };
}

export interface UserProgressDB {
  [userId: string]: UserProgress;
}