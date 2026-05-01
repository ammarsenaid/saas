import { currentUser, employeeProfiles, payslips, sickReports, timeEntries, vacationRequests } from '../../lib/mock-data';
import { Notice, PageHeader, Section, StatCard, StatusBadge, TableShell } from '../../components/ui/primitives';

const me = employeeProfiles[0];
const myEntries = timeEntries.filter((t) => t.employeeId === currentUser.id);

export const EmployeeDashboard = () => (
  <div className='space-y-4'>
    <PageHeader
      title={`Guten Morgen, ${currentUser.name.split(' ')[0]}!`}
      description='Bin ich eingestempelt? Bin ich in Pause? Was ist die nächste Aktion?'
      action={<button className='btn btn-primary w-full sm:w-auto' disabled>Nächste Aktion: Pause starten</button>}
    />
    <div className='grid gap-4 md:grid-cols-3'>
      <StatCard label='Aktueller Status' value='Eingestempelt' hint='Letzte Buchung: 08:02 Uhr' />
      <StatCard label='Heute' value='07:42 h' hint='Pause: 00:32 h' />
      <StatCard label='Urlaub verfügbar' value='18 Tage' hint='Geplant/Genehmigt: 4 Tage' />
    </div>
    <div className='grid gap-4 lg:grid-cols-3'>
      <Section title='Heutiger Verlauf'><ul className='space-y-1 text-sm'><li>Eingestempelt 08:02</li><li>Pause gestartet 12:03</li><li>Pause beendet 12:35</li></ul></Section>
      <Section title='Meine Aufgaben'><ul className='space-y-2 text-sm'><li>Monat April bestätigen</li><li>Neue Lohnabrechnung verfügbar</li><li>Krankmeldung Dokument ausstehend</li></ul></Section>
      <Section title='Schnellzugriffe'><div className='grid grid-cols-2 gap-2 text-sm'><button className='btn btn-muted' disabled>Arbeitszeiten</button><button className='btn btn-muted' disabled>Urlaub</button><button className='btn btn-muted' disabled>Krankmeldung</button><button className='btn btn-muted' disabled>Lohnabrechnungen</button></div></Section>
    </div>
  </div>
);

export const TimeClockPage = () => (
  <div className='space-y-4'>
    <PageHeader title='Zeiterfassung' description='Touch-freundliche Platzhalter-Aktionen für mobile Nutzung.' />
    <Section title='Aktueller Status'>
      <div className='flex flex-wrap items-center gap-2'><StatusBadge status='Eingestempelt' /><StatusBadge status='Pause aktiv' /><span className='text-sm text-slate-600'>Letzte Buchung: 08:02 Uhr</span></div>
      <div className='mt-3 grid gap-3 sm:grid-cols-2'>
        {['Einstempeln', 'Pause starten', 'Pause beenden', 'Ausstempeln'].map((x) => <button key={x} className='btn btn-primary py-3' disabled>{x}</button>)}
      </div>
    </Section>
    <Section title='Heute'><ul className='space-y-1 text-sm'><li>08:02 Eingestempelt</li><li>12:03 Pause gestartet</li><li>12:35 Pause beendet</li><li>17:02 Ausgestempelt</li></ul><p className='mt-2 font-medium'>Gesamt: 08:28 h</p></Section>
    <Notice>Mockdaten — echte Zeiterfassung folgt später.</Notice>
  </div>
);

export const MyHoursPage = () => <div className='space-y-4'><PageHeader title='Meine Stunden' description='Monatsübersicht und Bestätigungsstatus.'/><div className='grid gap-4 md:grid-cols-4'>{['Offen','Zur Prüfung','Bestätigt','Nachträglich geändert'].map((s)=><StatCard key={s} label={s} value='1'/>)}</div><Section title='Einträge April 2026'><TableShell><thead><tr className='border-b text-left text-xs uppercase tracking-wide text-slate-500'><th className='py-2'>Datum</th><th>Einstempeln</th><th>Ausstempeln</th><th>Pause</th><th>Arbeitszeit</th><th>Status</th></tr></thead><tbody>{myEntries.map((t)=><tr key={t.id} className='border-b hover:bg-slate-50'><td className='py-3'>{t.date}</td><td>{t.start}</td><td>{t.end}</td><td>{t.breakMinutes} min</td><td>08:10 h</td><td><StatusBadge status={t.confirmationStatus}/></td></tr>)}</tbody></TableShell><button className='btn btn-muted mt-3' disabled>Monat bestätigen</button></Section></div>;

