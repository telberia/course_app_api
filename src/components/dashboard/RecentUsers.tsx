'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'

const recentUsers = [
  {
    id: 1,
    name: 'Anna Schmidt',
    email: 'anna.schmidt@example.com',
    role: 'user',
    status: 'active',
    joinDate: '2024-01-15',
  },
  {
    id: 2,
    name: 'Michael Weber',
    email: 'michael.weber@example.com',
    role: 'user',
    status: 'active',
    joinDate: '2024-01-14',
  },
  {
    id: 3,
    name: 'Sarah Müller',
    email: 'sarah.mueller@example.com',
    role: 'user',
    status: 'pending',
    joinDate: '2024-01-13',
  },
  {
    id: 4,
    name: 'Thomas Fischer',
    email: 'thomas.fischer@example.com',
    role: 'user',
    status: 'active',
    joinDate: '2024-01-12',
  },
]

export default function RecentUsers() {
  const { language } = useLanguage()

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {t('recentUsers', language)}
          </h3>
          <Link
            href="/dashboard/users"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            {t('viewAll', language)}
          </Link>
        </div>
        <div className="flow-root">
          <ul className="-my-5 divide-y divide-gray-200">
            {recentUsers.map((user) => (
              <li key={user.id} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">{user.email}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {t(user.status, language)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
