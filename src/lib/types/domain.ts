export type Role = 'Admin' | 'Employee' | 'SuperAdmin';
export type Language = 'de' | 'en' | 'ar';
export type Status = 'Offen'|'Eingereicht'|'Genehmigt'|'Abgelehnt'|'Storniert'|'Bestätigt'|'Geprüft'|'Exportiert'|'Nachträglich geändert';
export interface User { id:string; companyId:string; name:string; email:string; role:Role; language:Language; }
export interface Company { id:string; name:string; standort:string; }
export interface EmployeeProfile { userId:string; personalnummer:string; beschaeftigungsart:string; wochenstunden:number; arbeitstageProWoche:number; urlaubstageProJahr:number; standort:string; }
export interface TimeEntry { id:string; companyId:string; employeeId:string; date:string; start:string; end:string; confirmationStatus:Status; source:string; }
export interface Payslip { id:string; companyId:string; employeeId:string; month:number; year:number; status:Status; }
export interface VacationRequest { id:string; companyId:string; employeeId:string; from:string; to:string; status:Status; }
export interface SickReport { id:string; companyId:string; employeeId:string; from:string; to:string; status:Status; }
export interface AuditLog { id:string; companyId:string; actor:string; auditAction:string; timestamp:string; }
