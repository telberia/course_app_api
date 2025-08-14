'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'
import { UserRole, hasPermission, getRoleDisplayName } from '@/lib/roles'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { language } = useLanguage()

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/login')
      return
    }

    // Check if user has access to admin panel
    const userRole = session.user?.role as UserRole
    if (!hasPermission(userRole, 'canAccessAdminPanel')) {
      router.push('/profile')
      return
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">{t('loading', language)}</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const userRole = session.user?.role as UserRole

  // Navigation items based on role
  const getNavigationItems = () => {
    const baseItems = [
      { name: t('overview', language), href: '/dashboard', icon: '📊' },
      { name: t('profile', language), href: '/profile', icon: '👤' },
    ]

    if (hasPermission(userRole, 'canManageUsers')) {
      baseItems.push({ name: t('users', language), href: '/dashboard/users', icon: '👥' })
    }

    if (hasPermission(userRole, 'canManageCourses')) {
      baseItems.push({ name: t('lessons', language), href: '/dashboard/lessons', icon: '📚' })
    }

    if (hasPermission(userRole, 'canViewAnalytics')) {
      baseItems.push({ name: t('statistics', language), href: '/dashboard/stats', icon: '📈' })
    }

    if (hasPermission(userRole, 'canModerateContent')) {
      baseItems.push({ name: t('contentModeration', language), href: '/moderation', icon: '🛡️' })
    }

    if (userRole === 'admin') {
      baseItems.push({ name: t('settings', language), href: '/dashboard/settings', icon: '⚙️' })
      baseItems.push({ name: t('systemSettings', language), href: '/admin/system', icon: '🔧' })
    }

    return baseItems
  }

  const navigationItems = getNavigationItems()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                {t('dashboard', language)}
              </h1>
              <span className="ml-3 px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                {getRoleDisplayName(userRole, language)}
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {t('welcomeUser', language, { name: session.user?.name || 'User' })}
              </span>
              <Link
                href="/profile"
                className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
              >
                {t('profile', language)}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-8">
            <div className="px-4">
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-150"
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
