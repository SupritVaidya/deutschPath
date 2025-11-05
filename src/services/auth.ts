// src/services/auth.ts
import apiFetch, { API_URL } from "../lib/api";

export type User = {
  id: string | number;
  email: string;
  name?: string;
  level?: string;
  avatarUrl?: string | null;
};

type LoginResponse = {
  token: string;
  expiresAt?: string;
  user: User;
};

export async function signup(name: string, email: string, password: string): Promise<User> {
  const resp = await apiFetch(`${API_URL}/api/Users`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    auth: false
  });

  if (resp.status === 409) {
    const body = await resp.json().catch(() => ({}));
    throw new Error(body?.message || "Email already in use");
  }

  if (!resp.ok) {
    const body = await resp.json().catch(() => ({}));
    throw new Error(body?.message || `Signup failed (${resp.status})`);
  }

  const data = await resp.json();
  return data as User;
}

export async function login(email: string, password: string): Promise<User> {
  const resp = await apiFetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    auth: false
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(err?.message || `Login failed (${resp.status})`);
  }

  const data = (await resp.json()) as LoginResponse;
  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    if (data.expiresAt) localStorage.setItem("tokenExpiresAt", data.expiresAt);
  }
  return data.user;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("tokenExpiresAt");
  if (typeof window !== "undefined") window.location.href = "/login";
}

export function getCurrentUser(): User | null {
  const raw = localStorage.getItem("user");
  if (!raw) return null;
  try { return JSON.parse(raw) as User; } catch { return null; }
}

export function getToken(): string | null {
  return localStorage.getItem("token");
}

export function isLoggedIn(): boolean {
  const token = getToken();
  if (!token) return false;
  const expires = localStorage.getItem("tokenExpiresAt");
  if (expires) {
    const d = new Date(expires);
    if (!isNaN(d.getTime()) && d < new Date()) { logout(); return false; }
  }
  return !!token;
}
