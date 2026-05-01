import type { Role } from '../types/domain';

export type NavItem = readonly [string, string];

export const ROLES: Role[] = ['Admin', 'Employee', 'SuperAdmin'];
export const LANGUAGES = ['de', 'en', 'ar'] as const;

export const EMPLOYEE_NAV: NavItem[] = [
  ['/app', 'Übersicht'],
  ['/app/time-clock', 'Zeiterfassung'],
  ['/app/my-hours', 'Meine Stunden'],
  ['/app/payslips', 'Lohnabrechnungen'],
  ['/app/vacation', 'Urlaub'],
  ['/app/sick-leave', 'Krankmeldung'],
  ['/app/profile', 'Profil'],
];

export const ADMIN_NAV: NavItem[] = [
  ['/admin', 'Dashboard'],
  ['/admin/employees', 'Mitarbeiter'],
  ['/admin/time-records', 'Zeitnachweise'],
  ['/admin/leave-requests', 'Urlaubsanträge'],
  ['/admin/sick-reports', 'Krankmeldungen'],
  ['/admin/payslip-upload', 'Lohnabrechnungen'],
  ['/admin/company-settings', 'Unternehmen'],
  ['/admin/audit-logs', 'Audit-Logs'],
];

export const SUPER_ADMIN_NAV: NavItem[] = [['/super-admin', 'Super Admin']];
