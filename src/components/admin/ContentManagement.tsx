'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'
import { useState } from 'react'

export default function ContentManagement() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState('courses')

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{t('contentManagement', language)}</h2>
        <p className="text-gray-600">{t('manageCoursesAndLessons', language)}</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('courses')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'courses'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            📚 {t('courses', language)}
          </button>
          <button
            onClick={() => setActiveTab('lessons')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'lessons'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            📖 {t('lessons', language)}
          </button>
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'courses' ? (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('courses', language)}</h3>
          <p className="text-gray-600">{t('courseManagementComingSoon', language)}</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('lessons', language)}</h3>
          <p className="text-gray-600">{t('lessonManagementComingSoon', language)}</p>
        </div>
      )}
    </div>
  )
}
