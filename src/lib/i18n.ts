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
    settings: 'Einstellungen',
    
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
    totalCourses: 'Gesamte Kurse',
    activeUsers: 'Aktive Benutzer',
    completionRate: 'Abschlussrate',
    averageRating: 'Durchschnittliche Bewertung',
    statistics: 'Statistiken',
    
    // Users
    userManagement: 'Benutzerverwaltung',
    addUser: 'Benutzer hinzufügen',
    editUser: 'Benutzer bearbeiten',
    deleteUser: 'Benutzer löschen',
    userName: 'Benutzername',
    userRole: 'Benutzerrolle',
    userStatus: 'Benutzerstatus',
    userEmail: 'E-Mail',
    userCreated: 'Erstellt am',
    userActions: 'Aktionen',
    active: 'Aktiv',
    inactive: 'Inaktiv',
    suspended: 'Gesperrt',
    
    // Roles
    role: 'Rolle',
    user: 'Benutzer',
    premium: 'Premium',
    teacher: 'Lehrer',
    moderator: 'Moderator',
    admin: 'Administrator',
    roleUser: 'Benutzer',
    rolePremium: 'Premium Benutzer',
    roleTeacher: 'Lehrer',
    roleModerator: 'Moderator',
    roleAdmin: 'Administrator',
    
    // Content
    contentManagement: 'Inhaltsverwaltung',
    lessonManagement: 'Lektionsverwaltung',
    addLesson: 'Lektion hinzufügen',
    editLesson: 'Lektion bearbeiten',
    deleteLesson: 'Lektion löschen',
    lessonTitle: 'Lektionstitel',
    lessonDescription: 'Lektionsbeschreibung',
    lessonContent: 'Lektionsinhalt',
    lessonOrder: 'Lektionsreihenfolge',
    lessonStatus: 'Lektionsstatus',
    lessonActions: 'Aktionen',
    
    // Courses
    courseTitle: 'Kurstitel',
    courseDescription: 'Kursbeschreibung',
    courseLevel: 'Kursniveau',
    courseDuration: 'Kursdauer',
    coursePrice: 'Kurspreis',
    courseStatus: 'Kursstatus',
    courseActions: 'Aktionen',
    addCourse: 'Kurs hinzufügen',
    editCourse: 'Kurs bearbeiten',
    deleteCourse: 'Kurs löschen',
    
    // Admin
    adminDashboard: 'Admin Dashboard',
    adminDashboardSubtitle: 'Verwalten Sie das gesamte System',
    systemOverview: 'Systemübersicht',
    systemStatus: 'Systemstatus',
    systemUptime: 'Systemlaufzeit',
    lastBackup: 'Letzte Sicherung',
    storageUsed: 'Speicherplatz verwendet',
    storageTotal: 'Gesamtspeicherplatz',
    quickActions: 'Schnellaktionen',
    addNewUser: 'Neuen Benutzer hinzufügen',
    addNewLesson: 'Neue Lektion hinzufügen',
    recentActivities: 'Letzte Aktivitäten',
    viewAllActivities: 'Alle Aktivitäten anzeigen',
    courseManagement: 'Kursverwaltung',
    manageAllCourses: 'Verwalten Sie alle Kurse im System',
    addNewCourse: 'Neuen Kurs hinzufügen',
    
    // Analytics
    userGrowth: 'Benutzerwachstum',
    courseCompletion: 'Kursabschluss',
    chartComingSoon: 'Diagramm kommt bald',
    popularCourses: 'Beliebte Kurse',
    systemPerformance: 'Systemleistung',
    cpuUsage: 'CPU-Auslastung',
    memoryUsage: 'Speicherauslastung',
    storageUsage: 'Speicherplatzauslastung',
    
    // System Settings
    general: 'Allgemein',
    security: 'Sicherheit',
    backup: 'Sicherung',
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
    fromEmail: 'Von E-Mail',
    backupSettings: 'Sicherungseinstellungen',
    enableAutoBackup: 'Automatische Sicherung aktivieren',
    backupFrequency: 'Sicherungshäufigkeit',
    retentionPeriod: 'Aufbewahrungszeitraum',
    maintenanceSettings: 'Wartungseinstellungen',
    maintenanceMode: 'Wartungsmodus',
    maintenanceModeDescription: 'Machen Sie das System für Benutzer unzugänglich',
    maintenanceMessage: 'Wartungsnachricht',
    clearCache: 'Cache löschen',
    optimizeDatabase: 'Datenbank optimieren',
    saveSettings: 'Einstellungen speichern',
    
    // Roles & Permissions
    roleDescription: 'Rollenbeschreibung',
    rolePermissions: 'Rollenberechtigungen',
    basicUser: 'Grundbenutzer',
    basicUserDesc: 'Zugang zu kostenlosen Kursen und Grundfunktionen',
    premiumUserDesc: 'Voller Zugang zu allen Kursen und Premium-Inhalten',
    teacherDesc: 'Kann Kurse erstellen und verwalten, Schüler betreuen',
    moderatorDesc: 'Kann Inhalte moderieren und Benutzer verwalten',
    adminDesc: 'Voller Zugang zu allen Systemfunktionen und -einstellungen',
    
    // Role Features
    roleFeatures: 'Rollenbasierte Funktionen',
    roleFeaturesDescription: 'Entdecken Sie verschiedene Benutzerrollen und ihre Funktionen',
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
    joinThousands: 'Schließen Sie sich Tausenden von Lernenden an'
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
    settings: 'Settings',
    
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
    totalCourses: 'Total Courses',
    activeUsers: 'Active Users',
    completionRate: 'Completion Rate',
    averageRating: 'Average Rating',
    statistics: 'Statistics',
    
    // Users
    userManagement: 'User Management',
    addUser: 'Add User',
    editUser: 'Edit User',
    deleteUser: 'Delete User',
    userName: 'Username',
    userRole: 'User Role',
    userStatus: 'User Status',
    userEmail: 'Email',
    userCreated: 'Created At',
    userActions: 'Actions',
    active: 'Active',
    inactive: 'Inactive',
    suspended: 'Suspended',
    
    // Roles
    role: 'Role',
    user: 'User',
    premium: 'Premium',
    teacher: 'Teacher',
    moderator: 'Moderator',
    admin: 'Administrator',
    roleUser: 'User',
    rolePremium: 'Premium User',
    roleTeacher: 'Teacher',
    roleModerator: 'Moderator',
    roleAdmin: 'Administrator',
    
    // Content
    contentManagement: 'Content Management',
    lessonManagement: 'Lesson Management',
    addLesson: 'Add Lesson',
    editLesson: 'Edit Lesson',
    deleteLesson: 'Delete Lesson',
    lessonTitle: 'Lesson Title',
    lessonDescription: 'Lesson Description',
    lessonContent: 'Lesson Content',
    lessonOrder: 'Lesson Order',
    lessonStatus: 'Lesson Status',
    lessonActions: 'Actions',
    
    // Courses
    courseTitle: 'Course Title',
    courseDescription: 'Course Description',
    courseLevel: 'Course Level',
    courseDuration: 'Course Duration',
    coursePrice: 'Course Price',
    courseStatus: 'Course Status',
    courseActions: 'Actions',
    addCourse: 'Add Course',
    editCourse: 'Edit Course',
    deleteCourse: 'Delete Course',
    
    // Admin
    adminDashboard: 'Admin Dashboard',
    adminDashboardSubtitle: 'Manage the entire system',
    systemOverview: 'System Overview',
    systemStatus: 'System Status',
    systemUptime: 'System Uptime',
    lastBackup: 'Last Backup',
    storageUsed: 'Storage Used',
    storageTotal: 'Total Storage',
    quickActions: 'Quick Actions',
    addNewUser: 'Add New User',
    addNewLesson: 'Add New Lesson',
    recentActivities: 'Recent Activities',
    viewAllActivities: 'View All Activities',
    courseManagement: 'Course Management',
    manageAllCourses: 'Manage all courses in the system',
    addNewCourse: 'Add New Course',
    
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
    joinThousands: 'Join thousands of learners'
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
