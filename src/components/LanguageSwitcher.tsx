'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage, availableLanguages } = useLanguage()

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
      >
        <span className="mr-2">🌍</span>
        {availableLanguages[language]}
      </button>
    </div>
  )
}
