'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'

const recentLessons = [
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
]

export default function RecentLessons() {
  const { language } = useLanguage()

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {t('recentLessons', language)}
          </h3>
          <Link
            href="/dashboard/lessons"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            {t('viewAll', language)}
          </Link>
        </div>
        <div className="flow-root">
          <ul className="-my-5 divide-y divide-gray-200">
            {recentLessons.map((lesson) => (
              <li key={lesson.id} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white font-medium text-sm">📚</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {lesson.title}
                    </p>
                    <div className="flex space-x-2 mt-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {t(lesson.level, language)}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {t(lesson.category, language)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        lesson.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {t(lesson.status, language)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(lesson.createdDate).toLocaleDateString()}
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
