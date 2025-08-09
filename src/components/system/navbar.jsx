"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SklBadge from '@/assets/logo.png';
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';
import { createClient } from '@/utils/supabase/client';
import { useRouter, usePathname } from 'next/navigation'

const Navbar = () => {
   const [navIsOpened, setNavIsOpened] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const supabase = createClient()

  // Check user session and subscribe to auth changes
  useEffect(() => {
    const getSession = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)
      } catch (error) {
        console.error('Error getting user:', error)
      } finally {
        setLoading(false)
      }
    }

    getSession()

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        // Force refresh when auth state changes
        if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
          router.refresh()
        }
      }
    )

    return () => subscription?.unsubscribe()
  }, [router, pathname])

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (!error) {
        router.push('/')
        router.refresh()
      }
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const closeNavbar = () => setNavIsOpened(false)
  const toggleNavbar = () => setNavIsOpened(prev => !prev)

  return (
    <>
      <div
        aria-hidden={true}
        onClick={closeNavbar}
        className={`fixed bg-zinc-800/40 inset-0 z-30 ${navIsOpened ? "lg:hidden" : "hidden lg:hidden"}`}
      />

      <header className="sticky top-0 w-full flex items-center h-20 border-b border-b-zinc-100 dark:border-b-zinc-900 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-filter backdrop-blur-xl">
        <nav className="relative mx-auto container w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center min-w-max">
            <Link href="/" className="relative flex items-center gap-2.5">
              <Image
                src={SklBadge}
                alt="SKLBadge Logo"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="inline-flex text-lg font-bold text-indigo-950 dark:text-white">
                SKLBadge
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className={`
            absolute top-full left-0 bg-white dark:bg-zinc-950 lg:bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex lg:transition-none duration-300 ease-linear gap-x-6
            ${navIsOpened ? "visible opacity-100 translate-y-0" : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}
          `}>
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-zinc-700 dark:text-zinc-300 lg:w-full lg:justify-center">
              <li>
                <Link href="#" className="nav-link">Home</Link>
              </li>
              <li>
                <Link href="#features" className="nav-link">Features</Link>
              </li>
              <li>
                <Link href="#templates" className="nav-link">Templates</Link>
              </li>
              <li>
                <Link href="#pricing" className="nav-link">Pricing</Link>
              </li>
              <li>
                <Link href="#contact" className="nav-link">Contact</Link>
              </li>
              {user && (
                <li>
                  <Link href="/dashboard" className="nav-link">Dashboard</Link>
                </li>
              )}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
              {loading ? (
                <>
                  <div className="h-10 w-24 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse" />
                  <div className="h-10 w-24 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse" />
                </>
              ) : user ? (
                <>
                  <button 
                    onClick={handleLogout}
                    className="h-10 flex items-center justify-center w-full sm:w-max rounded-full px-5 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                  >
                    Logout
                  </button>
                  <Link 
                    href="/dashboard" 
                    className="h-10 flex items-center justify-center w-full sm:w-max rounded-full px-5 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    href="/auth/sign-in" 
                    className="h-10 flex items-center justify-center w-full sm:w-max rounded-full px-5 border border-zinc-200 dark:border-zinc-800 text-indigo-600 dark:text-indigo-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/auth/sign-up" 
                    className="h-10 flex items-center justify-center w-full sm:w-max rounded-full px-5 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                  >
                    Sign-up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleNavbar}
              aria-label='toggle navbar'
              className="outline-none border-l border-l-indigo-100 dark:border-l-zinc-800 pl-3 relative py-3"
            >
              <span
                aria-hidden={true}
                className={`flex h-0.5 w-6 rounded bg-zinc-800 dark:bg-zinc-300 transition duration-300 ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}`}
              />
              <span
                aria-hidden={true}
                className={`mt-2 flex h-0.5 w-6 rounded bg-zinc-800 dark:bg-zinc-300 transition duration-300 ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}`}
              />
            </button>
          </div>
        </nav>
      </header>
      <div className='fixed bottom-4 right-4 top-auto left-auto z-50'>
        <ThemeToggleButton variant="circle-blur" start="bottom-right" />
      </div>
    </>
  )
}

export default Navbar;