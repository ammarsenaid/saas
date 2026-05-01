import type { AuditLog, Company, EmployeeProfile, Payslip, SickReport, TimeEntry, User, VacationRequest } from '../types/domain';

export const company: Company = { id: 'c1', name: 'Muster GmbH', standort: 'Berlin', timezone: 'Europe/Berlin', defaultLanguage: 'de' };
export const currentUser: User = { id: 'u1', companyId: 'c1', name: 'Erika Mustermann', email: 'erika@muster-gmbh.de', role: 'Employee', language: 'de' };
export const employeeProfiles: EmployeeProfile[] = [
  { userId: 'u1', personalnummer: 'PN-1001', beschaeftigungsart: 'Vollzeit', wochenstunden: 40, arbeitstageProWoche: 5, urlaubstageProJahr: 30, standort: 'Berlin', accountStatus: 'Aktiv' },
  { userId: 'u2', personalnummer: 'PN-1002', beschaeftigungsart: 'Teilzeit', wochenstunden: 30, arbeitstageProWoche: 4, urlaubstageProJahr: 26, standort: 'Hamburg', accountStatus: 'Aktiv' },
  { userId: 'u3', personalnummer: 'PN-1003', beschaeftigungsart: 'Werkstudent', wochenstunden: 20, arbeitstageProWoche: 3, urlaubstageProJahr: 20, standort: 'München', accountStatus: 'Eingeladen' },
  { userId: 'u4', personalnummer: 'PN-1004', beschaeftigungsart: 'Vollzeit', wochenstunden: 38, arbeitstageProWoche: 5, urlaubstageProJahr: 28, standort: 'Berlin', accountStatus: 'Deaktiviert' },
];
export const users: User[] = [currentUser, { id: 'u2', companyId: 'c1', name: 'Ali Yilmaz', email: 'ali@muster-gmbh.de', role: 'Employee', language: 'de' }, { id: 'u3', companyId: 'c1', name: 'Lena Scholz', email: 'lena@muster-gmbh.de', role: 'Employee', language: 'de' }, { id: 'u4', companyId: 'c1', name: 'Jana Wolf', email: 'jana@muster-gmbh.de', role: 'Employee', language: 'de' }];
export const timeEntries: TimeEntry[] = [
  { id: 't1', companyId: 'c1', employeeId: 'u1', date: '2026-04-28', start: '08:01', end: '16:41', breakMinutes: 30, confirmationStatus: 'Bestätigt' },
  { id: 't2', companyId: 'c1', employeeId: 'u1', date: '2026-04-29', start: '08:10', end: '16:53', breakMinutes: 35, confirmationStatus: 'Zur Prüfung' },
  { id: 't3', companyId: 'c1', employeeId: 'u2', date: '2026-04-30', start: '09:00', end: '15:50', breakMinutes: 20, confirmationStatus: 'Offen' },
];
export const payslips: Payslip[] = [
  { id: 'p1', companyId: 'c1', employeeId: 'u1', month: 4, year: 2026, status: 'Verfügbar', providedAt: '2026-04-29' },
  { id: 'p2', companyId: 'c1', employeeId: 'u1', month: 3, year: 2026, status: 'Archiviert', providedAt: '2026-03-28' },
  { id: 'p3', companyId: 'c1', employeeId: 'u1', month: 2, year: 2026, status: 'Ersetzt', providedAt: '2026-02-27' },
];
export const vacationRequests: VacationRequest[] = [
  { id: 'v1', companyId: 'c1', employeeId: 'u1', from: '2026-07-08', to: '2026-07-15', days: 6, status: 'Eingereicht', submittedAt: '2026-04-30', comment: 'Sommerurlaub' },
  { id: 'v2', companyId: 'c1', employeeId: 'u2', from: '2026-08-10', to: '2026-08-14', days: 5, status: 'Genehmigt', submittedAt: '2026-04-20', comment: 'Familienreise' },
  { id: 'v3', companyId: 'c1', employeeId: 'u3', from: '2026-05-05', to: '2026-05-06', days: 2, status: 'Abgelehnt', submittedAt: '2026-04-19', comment: 'Prüfungsphase Team' },
];
export const sickReports: SickReport[] = [
  { id: 's1', companyId: 'c1', employeeId: 'u1', from: '2026-04-15', to: '2026-04-16', status: 'Gemeldet', documentStatus: 'Dokument ausstehend', submittedAt: '2026-04-15', internalStatus: 'Nachfassen erforderlich' },
  { id: 's2', companyId: 'c1', employeeId: 'u2', from: '2026-04-10', to: '2026-04-12', status: 'Geprüft', documentStatus: 'Dokument erhalten', submittedAt: '2026-04-10', internalStatus: 'Abgeschlossen' },
];
export const auditLogs: AuditLog[] = [
  { id: 'a1', companyId: 'c1', actor: 'Admin Julia König', auditAction: 'Zeitkorrektur', target: 'Erika Mustermann', description: 'Ausstempelzeit angepasst', reason: 'Nachtrag laut Ticket', timestamp: '2026-04-30 10:44' },
  { id: 'a2', companyId: 'c1', actor: 'Admin Julia König', auditAction: 'Lohnabrechnung hochgeladen', target: 'Ali Yilmaz', description: 'April 2026 bereitgestellt', reason: 'Monatsabschluss', timestamp: '2026-04-30 12:10' },
];
