'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import DashboardStats from '@/components/dashboard/DashboardStats'
import RecentUsers from '@/components/dashboard/RecentUsers'
import RecentLessons from '@/components/dashboard/RecentLessons'

export default function DashboardPage() {
  const { language } = useLanguage()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {t('dashboard', language)}
          </h1>
          <p className="text-gray-600">
            {t('welcomeMessage', language)}
          </p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RecentUsers />
          <RecentLessons />
        </div>
      </div>
    </DashboardLayout>
  )
}
