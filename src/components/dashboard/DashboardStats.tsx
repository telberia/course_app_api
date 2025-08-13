'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'

const stats = [
  { name: 'totalUsers', value: '1,234', icon: '👥', change: '+12%', changeType: 'positive' },
  { name: 'totalLessons', value: '89', icon: '📚', change: '+5%', changeType: 'positive' },
  { name: 'completionRate', value: '78%', icon: '📊', change: '+2%', changeType: 'positive' },
  { name: 'averageRating', value: '4.8', icon: '⭐', change: '+0.1', changeType: 'positive' },
]

export default function DashboardStats() {
  const { language } = useLanguage()

  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">{t('overview', language)}</h3>
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <span className="text-2xl text-white">{item.icon}</span>
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{t(item.name, language)}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
