import type { AuditLog, Company, Payslip, SickReport, TimeEntry, User, VacationRequest } from '../types/domain';
export const company: Company={id:'c1',name:'Beispiel GmbH',standort:'Berlin'};
export const currentUser: User={id:'u1',companyId:'c1',name:'Max Mustermann',email:'max@beispiel.de',role:'Employee',language:'de'};
export const employees=[{id:'u1',name:'Max Mustermann'},{id:'u2',name:'Anna Schmidt'}];
export const timeEntries: TimeEntry[]=[{id:'t1',companyId:'c1',employeeId:'u1',date:'2026-04-28',start:'08:00',end:'16:30',confirmationStatus:'Bestätigt',source:'Web'}];
export const payslips: Payslip[]=[{id:'p1',companyId:'c1',employeeId:'u1',month:3,year:2026,status:'Geprüft'}];
export const vacationRequests: VacationRequest[]=[{id:'v1',companyId:'c1',employeeId:'u1',from:'2026-07-01',to:'2026-07-10',status:'Eingereicht'}];
export const sickReports: SickReport[]=[{id:'s1',companyId:'c1',employeeId:'u2',from:'2026-04-20',to:'2026-04-22',status:'Genehmigt'}];
export const auditLogs: AuditLog[]=[{id:'a1',companyId:'c1',actor:'Anna Schmidt',auditAction:'Urlaub genehmigt',timestamp:'2026-04-30 10:44'}];
