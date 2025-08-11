import Link from "next/link";
import { forgotPassword } from "../actions";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-1 text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Forgot Password</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Enter your email to receive a password reset link.
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          <form className="space-y-6" action={forgotPassword}>
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
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Reset Link
            </button>
          </form>
        </div>
        
        <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-700 text-center">
          <Link 
            href="/auth/sign-in" 
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 underline"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
