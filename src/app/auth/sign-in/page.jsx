"use client";

import Link from "next/link";
import { login, signInWithGoogle } from "../actions";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-1 text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Welcome</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Enter your email below to login to your account
          </p>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
        </div>
        
        <div className="p-6 space-y-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="m@example.com"
                required
                type="email"
                className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Password
              </label>
              <input 
                id="password" 
                name="password" 
                required 
                type="password"
                className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
              />
            </div>
            <button
              type="submit"
              formAction={login}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-300 dark:border-zinc-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                  OR
                </span>
              </div>
            </div>

            <button
              formAction={signInWithGoogle}
              className="w-full flex justify-center py-2 px-4 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in with Google
            </button>
          </form>
        </div>
        
        <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-700 text-center">
          <Link 
            href="/sign-up" 
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 underline"
          >
            Don't have an account? Sign up here
          </Link>
        </div>
      </div>
    </main>
  );
}