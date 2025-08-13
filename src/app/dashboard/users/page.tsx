'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'
import UsersTable from '@/components/users/UsersTable'

export default function UsersPage() {
  const { language } = useLanguage()

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">
            {t('userManagement', language)}
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            {t('userManagementSubtitle', language)}
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t('addNewUser', language)}
          </button>
        </div>
      </div>
      <UsersTable />
    </div>
  )
}