export const PayslipsPage = () => <div className='space-y-4'><PageHeader title='Lohnabrechnungen' description='Vertrauliche Dokumente mit Berechtigungsschutz (Platzhalter).'/><Notice>Lohnabrechnungen werden später nur berechtigt abrufbar sein.</Notice><Section title='Dokumente'><TableShell><thead><tr className='border-b text-left text-xs uppercase tracking-wide text-slate-500'><th className='py-2'>Monat</th><th>Jahr</th><th>Status</th><th>Bereitgestellt am</th><th>Aktion</th></tr></thead><tbody>{payslips.map((p)=><tr key={p.id} className='border-b hover:bg-slate-50'><td className='py-3'>{p.month}</td><td>{p.year}</td><td><StatusBadge status={p.status}/></td><td>{p.providedAt}</td><td><button className='btn btn-muted' disabled>Herunterladen</button></td></tr>)}</tbody></TableShell></Section></div>;

export const VacationPage = () => <div className='space-y-4'><PageHeader title='Urlaub' description='Kontostände und Anträge mit manueller MVP-Prüfung.' action={<button className='btn btn-primary' disabled>Urlaub beantragen</button>} /><div className='grid gap-4 md:grid-cols-5'><StatCard label='Jahresurlaub' value={`${me.urlaubstageProJahr}`}/><StatCard label='Genommen' value='8'/><StatCard label='Geplant/Genehmigt' value='4'/><StatCard label='Anpassung' value='+0'/><StatCard label='Verfügbar' value='18'/></div><Section title='Anträge'><TableShell><thead><tr className='border-b text-left text-xs uppercase tracking-wide text-slate-500'><th className='py-2'>Zeitraum</th><th>Tage</th><th>Status</th><th>Eingereicht am</th><th>Kommentar</th><th>Aktion</th></tr></thead><tbody>{vacationRequests.filter(v=>v.employeeId===currentUser.id).map((v)=><tr key={v.id} className='border-b hover:bg-slate-50'><td className='py-3'>{v.from} – {v.to}</td><td>{v.days}</td><td><StatusBadge status={v.status}/></td><td>{v.submittedAt}</td><td>{v.comment}</td><td><button className='btn btn-muted' disabled>Stornieren</button></td></tr>)}</tbody></TableShell></Section><Notice tone='warning'>Feiertage und Sonderfälle werden im MVP manuell geprüft.</Notice></div>;

export const SickLeavePage = () => <div className='space-y-4'><PageHeader title='Krankmeldung' description='Datensparsame Krankmeldungsübersicht.' action={<button className='btn btn-primary' disabled>Krankmeldung melden</button>} /><Notice tone='warning'>Keine Diagnose speichern.</Notice><Section title='Meldungen'><TableShell><thead><tr className='border-b text-left text-xs uppercase tracking-wide text-slate-500'><th className='py-2'>Zeitraum</th><th>Status</th><th>Dokument</th><th>Gemeldet am</th></tr></thead><tbody>{sickReports.filter(s=>s.employeeId===currentUser.id).map((s)=><tr key={s.id} className='border-b hover:bg-slate-50'><td className='py-3'>{s.from} – {s.to}</td><td><StatusBadge status={s.status}/></td><td><StatusBadge status={s.documentStatus}/></td><td>{s.submittedAt}</td></tr>)}</tbody></TableShell></Section><Notice>eAU-Integration folgt später.</Notice></div>;

export const ProfilePage = () => <div className='space-y-4'><PageHeader title='Profil' description='Persönliche Daten, Arbeitsmodell, Urlaub und Sprache.'/><div className='grid gap-4 lg:grid-cols-2'><Section title='Persönliche Daten'><p className='text-sm'>Name: {currentUser.name}</p><p className='text-sm'>E-Mail: {currentUser.email}</p><p className='text-sm'>Personalnummer: {me.personalnummer}</p><p className='text-sm'>Standort: {me.standort}</p></Section><Section title='Arbeitsmodell'><p className='text-sm'>Beschäftigungsart: {me.beschaeftigungsart}</p><p className='text-sm'>Wochenstunden: {me.wochenstunden}</p><p className='text-sm'>Arbeitstage/Woche: {me.arbeitstageProWoche}</p></Section><Section title='Urlaub'><p className='text-sm'>Urlaubstage pro Jahr: {me.urlaubstageProJahr}</p></Section><Section title='Konto & Sprache'><p className='text-sm'>Account Status: {me.accountStatus}</p><p className='text-sm'>Sprache: DE (Platzhalter)</p></Section></div></div>;
