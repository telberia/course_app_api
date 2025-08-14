'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import UserManagement from '@/components/admin/UserManagement'

export default function AdminUsersPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {t('userManagement', language)}
              </h1>
              <p className="mt-2 text-gray-600">
                {t('manageAllUsers', language)}
              </p>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* User Management Component */}
      <UserManagement />
    </div>
  )
}
