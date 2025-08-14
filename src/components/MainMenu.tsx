'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'
import { UserRole, hasPermission, getRoleDisplayName } from '@/lib/roles'
import LanguageSwitcher from './LanguageSwitcher'

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()
  const { language } = useLanguage()

  // Get user role from session
  const userRole: UserRole = (session?.user?.role as UserRole) || 'user'

  const mainMenuItems = [
    { name: t('home', language), href: '/', icon: '🏠' },
    { name: t('about', language), href: '/about', icon: 'ℹ️' },
    { name: t('courses', language), href: '/courses', icon: '📚' },
    { name: t('contact', language), href: '/contact', icon: '📧' },
  ]

  // Basic user menu items
  const basicUserMenuItems = [
    { name: t('profile', language), href: '/profile', icon: '👤' },
    { name: t('progress', language), href: '/progress', icon: '📈' },
  ]

  // Premium user menu items
  const premiumUserMenuItems = [
    ...basicUserMenuItems,
    { name: t('myCourses', language), href: '/my-courses', icon: '🎓' },
    { name: t('premiumContent', language), href: '/premium', icon: '⭐' },
  ]

  // Teacher menu items
  const teacherMenuItems = [
    ...premiumUserMenuItems,
    { name: t('myLessons', language), href: '/my-lessons', icon: '📖' },
    { name: t('students', language), href: '/students', icon: '👥' },
    { name: t('analytics', language), href: '/analytics', icon: '📊' },
  ]

  // Moderator menu items
  const moderatorMenuItems = [
    ...teacherMenuItems,
    { name: t('contentModeration', language), href: '/moderation', icon: '🛡️' },
    { name: t('userManagement', language), href: '/dashboard/users', icon: '👥' },
  ]

  // Admin menu items
  const adminMenuItems = [
    ...moderatorMenuItems,
    { name: t('lessonManagement', language), href: '/dashboard/lessons', icon: '📚' },
    { name: t('statistics', language), href: '/dashboard/stats', icon: '📊' },
    { name: t('settings', language), href: '/dashboard/settings', icon: '⚙️' },
    { name: t('systemSettings', language), href: '/admin/system', icon: '🔧' },
  ]

  // Get appropriate menu items based on role
  const getUserMenuItems = () => {
    switch (userRole) {
      case 'admin':
        return adminMenuItems
      case 'moderator':
        return moderatorMenuItems
      case 'teacher':
        return teacherMenuItems
      case 'premium':
        return premiumUserMenuItems
      default:
        return basicUserMenuItems
    }
  }

  const userMenuItems = session ? getUserMenuItems() : []

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo và Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Deutsch Lernen</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main Menu Items */}
            {mainMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* User Menu */}
            {session ? (
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  <span className="mr-2">👤</span>
                  {session.user?.name || 'User'}
                  <span className="ml-2 text-xs text-gray-500">
                    ({getRoleDisplayName(userRole, language)})
                  </span>
                  <span className="ml-2">▼</span>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {/* User Menu Items */}
                  {userMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150"
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="border-t border-gray-100 my-1"></div>
                  <button
                    onClick={() => signOut()}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                  >
                    <span className="mr-3">🚪</span>
                    {t('logout', language)}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/login"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {t('login', language)}
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-200"
                >
                  {t('register', language)}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 p-2 rounded-md"
            >
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {/* Main Menu Items */}
              {mainMenuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              ))}

              {/* Language Switcher */}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>

              {/* User Menu Items */}
              {session && (
                <>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="px-3 py-2 text-sm text-gray-500">
                    {getRoleDisplayName(userRole, language)}
                  </div>
                  {userMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="border-t border-gray-200 my-2"></div>
                  <button
                    onClick={() => {
                      signOut()
                      setIsOpen(false)
                    }}
                    className="flex items-center w-full text-left text-red-600 hover:text-red-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  >
                    <span className="mr-3">🚪</span>
                    {t('logout', language)}
                  </button>
                </>
              )}

              {/* Login/Register for non-authenticated users */}
              {!session && (
                <>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link
                    href="/auth/login"
                    className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">🔑</span>
                    {t('login', language)}
                  </Link>
                  <Link
                    href="/auth/register"
                    className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">📝</span>
                    {t('register', language)}
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
