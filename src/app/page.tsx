'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'
import { UserRole, hasPermission, getRoleDisplayName } from '@/lib/roles'
import Link from 'next/link'

export default function HomePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { language } = useLanguage()

  useEffect(() => {
    if (status === 'loading') return
    if (session) {
      if (hasPermission(session.user?.role as UserRole, 'canAccessAdminPanel')) {
        router.push('/dashboard')
      } else {
        router.push('/profile')
      }
    }
  }, [session, status, router])

  // Show loading while checking session
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

  // If user is authenticated, show redirect message
  if (session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirecting...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('heroTitle', language)}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              {t('heroSubtitle', language)}
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-indigo-200">
              {t('heroDescription', language)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                {t('getStarted', language)}
              </Link>
              <Link
                href="/courses"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200"
              >
                {t('learnMore', language)}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('features', language)}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('whyChooseUs', language)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('feature1Title', language)}
              </h3>
              <p className="text-gray-600">
                {t('feature1Description', language)}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('feature2Title', language)}
              </h3>
              <p className="text-gray-600">
                {t('feature2Description', language)}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('feature3Title', language)}
              </h3>
              <p className="text-gray-600">
                {t('feature3Description', language)}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('feature4Title', language)}
              </h3>
              <p className="text-gray-600">
                {t('feature4Description', language)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Role-based Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('roleFeatures', language)}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('roleFeaturesDescription', language)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic User */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-center mb-4">
                <span className="text-3xl">👤</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2">
                  {t('basicUser', language)}
                </h3>
              </div>
              <p className="text-gray-600 text-center mb-4">
                {t('basicUserDesc', language)}
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• {t('freeCourses', language)}</li>
                <li>• {t('basicProgress', language)}</li>
                <li>• {t('communityAccess', language)}</li>
              </ul>
            </div>

            {/* Premium User */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border-2 border-yellow-200">
              <div className="text-center mb-4">
                <span className="text-3xl">⭐</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2">
                  {t('premiumUser', language)}
                </h3>
              </div>
              <p className="text-gray-600 text-center mb-4">
                {t('premiumUserDesc', language)}
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• {t('allCourses', language)}</li>
                <li>• {t('advancedFeatures', language)}</li>
                <li>• {t('prioritySupport', language)}</li>
              </ul>
            </div>

            {/* Teacher */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200">
              <div className="text-center mb-4">
                <span className="text-3xl">👨‍🏫</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2">
                  {t('teacher', language)}
                </h3>
              </div>
              <p className="text-gray-600 text-center mb-4">
                {t('teacherDesc', language)}
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• {t('createContent', language)}</li>
                <li>• {t('studentManagement', language)}</li>
                <li>• {t('analyticsAccess', language)}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('readyToStart', language)}
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            {t('joinThousands', language)}
          </p>
          <Link
            href="/auth/register"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {t('getStarted', language)}
          </Link>
        </div>
      </div>
    </div>
  )
}
