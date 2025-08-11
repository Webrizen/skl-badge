import Link from 'next/link'

export default function ConfirmEmail() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Check your email
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
          We&apos;ve sent a confirmation link to your email address. Please click the link to complete your registration.
        </p>
        <Link href="/auth/sign-in">
          <a className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Go back to Sign In
          </a>
        </Link>
      </div>
    </div>
  )
}
