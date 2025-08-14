export type UserRole = 'user' | 'premium' | 'teacher' | 'moderator' | 'admin'

export interface RolePermissions {
  canViewFreeContent: boolean
  canViewPremiumContent: boolean
  canCreateLessons: boolean
  canEditLessons: boolean
  canDeleteLessons: boolean
  canManageUsers: boolean
  canModerateContent: boolean
  canAccessAdminPanel: boolean
  canViewAnalytics: boolean
  canManageCourses: boolean
  canViewProgress: boolean
  canEditOwnProfile: boolean
  canViewOtherProfiles: boolean
}

export const roleHierarchy: Record<UserRole, number> = {
  user: 1,
  premium: 2,
  teacher: 3,
  moderator: 4,
  admin: 5
}

export const rolePermissions: Record<UserRole, RolePermissions> = {
  user: {
    canViewFreeContent: true,
    canViewPremiumContent: false,
    canCreateLessons: false,
    canEditLessons: false,
    canDeleteLessons: false,
    canManageUsers: false,
    canModerateContent: false,
    canAccessAdminPanel: false,
    canViewAnalytics: false,
    canManageCourses: false,
    canViewProgress: true,
    canEditOwnProfile: true,
    canViewOtherProfiles: false
  },
  premium: {
    canViewFreeContent: true,
    canViewPremiumContent: true,
    canCreateLessons: false,
    canEditLessons: false,
    canDeleteLessons: false,
    canManageUsers: false,
    canModerateContent: false,
    canAccessAdminPanel: false,
    canViewAnalytics: false,
    canManageCourses: false,
    canViewProgress: true,
    canEditOwnProfile: true,
    canViewOtherProfiles: false
  },
  teacher: {
    canViewFreeContent: true,
    canViewPremiumContent: true,
    canCreateLessons: true,
    canEditLessons: true,
    canDeleteLessons: false,
    canManageUsers: false,
    canModerateContent: false,
    canAccessAdminPanel: false,
    canViewAnalytics: true,
    canManageCourses: true,
    canViewProgress: true,
    canEditOwnProfile: true,
    canViewOtherProfiles: false
  },
  moderator: {
    canViewFreeContent: true,
    canViewPremiumContent: true,
    canCreateLessons: true,
    canEditLessons: true,
    canDeleteLessons: true,
    canManageUsers: true,
    canModerateContent: true,
    canAccessAdminPanel: true,
    canViewAnalytics: true,
    canManageCourses: true,
    canViewProgress: true,
    canEditOwnProfile: true,
    canViewOtherProfiles: true
  },
  admin: {
    canViewFreeContent: true,
    canViewPremiumContent: true,
    canCreateLessons: true,
    canEditLessons: true,
    canDeleteLessons: true,
    canManageUsers: true,
    canModerateContent: true,
    canAccessAdminPanel: true,
    canViewAnalytics: true,
    canManageCourses: true,
    canViewProgress: true,
    canEditOwnProfile: true,
    canViewOtherProfiles: true
  }
}

export function hasPermission(userRole: UserRole, permission: keyof RolePermissions): boolean {
  return rolePermissions[userRole]?.[permission] || false
}

export function canAccessRole(userRole: UserRole, targetRole: UserRole): boolean {
  return roleHierarchy[userRole] >= roleHierarchy[targetRole]
}

export function getRoleDisplayName(role: UserRole, language: 'de' | 'en' = 'de'): string {
  const roleNames = {
    de: {
      user: 'Grundbenutzer',
      premium: 'Premium Benutzer',
      teacher: 'Lehrer',
      moderator: 'Moderator',
      admin: 'Administrator'
    },
    en: {
      user: 'Basic User',
      premium: 'Premium User',
      teacher: 'Teacher',
      moderator: 'Moderator',
      admin: 'Administrator'
    }
  }
  return roleNames[language][role] || role
}

export function getRoleDescription(role: UserRole, language: 'de' | 'en' = 'de'): string {
  const descriptions = {
    de: {
      user: 'Zugriff auf kostenlose Kurse und grundlegende Funktionen',
      premium: 'Vollzugriff auf alle Kurse und Premium-Inhalte',
      teacher: 'Kann Kurse erstellen und verwalten, Schüler betreuen',
      moderator: 'Kann Inhalte moderieren und Benutzer verwalten',
      admin: 'Vollzugriff auf alle Systemfunktionen und -einstellungen'
    },
    en: {
      user: 'Access to free courses and basic features',
      premium: 'Full access to all courses and premium content',
      teacher: 'Can create and manage courses, mentor students',
      moderator: 'Can moderate content and manage users',
      admin: 'Full access to all system functions and settings'
    }
  }
  return descriptions[language][role] || ''
}
