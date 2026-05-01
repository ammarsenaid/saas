import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Shell } from '../components/layout/Shell';
import { ADMIN_NAV, EMPLOYEE_NAV, SUPER_ADMIN_NAV } from '../lib/constants/app';
import { Placeholder } from '../pages/Placeholders';

const rolePreview: 'Employee'|'Admin'|'SuperAdmin'='Employee'; // Preview only — replace with real auth/RBAC later.
const Emp=({t,d}:{t:string;d:string})=><Shell title='Mitarbeiterportal' nav={EMPLOYEE_NAV}><Placeholder title={t} desc={d}/></Shell>;
const Adm=({t,d}:{t:string;d:string})=><Shell title='Adminbereich' nav={ADMIN_NAV}><Placeholder title={t} desc={d}/></Shell>;
const Sup=()=><Shell title='Super Admin' nav={SUPER_ADMIN_NAV}><Placeholder title='Super Admin' desc='Platzhalter für spätere Mandantenfunktionen.'/></Shell>;
const Login=()=><div className='min-h-screen grid place-items-center'><div className='card max-w-md'><h1 className='text-xl font-semibold'>Anmeldung</h1><p className='text-slate-600'>Nur Platzhalter. Keine echte Authentifizierung implementiert.</p><button className='btn btn-primary mt-3'>Demo Login</button></div></div>;
export function AppRouter(){return <BrowserRouter><Routes>
<Route path='/login' element={<Login/>}/>
<Route path='/' element={<Navigate to={rolePreview==='Admin'?'/admin':rolePreview==='SuperAdmin'?'/super-admin':'/app'}/>}/>
<Route path='/app' element={<Emp t='Übersicht' d='Mitarbeiter-Dashboard mit offenen Aufgaben, Resturlaub und letzter Buchung.'/>}/>
<Route path='/app/time-clock' element={<Emp t='Zeiterfassung' d='Einstempeln, Pause starten/beenden, Ausstempeln (Mock).'/>}/>
<Route path='/app/my-hours' element={<Emp t='Meine Stunden' d='Monatliche Arbeitszeiten und Bestätigungsstatus.'/>}/>
<Route path='/app/payslips' element={<Emp t='Lohnabrechnungen' d='Monatliche Abrechnungen als Platzhalterliste.'/>}/>
<Route path='/app/vacation' element={<Emp t='Urlaub' d='Urlaub beantragen, geplant/genehmigt/verfügbar anzeigen.'/>}/>
<Route path='/app/sick-leave' element={<Emp t='Krankmeldung' d='Krankmeldungen einreichen und Status prüfen.'/>}/>
<Route path='/app/profile' element={<Emp t='Profil' d='Persönliche Daten und Beschäftigungsdetails (read-only Mock).'/>}/>
<Route path='/admin' element={<Adm t='Admin Dashboard' d='Zu erledigen, offene Anfragen und Monatsabschlussstatus.'/>}/>
<Route path='/admin/employees' element={<Adm t='Mitarbeitende' d='Mitarbeiterliste mit Personalnummer und Beschäftigungsart.'/>}/>
<Route path='/admin/time-records' element={<Adm t='Zeitnachweise' d='Monatliche Zeitdaten zur Prüfung und Exportvorbereitung.'/>}/>
<Route path='/admin/leave-requests' element={<Adm t='Urlaubsanträge' d='Anträge prüfen: genehmigen oder ablehnen (Platzhalter).'/>}/>
<Route path='/admin/sick-reports' element={<Adm t='Krankmeldungen' d='Eingänge, Status und Nachweiserfassung als Mock.'/>}/>
<Route path='/admin/payslip-upload' element={<Adm t='Lohnabrechnung Upload' d='Nur Upload-UI Platzhalter, kein realer Upload.'/>}/>
<Route path='/admin/company-settings' element={<Adm t='Firmeneinstellungen' d='Standort, Wochenstunden und Standards (Mock-Konfiguration).'/>}/>
<Route path='/admin/audit-logs' element={<Adm t='Audit-Logs' d='Read-only Nachvollziehbarkeit aller Admin-Aktionen.'/>}/>
<Route path='/super-admin' element={<Sup/>}/>
</Routes></BrowserRouter>}
