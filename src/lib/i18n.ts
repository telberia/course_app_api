export type Language = 'de' | 'en'

export const languages = {
  de: 'Deutsch',
  en: 'English'
}

export const defaultLanguage: Language = 'de'

export const translations = {
  de: {
    // Common
    login: 'Anmelden',
    logout: 'Abmelden',
    register: 'Registrieren',
    email: 'E-Mail',
    password: 'Passwort',
    confirmPassword: 'Passwort bestätigen',
    submit: 'Absenden',
    cancel: 'Abbrechen',
    save: 'Speichern',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    view: 'Anzeigen',
    add: 'Hinzufügen',
    search: 'Suchen',
    loading: 'Lädt...',
    error: 'Fehler',
    success: 'Erfolg',
    createAccount: 'Erstellen Sie ein neues Konto',
    alreadyHaveAccount: 'Haben Sie bereits ein Konto?',
    creating: 'Wird erstellt...',
    
    // Navigation
    home: 'Startseite',
    about: 'Über uns',
    courses: 'Kurse',
    coursesDescription: 'Entdecken Sie unsere umfassenden Deutschkurse',
    contact: 'Kontakt',
    
    // Homepage
    heroTitle: 'Lernen Sie Deutsch',
    heroSubtitle: 'einfach und effektiv',
    heroDescription: 'Entdecken Sie die deutsche Sprache mit unserem umfassenden Lernsystem. Von Anfängern bis Fortgeschrittene - wir haben den richtigen Kurs für Sie.',
    getStarted: 'Jetzt starten',
    learnMore: 'Mehr erfahren',
    features: 'Funktionen',
    whyChooseUs: 'Warum uns wählen?',
    feature1Title: 'Strukturierte Kurse',
    feature1Description: 'Systematisch aufgebaute Lektionen von Grundlagen bis zu fortgeschrittenen Themen.',
    feature2Title: 'Persönlicher Fortschritt',
    feature2Description: 'Verfolgen Sie Ihren Lernfortschritt und erhalten Sie personalisierte Empfehlungen.',
    feature3Title: 'Muttersprachler',
    feature3Description: 'Lernen Sie von qualifizierten deutschen Muttersprachlern und Lehrern.',
    feature4Title: 'Mobile Optimiert',
    feature4Description: 'Lernen Sie überall und jederzeit mit unserer mobilen App und Web-Plattform.',
    
    // Profile
    profile: 'Profil',
    profileSubtitle: 'Verwalten Sie Ihre persönlichen Informationen',
    firstName: 'Vorname',
    lastName: 'Nachname',
    emailCannotChange: 'E-Mail-Adresse kann nicht geändert werden',
    accountActions: 'Kontokonfiguration',
    
    // User Menu
    myLessons: 'Meine Lektionen',
    progress: 'Fortschritt',
    myCourses: 'Meine Kurse',
    premiumContent: 'Premium Inhalt',
    students: 'Schüler',
    analytics: 'Analysen',
    contentModeration: 'Inhaltsmoderation',
    systemSettings: 'Systemeinstellungen',
    
    // Auth
    loginTitle: 'In das System einloggen',
    loginSubtitle: 'Deutsch Lernen App verwalten',
    forgotPassword: 'Passwort vergessen?',
    backToLogin: 'Zurück zur Anmeldung',
    resetPasswordTitle: 'Passwort zurücksetzen',
    resetPasswordSubtitle: 'E-Mail eingeben, um Link zum Zurücksetzen zu erhalten',
    sendResetEmail: 'E-Mail zum Zurücksetzen senden',
    sending: 'Wird gesendet...',
    
    // Dashboard
    dashboard: 'Dashboard',
    welcomeMessage: 'Willkommen im Deutsch Lernen Verwaltungssystem',
    overview: 'Übersicht',
    recentUsers: 'Neue Benutzer',
    recentLessons: 'Neue Lektionen',
    viewAll: 'Alle anzeigen',
    
    // Stats
    totalUsers: 'Gesamte Benutzer',
    totalLessons: 'Gesamte Lektionen',
    completionRate: 'Abschlussrate',
    averageRating: 'Durchschnittliche Bewertung',
    
    // Users
    userManagement: 'Benutzerverwaltung',
    userManagementSubtitle: 'Alle Benutzer im System verwalten',
    addNewUser: 'Neuen Benutzer hinzufügen',
    usersList: 'Benutzerliste',
    totalUsersInSystem: 'Gesamt {count} Benutzer im System',
    user: 'Benutzer',
    role: 'Rolle',
    status: 'Status',
    joinDate: 'Beitrittsdatum',
    actions: 'Aktionen',
    active: 'Aktiv',
    pending: 'Ausstehend',
    admin: 'Administrator',
    userRole: 'Benutzer',
    premiumUser: 'Premium Benutzer',
    teacher: 'Lehrer',
    moderator: 'Moderator',
    
    // Lessons
    lessonManagement: 'Lektionenverwaltung',
    lessonManagementSubtitle: 'Alle Lektionen im System verwalten',
    addNewLesson: 'Neue Lektion hinzufügen',
    lessonsList: 'Lektionenliste',
    totalLessonsInSystem: 'Gesamt {count} Lektionen im System',
    lesson: 'Lektion',
    level: 'Niveau',
    category: 'Kategorie',
    createdDate: 'Erstellungsdatum',
    published: 'Veröffentlicht',
    draft: 'Entwurf',
    
    // Navigation
    users: 'Benutzer',
    lessons: 'Lektionen',
    statistics: 'Statistiken',
    settings: 'Einstellungen',
    
    // Messages
    loginError: 'E-Mail oder Passwort ist falsch',
    generalError: 'Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut',
    resetEmailSent: 'E-Mail zum Zurücksetzen des Passworts wurde gesendet. Bitte überprüfen Sie Ihren Posteingang.',
    resetEmailError: 'E-Mail zum Zurücksetzen des Passworts konnte nicht gesendet werden',
    welcomeUser: 'Willkommen, {name}',
    
    // Admin Panel
    adminDashboard: 'Admin Dashboard',
    adminDashboardSubtitle: 'Verwalten Sie das gesamte System',
    adminPanel: 'Admin Panel',
    backToApp: 'Zurück zur App',
    manageAllUsers: 'Alle Benutzer im System verwalten',
    manageCoursesAndLessons: 'Kurse und Lektionen verwalten',
    systemAnalyticsAndReports: 'Systemanalysen und Berichte',
    configureSystemSettings: 'Systemeinstellungen konfigurieren',
    
    // System Overview
    totalCourses: 'Gesamte Kurse',
    activeUsers: 'Aktive Benutzer',
    systemStatus: 'Systemstatus',
    systemUptime: 'Systemlaufzeit',
    lastBackup: 'Letzter Backup',
    storageUsed: 'Speicherplatz verwendet',
    quickActions: 'Schnellaktionen',
    recentActivities: 'Letzte Aktivitäten',
    viewAllActivities: 'Alle Aktivitäten anzeigen',
    
    // User Management
    searchUsers: 'Benutzer suchen',
    allRoles: 'Alle Rollen',
    allStatuses: 'Alle Status',
    showingResults: 'Zeige {count} Ergebnisse',
    selectedUsers: '{count} Benutzer ausgewählt',
    joined: 'Beigetreten',
    complete: 'abgeschlossen',
    showingPage: 'Zeige Seite {page} von {total}',
    previous: 'Zurück',
    next: 'Weiter',
    
    // Content Management
    courseManagementComingSoon: 'Kursverwaltung wird bald verfügbar sein',
    lessonManagementComingSoon: 'Lektionenverwaltung wird bald verfügbar sein',
    
    // Analytics
    userGrowth: 'Benutzerwachstum',
    courseCompletion: 'Kursabschluss',
    chartComingSoon: 'Diagramm wird bald verfügbar sein',
    popularCourses: 'Beliebte Kurse',
    systemPerformance: 'Systemleistung',
    cpuUsage: 'CPU-Auslastung',
    memoryUsage: 'Speicherauslastung',
    storageUsage: 'Speicherplatzauslastung',
    
    // System Settings
    general: 'Allgemein',
    security: 'Sicherheit',
    backup: 'Backup',
    maintenance: 'Wartung',
    generalSettings: 'Allgemeine Einstellungen',
    applicationName: 'Anwendungsname',
    defaultLanguage: 'Standardsprache',
    timezone: 'Zeitzone',
    securitySettings: 'Sicherheitseinstellungen',
    requireEmailVerification: 'E-Mail-Verifizierung erforderlich',
    enableTwoFactorAuth: 'Zwei-Faktor-Authentifizierung aktivieren',
    sessionTimeout: 'Sitzungs-Timeout',
    emailSettings: 'E-Mail-Einstellungen',
    smtpHost: 'SMTP-Host',
    smtpPort: 'SMTP-Port',
    fromEmail: 'Absender-E-Mail',
    backupSettings: 'Backup-Einstellungen',
    enableAutoBackup: 'Automatisches Backup aktivieren',
    backupFrequency: 'Backup-Häufigkeit',
    retentionPeriod: 'Aufbewahrungszeitraum',
    maintenanceSettings: 'Wartungseinstellungen',
    maintenanceMode: 'Wartungsmodus',
    maintenanceModeDescription: 'System für Benutzer unzugänglich machen',
    maintenanceMessage: 'Wartungsnachricht',
    clearCache: 'Cache leeren',
    optimizeDatabase: 'Datenbank optimieren',
    saveSettings: 'Einstellungen speichern',
    
    // Roles & Permissions
    roleDescription: 'Rollenbeschreibung',
    rolePermissions: 'Rollenberechtigungen',
    basicUser: 'Grundbenutzer',
    basicUserDesc: 'Zugriff auf kostenlose Kurse und grundlegende Funktionen',
    premiumUserDesc: 'Vollzugriff auf alle Kurse und Premium-Inhalte',
    teacherDesc: 'Kann Kurse erstellen und verwalten, Schüler betreuen',
    moderatorDesc: 'Kann Inhalte moderieren und Benutzer verwalten',
    adminDesc: 'Vollzugriff auf alle Systemfunktionen und -einstellungen',
    
    // Role Features
    roleFeatures: 'Rollenbasierte Funktionen',
    roleFeaturesDescription: 'Entdecken Sie die verschiedenen Benutzerrollen und deren Funktionen',
    freeCourses: 'Kostenlose Kurse',
    basicProgress: 'Grundlegender Fortschritt',
    communityAccess: 'Community-Zugang',
    allCourses: 'Alle Kurse',
    advancedFeatures: 'Erweiterte Funktionen',
    prioritySupport: 'Prioritäts-Support',
    createContent: 'Inhalte erstellen',
    studentManagement: 'Schülerverwaltung',
    analyticsAccess: 'Analytics-Zugang',
    readyToStart: 'Bereit zu starten?',
    joinThousands: 'Schließen Sie sich Tausenden von Lernenden an',

    // Admin
    courseManagement: {
      en: 'Course Management',
      de: 'Kursverwaltung'
    },
    manageAllCourses: {
      en: 'Manage all courses in the system',
      de: 'Verwalten Sie alle Kurse im System'
    },
    addNewCourse: {
      en: 'Add New Course',
      de: 'Neuen Kurs hinzufügen'
    }
  },
  
  en: {
    // Common
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    view: 'View',
    add: 'Add',
    search: 'Search',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    createAccount: 'Create a new account',
    alreadyHaveAccount: 'Already have an account?',
    creating: 'Creating...',
    
    // Navigation
    home: 'Home',
    about: 'About',
    courses: 'Courses',
    coursesDescription: 'Discover our comprehensive German courses',
    contact: 'Contact',
    
    // Homepage
    heroTitle: 'Learn German',
    heroSubtitle: 'easily and effectively',
    heroDescription: 'Discover the German language with our comprehensive learning system. From beginners to advanced learners - we have the right course for you.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    features: 'Features',
    whyChooseUs: 'Why Choose Us?',
    feature1Title: 'Structured Courses',
    feature1Description: 'Systematically built lessons from basics to advanced topics.',
    feature2Title: 'Personal Progress',
    feature2Description: 'Track your learning progress and receive personalized recommendations.',
    feature3Title: 'Native Speakers',
    feature3Description: 'Learn from qualified German native speakers and teachers.',
    feature4Title: 'Mobile Optimized',
    feature4Description: 'Learn anywhere and anytime with our mobile app and web platform.',
    
    // Profile
    profile: 'Profile',
    profileSubtitle: 'Manage your personal information',
    firstName: 'First Name',
    lastName: 'Last Name',
    emailCannotChange: 'Email address cannot be changed',
    accountActions: 'Account Actions',
    
    // User Menu
    myLessons: 'My Lessons',
    progress: 'Progress',
    myCourses: 'My Courses',
    premiumContent: 'Premium Content',
    students: 'Students',
    analytics: 'Analytics',
    contentModeration: 'Content Moderation',
    systemSettings: 'System Settings',
    
    // Auth
    loginTitle: 'Login to System',
    loginSubtitle: 'Manage Deutsch Lernen App',
    forgotPassword: 'Forgot Password?',
    backToLogin: 'Back to Login',
    resetPasswordTitle: 'Reset Password',
    resetPasswordSubtitle: 'Enter email to receive reset link',
    sendResetEmail: 'Send Reset Email',
    sending: 'Sending...',
    
    // Dashboard
    dashboard: 'Dashboard',
    welcomeMessage: 'Welcome to Deutsch Lernen Management System',
    overview: 'Overview',
    recentUsers: 'Recent Users',
    recentLessons: 'Recent Lessons',
    viewAll: 'View All',
    
    // Stats
    totalUsers: 'Total Users',
    totalLessons: 'Total Lessons',
    completionRate: 'Completion Rate',
    averageRating: 'Average Rating',
    
    // Users
    userManagement: 'User Management',
    userManagementSubtitle: 'Manage all users in the system',
    addNewUser: 'Add New User',
    usersList: 'Users List',
    totalUsersInSystem: 'Total {count} users in system',
    user: 'User',
    role: 'Role',
    status: 'Status',
    joinDate: 'Join Date',
    actions: 'Actions',
    active: 'Active',
    pending: 'Pending',
    admin: 'Admin',
    userRole: 'User',
    premiumUser: 'Premium User',
    teacher: 'Teacher',
    moderator: 'Moderator',
    
    // Lessons
    lessonManagement: 'Lesson Management',
    lessonManagementSubtitle: 'Manage all lessons in the system',
    addNewLesson: 'Add New Lesson',
    lessonsList: 'Lessons List',
    totalLessonsInSystem: 'Total {count} lessons in system',
    lesson: 'Lesson',
    level: 'Level',
    category: 'Category',
    createdDate: 'Created Date',
    published: 'Published',
    draft: 'Draft',
    
    // Navigation
    users: 'Users',
    lessons: 'Lessons',
    statistics: 'Statistics',
    settings: 'Settings',
    
    // Messages
    loginError: 'Email or password is incorrect',
    generalError: 'An error occurred, please try again',
    resetEmailSent: 'Password reset email has been sent. Please check your inbox.',
    resetEmailError: 'Could not send password reset email',
    welcomeUser: 'Welcome, {name}',
    
    // Admin Panel
    adminDashboard: 'Admin Dashboard',
    adminDashboardSubtitle: 'Manage the entire system',
    adminPanel: 'Admin Panel',
    backToApp: 'Back to App',
    manageAllUsers: 'Manage all users in the system',
    manageCoursesAndLessons: 'Manage courses and lessons',
    systemAnalyticsAndReports: 'System analytics and reports',
    configureSystemSettings: 'Configure system settings',
    
    // System Overview
    totalCourses: 'Total Courses',
    activeUsers: 'Active Users',
    systemStatus: 'System Status',
    systemUptime: 'System Uptime',
    lastBackup: 'Last Backup',
    storageUsed: 'Storage Used',
    quickActions: 'Quick Actions',
    recentActivities: 'Recent Activities',
    viewAllActivities: 'View All Activities',
    
    // User Management
    searchUsers: 'Search Users',
    allRoles: 'All Roles',
    allStatuses: 'All Statuses',
    showingResults: 'Showing {count} results',
    selectedUsers: '{count} users selected',
    joined: 'Joined',
    complete: 'Complete',
    showingPage: 'Showing page {page} of {total}',
    previous: 'Previous',
    next: 'Next',
    
    // Content Management
    courseManagementComingSoon: 'Course management coming soon',
    lessonManagementComingSoon: 'Lesson management coming soon',
    
    // Analytics
    userGrowth: 'User Growth',
    courseCompletion: 'Course Completion',
    chartComingSoon: 'Chart coming soon',
    popularCourses: 'Popular Courses',
    systemPerformance: 'System Performance',
    cpuUsage: 'CPU Usage',
    memoryUsage: 'Memory Usage',
    storageUsage: 'Storage Usage',
    
    // System Settings
    general: 'General',
    security: 'Security',
    backup: 'Backup',
    maintenance: 'Maintenance',
    generalSettings: 'General Settings',
    applicationName: 'Application Name',
    defaultLanguage: 'Default Language',
    timezone: 'Timezone',
    securitySettings: 'Security Settings',
    requireEmailVerification: 'Require Email Verification',
    enableTwoFactorAuth: 'Enable Two-Factor Authentication',
    sessionTimeout: 'Session Timeout',
    emailSettings: 'Email Settings',
    smtpHost: 'SMTP Host',
    smtpPort: 'SMTP Port',
    fromEmail: 'From Email',
    backupSettings: 'Backup Settings',
    enableAutoBackup: 'Enable Auto Backup',
    backupFrequency: 'Backup Frequency',
    retentionPeriod: 'Retention Period',
    maintenanceSettings: 'Maintenance Settings',
    maintenanceMode: 'Maintenance Mode',
    maintenanceModeDescription: 'Make the system inaccessible to users',
    maintenanceMessage: 'Maintenance Message',
    clearCache: 'Clear Cache',
    optimizeDatabase: 'Optimize Database',
    saveSettings: 'Save Settings',
    
    // Roles & Permissions
    roleDescription: 'Role Description',
    rolePermissions: 'Role Permissions',
    basicUser: 'Basic User',
    basicUserDesc: 'Access to free courses and basic features',
    premiumUserDesc: 'Full access to all courses and premium content',
    teacherDesc: 'Can create and manage courses, mentor students',
    moderatorDesc: 'Can moderate content and manage users',
    adminDesc: 'Full access to all system functions and settings',
    
    // Role Features
    roleFeatures: 'Role-Based Features',
    roleFeaturesDescription: 'Discover different user roles and their functions',
    freeCourses: 'Free Courses',
    basicProgress: 'Basic Progress',
    communityAccess: 'Community Access',
    allCourses: 'All Courses',
    advancedFeatures: 'Advanced Features',
    prioritySupport: 'Priority Support',
    createContent: 'Create Content',
    studentManagement: 'Student Management',
    analyticsAccess: 'Analytics Access',
    readyToStart: 'Ready to Start?',
    joinThousands: 'Join thousands of learners',

    // Admin
    courseManagement: {
      en: 'Course Management',
      de: 'Kursverwaltung'
    },
    manageAllCourses: {
      en: 'Manage all courses in the system',
      de: 'Verwalten Sie alle Kurse im System'
    },
    addNewCourse: {
      en: 'Add New Course',
      de: 'Neuen Kurs hinzufügen'
    }
  }
}

export function t(key: string, lang: Language = defaultLanguage, params?: Record<string, string>): string {
  const keys = key.split('.')
  let value: any = translations[lang]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key // Return key if translation not found
    }
  }
  
  if (typeof value === 'string' && params) {
    return value.replace(/\{(\w+)\}/g, (match, param) => params[param] || match)
  }
  
  return value || key
}
