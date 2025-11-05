import { API_URL } from "../lib/api";
export async function fetchLessonCompletionStatus(userId: string, lessonId: string) {
  const resp = await fetch(`${API_URL}/api/LessonProgresses?userId=${userId}&lessonId=${lessonId}`);
  if (!resp.ok) throw new Error('Failed to fetch lesson completion status');
  const progresses = await resp.json();
  // If any record exists, lesson is completed
  return Array.isArray(progresses) && progresses.length > 0;
}
export async function calculateLessonProgress(userId: string) {
  const resp = await fetch(`${API_URL}/api/LessonProgresses/calculate/${userId}`);
  if (!resp.ok) throw new Error('Failed to fetch lesson progress');
  return await resp.json();
}
import { getToken } from './auth';

export async function markLessonComplete(userId: string, lessonId: string) {
  // Validate payload before sending
  console.log('markLessonComplete called with:', { userId, lessonId });
  if (!userId || typeof userId !== 'string' || !userId.match(/^[0-9a-fA-F-]{36}$/)) {
    throw new Error('Invalid userId: must be a valid GUID');
  }
  if (!lessonId || typeof lessonId !== 'string') {
    throw new Error('Invalid lessonId: must be a string');
  }
  const token = getToken();
  // Only send required fields
  const payload = {
    userId,
    lessonId,
    completedAt: new Date().toISOString()
  };
  console.log('Sending lesson complete request:', payload);
  const resp = await fetch(`${API_URL}/api/LessonProgresses`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  if (!resp.ok) {
    let errorMsg = 'Failed to mark lesson as complete';
    try {
      const errJson = await resp.json();
      errorMsg = errJson.message || errJson.title || errorMsg;
      console.error('Lesson complete error:', errJson);
      if (errJson.errors) {
        console.error('Validation errors:', errJson.errors);
      }
    } catch (e) {
      const errText = await resp.text();
      console.error('Lesson complete error:', errText);
    }
    throw new Error(errorMsg);
  }
  const result = await resp.json();
  console.log('Lesson complete response:', result);
  return result;
}
