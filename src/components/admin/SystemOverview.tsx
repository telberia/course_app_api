'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'
import { useState, useEffect } from 'react'

interface SystemStats {
  totalUsers: number
  totalCourses: number
  totalLessons: number
  activeUsers: number
  systemUptime: string
  lastBackup: string
  storageUsed: string
  storageTotal: string
}

interface RecentActivity {
  id: string
  type: 'user_registration' | 'course_creation' | 'lesson_update' | 'system_maintenance'
  description: string
  timestamp: string
  user?: string
}

export default function SystemOverview() {
  const { language } = useLanguage()
  const [stats, setStats] = useState<SystemStats>({
    totalUsers: 0,
    totalCourses: 0,
    totalLessons: 0,
    activeUsers: 0,
    systemUptime: '0 days',
    lastBackup: 'Never',
    storageUsed: '0 GB',
    storageTotal: '100 GB'
  })
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setStats({
        totalUsers: 1247,
        totalCourses: 23,
        totalLessons: 156,
        activeUsers: 892,
        systemUptime: '15 days',
        lastBackup: '2 hours ago',
        storageUsed: '45.2 GB',
        storageTotal: '100 GB'
      })

      setRecentActivities([
        {
          id: '1',
          type: 'user_registration',
          description: 'New user registered: Anna Schmidt',
          timestamp: '2 minutes ago',
          user: 'anna.schmidt@email.com'
        },
        {
          id: '2',
          type: 'course_creation',
          description: 'New course created: Advanced Grammar',
          timestamp: '1 hour ago',
          user: 'teacher.mueller@email.com'
        },
        {
          id: '3',
          type: 'lesson_update',
          description: 'Lesson updated: Basic Vocabulary #5',
          timestamp: '3 hours ago',
          user: 'teacher.mueller@email.com'
        },
        {
          id: '4',
          type: 'system_maintenance',
          description: 'System backup completed successfully',
          timestamp: '2 hours ago'
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user_registration': return '👤'
      case 'course_creation': return '📚'
      case 'lesson_update': return '✏️'
      case 'system_maintenance': return '🔧'
      default: return '📝'
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'user_registration': return 'bg-blue-100 text-blue-800'
      case 'course_creation': return 'bg-green-100 text-green-800'
      case 'lesson_update': return 'bg-yellow-100 text-yellow-800'
      case 'system_maintenance': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Users */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl">👥</span>
            </div>
            <div>
              <p className="text-sm font-medium text-blue-600">{t('totalUsers', language)}</p>
              <p className="text-2xl font-bold text-blue-900">{stats.totalUsers.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Total Courses */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl">📚</span>
            </div>
            <div>
              <p className="text-sm font-medium text-green-600">{t('totalCourses', language)}</p>
              <p className="text-2xl font-bold text-green-900">{stats.totalCourses}</p>
            </div>
          </div>
        </div>

        {/* Total Lessons */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl">📖</span>
            </div>
            <div>
              <p className="text-sm font-medium text-purple-600">{t('totalLessons', language)}</p>
              <p className="text-2xl font-bold text-purple-900">{stats.totalLessons}</p>
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl">🟢</span>
            </div>
            <div>
              <p className="text-sm font-medium text-orange-600">{t('activeUsers', language)}</p>
              <p className="text-2xl font-bold text-orange-900">{stats.activeUsers.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* System Info */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('systemStatus', language)}</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">{t('systemUptime', language)}:</span>
              <span className="font-medium text-green-600">{stats.systemUptime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('lastBackup', language)}:</span>
              <span className="font-medium text-blue-600">{stats.lastBackup}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('storageUsed', language)}:</span>
              <span className="font-medium text-purple-600">{stats.storageUsed} / {stats.storageTotal}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${(parseFloat(stats.storageUsed) / parseFloat(stats.storageTotal)) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('quickActions', language)}</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              <span className="mr-2">👥</span>
              {t('addNewUser', language)}
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              <span className="mr-2">📚</span>
              {t('addNewCourse', language)}
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              <span className="mr-2">📖</span>
              {t('addNewLesson', language)}
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('recentActivities', language)}</h3>
        <div className="space-y-3">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${getActivityColor(activity.type)}`}>
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                {activity.user && (
                  <p className="text-xs text-gray-500">{activity.user}</p>
                )}
              </div>
              <span className="text-xs text-gray-500">{activity.timestamp}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
            {t('viewAllActivities', language)}
          </button>
        </div>
      </div>
    </div>
  )
}
