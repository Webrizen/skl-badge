import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '@/app/actions/login/action'

export default async function DashboardLayout({ children }) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth/sign-in')
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-zinc-100 dark:bg-zinc-800 p-4">
        <div className="flex flex-col h-full">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <nav className="flex-1">
            <ul>
              {/* Add navigation links here */}
            </ul>
          </nav>
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
              Logged in as {data.user.email}
            </p>
            <form action={logout}>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
