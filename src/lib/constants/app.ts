import type { Role } from '../types/domain';
export const ROLES: Role[] = ['Admin','Employee','SuperAdmin'];
export const LANGUAGES = ['de','en','ar'] as const;
export const EMPLOYEE_NAV=[['/app','Übersicht'],['/app/time-clock','Zeiterfassung'],['/app/my-hours','Meine Stunden'],['/app/payslips','Lohnabrechnungen'],['/app/vacation','Urlaub'],['/app/sick-leave','Krankmeldung'],['/app/profile','Profil']];
export const ADMIN_NAV=[['/admin','Dashboard'],['/admin/employees','Mitarbeitende'],['/admin/time-records','Zeitnachweise'],['/admin/leave-requests','Urlaubsanträge'],['/admin/sick-reports','Krankmeldungen'],['/admin/payslip-upload','Lohnabrechnung Upload'],['/admin/company-settings','Firmeneinstellungen'],['/admin/audit-logs','Audit-Logs']];
export const SUPER_ADMIN_NAV=[['/super-admin','Super Admin (Platzhalter)']];
