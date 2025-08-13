'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'

const lessons = [
  {
    id: 1,
    title: 'Grundlagen der deutschen Grammatik',
    level: 'beginner',
    category: 'grammar',
    status: 'published',
    createdDate: '2024-01-15',
  },
  {
    id: 2,
    title: 'Alltagsgespräche auf Deutsch',
    level: 'intermediate',
    category: 'conversation',
    status: 'published',
    createdDate: '2024-01-14',
  },
  {
    id: 3,
    title: 'Deutsche Aussprache und Phonetik',
    level: 'beginner',
    category: 'pronunciation',
    status: 'draft',
    createdDate: '2024-01-13',
  },
  {
    id: 4,
    title: 'Deutsche Kultur und Traditionen',
    level: 'advanced',
    category: 'culture',
    status: 'published',
    createdDate: '2024-01-12',
  },
  {
    id: 5,
    title: 'Geschäftliches Deutsch',
    level: 'intermediate',
    category: 'business',
    status: 'published',
    createdDate: '2024-01-11',
  },
]

export default function LessonsTable() {
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
                    {t('lesson', language)}
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {t('level', language)}
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {t('category', language)}
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {t('status', language)}
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {t('createdDate', language)}
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">{t('actions', language)}</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {lessons.map((lesson) => (
                  <tr key={lesson.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white font-medium text-sm">📚</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{lesson.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        {t(lesson.level, language)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                        {t(lesson.category, language)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          lesson.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {t(lesson.status, language)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {new Date(lesson.createdDate).toLocaleDateString()}
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
