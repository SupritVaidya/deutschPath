// src/lib/api.ts
export const API_URL = (import.meta.env.VITE_API_BASE as string) || "https://localhost:7114";
//export const API_URL = (import.meta.env.VITE_API_BASE as string) || "https://deutschpath-euhufrdpdcbreqfg.uksouth-01.azurewebsites.net";

export type FetchOptions = RequestInit & { auth?: boolean };

/**
 * apiFetch - small wrapper for calling your backend.
 * - Prepends API_BASE to relative paths
 * - Attaches Authorization: Bearer <token> automatically unless auth: false
 * - Handles 401 by clearing local auth and redirecting to /login
 */
export default async function apiFetch(path: string, options: FetchOptions = {}) {
  const url = path.startsWith("http") ? path : `${API_URL}${path.startsWith("/") ? "" : "/"}${path}`;

  const headers = new Headers(options.headers ?? { "Content-Type": "application/json" });

  // Attach token automatically unless explicitly disabled
  if (options.auth !== false) {
    const token = localStorage.getItem("token");
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }

  const resp = await fetch(url, { ...options, headers, credentials: "same-origin" });

  // Global 401 handling: clear auth and redirect to login
  if (resp.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("tokenExpiresAt");
    if (typeof window !== "undefined") {
      // Replace with your app's login route if different
      window.location.href = "/login";
    }
    return resp;
  }

  return resp;
}
