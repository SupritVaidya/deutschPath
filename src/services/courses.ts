// src/services/courses.ts
import { API_URL } from "../lib/api";
export async function fetchCourses(token: string) {
  const resp = await fetch(`${API_URL}/api/courses`, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  if (!resp.ok) throw new Error("Failed to fetch courses");
  return await resp.json();
}
