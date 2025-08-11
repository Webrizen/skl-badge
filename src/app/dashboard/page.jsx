import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { 
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  CreditCard,
  Bell,
  HelpCircle,
  LogOut,
  Box,
  Database,
  QrCode,
  BadgeCheck
} from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome Card */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm p-6 mb-6 border border-zinc-200 dark:border-zinc-700">
            <h3 className="text-lg font-medium mb-2">Welcome back, {data.user.email}!</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Here's what's happening with your ID badge system today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard 
              icon={<FileText className="w-6 h-6" />}
              title="Total IDs Generated"
              value="1,248"
              change="+12%"
              positive
            />
            <StatCard 
              icon={<Users className="w-6 h-6" />}
              title="Active Users"
              value="428"
              change="+5%"
              positive
            />
            <StatCard 
              icon={<QrCode className="w-6 h-6" />}
              title="QR Scans Today"
              value="87"
              change="-3%"
              positive={false}
            />
            <StatCard 
              icon={<CreditCard className="w-6 h-6" />}
              title="Storage Used"
              value="65%"
              change="+8%"
              positive
            />
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm p-6 border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Recent Activity</h3>
              <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                View All
              </a>
            </div>
            <div className="space-y-4">
              <ActivityItem 
                icon={<FileText className="w-5 h-5 text-green-500" />}
                title="New batch of student IDs generated"
                time="2 hours ago"
              />
              <ActivityItem 
                icon={<Users className="w-5 h-5 text-blue-500" />}
                title="5 new employees added"
                time="5 hours ago"
              />
              <ActivityItem 
                icon={<Settings className="w-5 h-5 text-purple-500" />}
                title="System settings updated"
                time="1 day ago"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Reusable Stat Card Component
function StatCard({ icon, title, value, change, positive }) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm p-6 border border-zinc-200 dark:border-zinc-700">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-700">
          {icon}
        </div>
        <span className={`text-sm ${positive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {change}
        </span>
      </div>
      <h4 className="text-zinc-500 dark:text-zinc-400 text-sm mt-4">{title}</h4>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  )
}

// Reusable Activity Item Component
function ActivityItem({ icon, title, time }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-700 mt-1">
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{time}</p>
      </div>
    </div>
  )
}