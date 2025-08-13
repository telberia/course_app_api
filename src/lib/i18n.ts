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
    
    // Navigation
    home: 'Startseite',
    about: 'Über uns',
    courses: 'Kurse',
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
    welcomeUser: 'Willkommen, {name}'
  },
  
  en: {
    // Common
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    email: 'Email',
    password: 'Password',
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
    
    // Navigation
    home: 'Home',
    about: 'About',
    courses: 'Courses',
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
    welcomeUser: 'Welcome, {name}'
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
