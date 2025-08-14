'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'
import { UserRole, hasPermission } from '@/lib/roles'
import AdminLayout from '@/components/admin/AdminLayout'
import SystemOverview from '@/components/admin/SystemOverview'
import UserManagement from '@/components/admin/UserManagement'
import ContentManagement from '@/components/admin/ContentManagement'
import SystemSettings from '@/components/admin/SystemSettings'
import Analytics from '@/components/admin/Analytics'

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/login')
      return
    }

    // Chỉ admin mới có thể truy cập
    if (session.user?.role !== 'admin') {
      router.push('/profile')
      return
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">{t('loading', language)}</p>
        </div>
      </div>
    )
  }

  if (!session || session.user?.role !== 'admin') {
    return null
  }

  const tabs = [
    { id: 'overview', name: t('overview', language), icon: '📊' },
    { id: 'users', name: t('userManagement', language), icon: '👥' },
    { id: 'content', name: t('contentManagement', language), icon: '📚' },
    { id: 'analytics', name: t('analytics', language), icon: '📈' },
    { id: 'settings', name: t('systemSettings', language), icon: '⚙️' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <SystemOverview />
      case 'users':
        return <UserManagement />
      case 'content':
        return <ContentManagement />
      case 'analytics':
        return <Analytics />
      case 'settings':
        return <SystemSettings />
      default:
        return <SystemOverview />
    }
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {t('adminDashboard', language)}
          </h1>
          <p className="mt-2 text-gray-600">
            {t('adminDashboardSubtitle', language)}
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow">
          {renderContent()}
        </div>
      </div>
    </AdminLayout>
  )
}
