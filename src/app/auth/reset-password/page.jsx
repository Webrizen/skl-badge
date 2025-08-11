"use client";

import { resetPassword } from "../actions";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-1 text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Reset Password</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Enter your new password below.
          </p>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
        </div>
        
        <div className="p-6 space-y-6">
          <form className="space-y-6" action={resetPassword}>
            <input type="hidden" name="code" value={code} />
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                New Password
              </label>
              <input 
                id="password" 
                name="password" 
                required 
                type="password"
                className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                required
                type="password"
                className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
