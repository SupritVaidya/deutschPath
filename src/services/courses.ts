// src/services/courses.ts
export async function fetchCourses(token: string) {
  const resp = await fetch("https://localhost:7114/api/courses", {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  if (!resp.ok) throw new Error("Failed to fetch courses");
  return await resp.json();
}
