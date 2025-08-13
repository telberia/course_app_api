'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'

const users = [
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
    role: 'admin',
    status: 'active',
    joinDate: '2024-01-10',
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
  {
    id: 5,
    name: 'Lisa Wagner',
    email: 'lisa.wagner@example.com',
    role: 'user',
    status: 'active',
    joinDate: '2024-01-11',
  },
]

export default function UsersTable() {
  const { language } = useLanguage()

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    {t('user', language)}
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {t('role', language)}
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {t('status', language)}
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {t('joinDate', language)}
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">{t('actions', language)}</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center">
                            <span className="text-white font-medium text-sm">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{user.name}</div>
                          <div className="text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        {t(user.role, language)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          user.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {t(user.status, language)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                        {t('view', language)}
                      </button>
                      <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                        {t('edit', language)}
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        {t('delete', language)}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
