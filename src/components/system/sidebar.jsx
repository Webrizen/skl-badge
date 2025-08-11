"use client"
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { ThemeToggleButton } from '../ui/theme-toggle-button';
import {
  LayoutDashboard,
  Users,
  FileText,
  Calendar,
  QrCode,
  Settings,
  HelpCircle,
  Database,
  BadgeCheck,
  Contact
} from 'lucide-react';

const Sidebar = ({ children }) => {
  const [sidebarToggled, setSidebarToggled] = useState(false)
  const pathname = usePathname()
  const toggleSidebar = () => {
    setSidebarToggled(sidebarToggled => !sidebarToggled)
  }

  // Function to check if a link is active
  const isActive = (href) => {
    return pathname === href ||
      (href !== '/dashboard' && pathname.startsWith(href))
  }

  const navLinks = [
    {
      href: '/dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: 'Dashboard'
    },
    {
      href: '/dashboard/users',
      icon: <Users className="w-5 h-5" />,
      label: 'Users'
    },
    {
      href: '/dashboard/templates',
      icon: <FileText className="w-5 h-5" />,
      label: 'ID Templates'
    },
    {
      href: '/dashboard/import',
      icon: <Database className="w-5 h-5" />,
      label: 'Data Import'
    },
    {
      href: '/dashboard/verification',
      icon: <QrCode className="w-5 h-5" />,
      label: 'QR Verification'
    },
    {
      href: '/dashboard/settings',
      icon: <Settings className="w-5 h-5" />,
      label: 'Badge Settings'
    }
  ]

  return (
    <div className="flex container mx-auto h-screen overflow-hidden scrollbar-hide">
      {/* Sidebar */}
      <aside
        data-sidebar
        className={`fixed h-full py-3 overflow-hidden lg:static w-11/12 max-w-[18rem] md:w-72 transition-all ${sidebarToggled ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 bg-white dark:bg-zinc-950 shadow-lg shadow-zinc-200/40 dark:shadow-zinc-800/10 flex flex-col justify-between px-4 z-50`}
      >
        <div className="flex-1">

          {/* Navigation */}
          <nav className="pt-2">
            <ul className="text-zinc-700 dark:text-zinc-300 space-y-1">
              {navLinks.map((link) => (
                <li 
                  key={link.href}
                  className={`relative ${isActive(link.href) ? 'before:absolute before:-left-4 before:w-1.5 before:h-4/5 before:rounded-r-md before:top-1/2 before:-translate-y-1/2 before:bg-blue-600' : ''}`}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center px-4 py-2.5 gap-x-3 rounded-md ${isActive(link.href) ? 'text-blue-600 bg-zinc-50 dark:bg-zinc-900/80' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800/50'}`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Links */}
        <div className="pb-4">
          <div className="flex flex-col gap-1">
            <Link
              href="/support"
              className={`flex items-center px-4 py-2.5 gap-x-3 rounded-md ${pathname === '/support' ? 'text-blue-600 bg-zinc-50 dark:bg-zinc-900/80' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800/50'}`}
            >
              <HelpCircle className="w-5 h-5" />
              Support
            </Link>
            <div className="flex items-center justify-between px-4 py-2">
              <ThemeToggleButton variant="ghost" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-zinc-50 dark:bg-zinc-900">
        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden fixed right-2 top-2 p-4 z-40">
          <button
            onClick={toggleSidebar}
            className="p-3 rounded-full bg-blue-600 dark:bg-blue-500 outline-none w-12 aspect-square flex flex-col relative justify-center items-center"
            aria-label="Toggle sidebar"
          >
            <span className={`
              w-6 h-0.5 rounded-full bg-white transition-transform duration-300 ease-linear
              ${sidebarToggled ? "rotate-[40deg] translate-y-1.5" : ""}
            `} />
            <span className={`
              w-6 origin-center mt-1 h-0.5 rounded-full bg-white transition-all duration-300 ease-linear
              ${sidebarToggled ? "opacity-0 scale-x-0" : ""}
            `} />
            <span className={`
              w-6 mt-1 h-0.5 rounded-full bg-white transition-all duration-300 ease-linear
              ${sidebarToggled ? "-rotate-[40deg] -translate-y-1.5" : ""}
            `} />
          </button>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Sidebar