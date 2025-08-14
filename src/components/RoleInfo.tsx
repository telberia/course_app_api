'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/lib/i18n'
import { UserRole, rolePermissions, getRoleDisplayName, getRoleDescription } from '@/lib/roles'

interface RoleInfoProps {
  role: UserRole
  showPermissions?: boolean
}

export default function RoleInfo({ role, showPermissions = true }: RoleInfoProps) {
  const { language } = useLanguage()
  const permissions = rolePermissions[role]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-2xl">
            {role === 'admin' ? '👑' : 
             role === 'moderator' ? '🛡️' : 
             role === 'teacher' ? '👨‍🏫' : 
             role === 'premium' ? '⭐' : '👤'}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {getRoleDisplayName(role, language)}
          </h3>
          <p className="text-sm text-gray-600">
            {getRoleDescription(role, language)}
          </p>
        </div>
      </div>

      {showPermissions && (
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900 mb-3">
            {t('rolePermissions', language)}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(permissions).map(([permission, hasAccess]) => (
              <div key={permission} className="flex items-center">
                <span className={`w-4 h-4 rounded-full mr-3 ${
                  hasAccess ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                  {hasAccess && (
                    <span className="block w-2 h-2 bg-white rounded-full mx-auto mt-1"></span>
                  )}
                </span>
                <span className={`text-sm ${
                  hasAccess ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {getPermissionDisplayName(permission, language)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function getPermissionDisplayName(permission: string, language: 'de' | 'en'): string {
  const permissionNames = {
    de: {
      canViewFreeContent: 'Kostenlose Inhalte anzeigen',
      canViewPremiumContent: 'Premium-Inhalte anzeigen',
      canCreateLessons: 'Lektionen erstellen',
      canEditLessons: 'Lektionen bearbeiten',
      canDeleteLessons: 'Lektionen löschen',
      canManageUsers: 'Benutzer verwalten',
      canModerateContent: 'Inhalte moderieren',
      canAccessAdminPanel: 'Admin-Panel zugreifen',
      canViewAnalytics: 'Analytics anzeigen',
      canManageCourses: 'Kurse verwalten',
      canViewProgress: 'Fortschritt anzeigen',
      canEditOwnProfile: 'Eigenes Profil bearbeiten',
      canViewOtherProfiles: 'Andere Profile anzeigen'
    },
    en: {
      canViewFreeContent: 'View free content',
      canViewPremiumContent: 'View premium content',
      canCreateLessons: 'Create lessons',
      canEditLessons: 'Edit lessons',
      canDeleteLessons: 'Delete lessons',
      canManageUsers: 'Manage users',
      canModerateContent: 'Moderate content',
      canAccessAdminPanel: 'Access admin panel',
      canViewAnalytics: 'View analytics',
      canManageCourses: 'Manage courses',
      canViewProgress: 'View progress',
      canEditOwnProfile: 'Edit own profile',
      canViewOtherProfiles: 'View other profiles'
    }
  }
  return permissionNames[language][permission as keyof typeof permissionNames.de] || permission
}
