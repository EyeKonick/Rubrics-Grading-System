export const ROUTES = {
  DASHBOARD: '/',
  CREATE_PROJECT: '/create-project',
  PROJECT_DETAILS: '/project/:id',
  STUDENT_MANAGEMENT: '/project/:id/students',
  RUBRIC_CREATION: '/project/:id/rubric',
  GRADE_STUDENTS: '/project/:id/grade',
  ANALYTICS: '/project/:id/analytics',
  EXPORT: '/project/:id/export',
} as const;