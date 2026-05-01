export type Role = 'Admin' | 'Employee' | 'SuperAdmin';
export type Language = 'de' | 'en' | 'ar';
export type Status = 'Offen'|'Eingereicht'|'Genehmigt'|'Abgelehnt'|'Storniert'|'Bestätigt'|'Zur Prüfung'|'Geprüft'|'Exportiert'|'Nachträglich geändert'|'Verfügbar'|'Ersetzt'|'Archiviert'|'Gemeldet'|'Dokument ausstehend'|'Dokument erhalten'|'Aktiv'|'Deaktiviert'|'Zugriff gesperrt'|'Eingeladen'|'Einladung abgelaufen';
export interface User { id:string; companyId:string; name:string; email:string; role:Role; language:Language; }
export interface Company { id:string; name:string; standort:string; timezone:string; defaultLanguage: Language; }
export interface EmployeeProfile { userId:string; personalnummer:string; beschaeftigungsart:string; wochenstunden:number; arbeitstageProWoche:number; urlaubstageProJahr:number; standort:string; accountStatus:Status; }
export interface TimeEntry { id:string; companyId:string; employeeId:string; date:string; start:string; end:string; breakMinutes:number; confirmationStatus:Status; }
export interface Payslip { id:string; companyId:string; employeeId:string; month:number; year:number; status:Status; providedAt:string; }
export interface VacationRequest { id:string; companyId:string; employeeId:string; from:string; to:string; days:number; status:Status; submittedAt:string; comment:string; }
export interface SickReport { id:string; companyId:string; employeeId:string; from:string; to:string; status:Status; documentStatus:Status; submittedAt:string; internalStatus:string; }
export interface AuditLog { id:string; companyId:string; actor:string; auditAction:string; target:string; description:string; reason:string; timestamp:string; }
