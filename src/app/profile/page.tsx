'use client'

import { useSession, signOut } from 'next-auth/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const { language } = useLanguage()

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-lg text-gray-600">{t('loading', language)}</div>
        </div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-lg text-gray-600">Bitte melden Sie sich an</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {t('profile', language)}
            </h1>
            <p className="mt-2 text-gray-600">
              {t('profileSubtitle', language)}
            </p>
          </div>
          <LanguageSwitcher />
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center space-x-6 mb-6">
              <div className="h-20 w-20 rounded-full bg-indigo-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {session.user?.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {session.user?.name || 'Unbekannter Benutzer'}
                </h2>
                <p className="text-gray-600">{session.user?.email}</p>
                <p className="text-sm text-gray-500">
                  {t('role', language)}: {t(session.user?.role || 'user', language)}
                </p>
              </div>
            </div>

            {/* Profile Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    {t('firstName', language)}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    defaultValue={session.user?.name?.split(' ')[0] || ''}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    {t('lastName', language)}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    defaultValue={session.user?.name?.split(' ').slice(1).join(' ') || ''}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('email', language)}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={session.user?.email || ''}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm sm:text-sm"
                />
                <p className="mt-1 text-sm text-gray-500">
                  {t('emailCannotChange', language)}
                </p>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {t('cancel', language)}
                </button>
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {t('save', language)}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
              {t('accountActions', language)}
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => signOut()}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                {t('logout', language)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
