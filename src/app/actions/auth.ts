'use server';

import { redirect } from 'next/navigation';
import { createSession, deleteSession } from '@/lib/session';

const USER_SERVICE = process.env.NEXT_PUBLIC_USER_SERVICE_URL || 'http://localhost:3002';

export type AuthState = {
  errors?: {
    email?: string[];
    password?: string[];
    firstName?: string[];
    lastName?: string[];
    general?: string[];
  };
  message?: string;
} | undefined;

export async function login(state: AuthState, formData: FormData): Promise<AuthState> {
  const email    = formData.get('email')?.toString().trim() ?? '';
  const password = formData.get('password')?.toString() ?? '';

  const errors: NonNullable<AuthState>['errors'] = {};
  if (!email)    errors.email    = ['Email is required'];
  if (!password) errors.password = ['Password is required'];
  if (Object.keys(errors).length) return { errors };

  let data: any;
  try {
    const res = await fetch(`${USER_SERVICE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    data = await res.json();
    if (!res.ok) {
      return { errors: { general: [data.error || 'Invalid email or password'] } };
    }
  } catch {
    return { errors: { general: ['Could not reach server. Please try again.'] } };
  }

  await createSession({
    id:        data.user.id,
    email:     data.user.email,
    firstName: data.user.firstName,
    lastName:  data.user.lastName,
    role:      data.user.role,
    avatar:    data.user.avatar ?? null,
    token:     data.token,
  });

  redirect('/dashboard');
}

export async function register(state: AuthState, formData: FormData): Promise<AuthState> {
  const firstName = formData.get('firstName')?.toString().trim() ?? '';
  const lastName  = formData.get('lastName')?.toString().trim() ?? '';
  const email     = formData.get('email')?.toString().trim() ?? '';
  const password  = formData.get('password')?.toString() ?? '';
  const phone     = formData.get('phone')?.toString().trim();

  const errors: NonNullable<AuthState>['errors'] = {};
  if (!firstName) errors.firstName = ['First name is required'];
  if (!lastName)  errors.lastName  = ['Last name is required'];
  if (!email)     errors.email     = ['Email is required'];
  if (!password || password.length < 8) errors.password = ['Password must be at least 8 characters'];
  if (Object.keys(errors).length) return { errors };

  let data: any;
  try {
    const res = await fetch(`${USER_SERVICE}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, firstName, lastName, phone }),
    });
    data = await res.json();
    if (!res.ok) {
      return { errors: { general: [data.error || 'Registration failed'] } };
    }
  } catch {
    return { errors: { general: ['Could not reach server. Please try again.'] } };
  }

  await createSession({
    id:        data.user.id,
    email:     data.user.email,
    firstName: data.user.firstName,
    lastName:  data.user.lastName,
    role:      data.user.role,
    avatar:    data.user.avatar ?? null,
    token:     data.token,
  });

  redirect('/dashboard');
}

export async function logout() {
  await deleteSession();
  redirect('/login');
}
