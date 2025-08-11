export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-1 text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Check your email</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            We've sent a confirmation link to your email address. Please follow the link to confirm your account.
          </p>
        </div>
      </div>
    </main>
  );
}