'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'

export default function HomePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { language } = useLanguage()

  useEffect(() => {
    if (status === 'loading') return

    if (session) {
      if (session.user?.role === 'admin') {
        router.push('/dashboard')
      } else {
        router.push('/profile')
      }
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-lg text-gray-600">{t('loading', language)}</div>
        </div>
      </div>
    )
  }

  if (session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-lg text-gray-600">{t('loading', language)}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">{t('heroTitle', language)}</span>{' '}
                  <span className="block text-indigo-600 xl:inline">{t('heroSubtitle', language)}</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {t('heroDescription', language)}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/auth/register"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      {t('getStarted', language)}
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/courses"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      {t('learnMore', language)}
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              {t('features', language)}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t('whyChooseUs', language)}
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  📚
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {t('feature1Title', language)}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {t('feature1Description', language)}
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  🎯
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {t('feature2Title', language)}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {t('feature2Description', language)}
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  🌍
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {t('feature3Title', language)}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {t('feature3Description', language)}
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  📱
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {t('feature4Title', language)}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {t('feature4Description', language)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
