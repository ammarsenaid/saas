import { currentUser, employeeProfiles, payslips, sickReports, timeEntries, vacationRequests } from '../../lib/mock-data';
import { EmptyState, PageHeader, Section, StatCard, StatusBadge, TableShell, TrustNote, WarningNote } from '../../components/ui/primitives';

const me = employeeProfiles[0];
const myEntries = timeEntries.filter((t) => t.employeeId === currentUser.id);

export const EmployeeDashboard = () => {
  const quickLinks = [
    { label: 'Zeiterfassung', desc: 'Start, Pause und Ende buchen.', href: '/app/time-clock' },
    { label: 'Meine Stunden', desc: 'Monatliche Arbeitszeiten prüfen.', href: '/app/my-hours' },
    { label: 'Urlaub', desc: 'Kontostand und Anträge sehen.', href: '/app/vacation' },
    { label: 'Krankmeldung', desc: 'Status und Dokumente im Blick.', href: '/app/sick-leave' },
    { label: 'Lohnabrechnungen', desc: 'Bereitgestellte Abrechnungen prüfen.', href: '/app/payslips' },
  ];
  const tasks = [
    { title: 'Monat April bestätigen', desc: 'Bitte prüfen Sie Ihre Arbeitszeiten.', status: 'Offen' },
    { title: 'Neue Lohnabrechnung verfügbar', desc: 'April 2026 wurde bereitgestellt.', status: 'Neu' },
    { title: 'Krankmeldung: Dokument ausstehend', desc: 'Bitte Dokument später ergänzen.', status: 'Wichtig' },
  ];
  const timeline = [
    { time: '08:02', event: 'Eingestempelt' },
    { time: '12:03', event: 'Pause gestartet' },
    { time: '12:35', event: 'Pause beendet' },
    { time: 'Heute', event: 'Neue Lohnabrechnung verfügbar' },
  ];

  return (
    <div className='space-y-4'>
      <PageHeader title={`Guten Morgen, ${currentUser.name.split(' ')[0]}!`} description='Ihr täglicher Überblick zu Status, Aufgaben und Arbeitszeit.' />

      <Section title='Aktueller Status'>
        <div className='rounded-xl border border-indigo-200 bg-indigo-50 p-4'>
          <p className='text-sm text-indigo-700'>Arbeitsstatus</p>
          <div className='mt-2 flex flex-wrap items-center gap-2'>
            <StatusBadge status='Eingestempelt' />
            <StatusBadge status='Pause nicht aktiv' />
          </div>
          <p className='mt-3 text-sm text-slate-700'>Letzte Buchung: 08:02 Uhr · Arbeitszeit heute: 07:42 h</p>
          <button className='btn btn-primary mt-4 w-full py-3 sm:w-auto' disabled>Pause starten</button>
        </div>
      </Section>

      <Section title='Heute'>
        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-5'>
          <StatCard label='Startzeit' value='08:02' />
          <StatCard label='Pausenzeit' value='00:32' />
          <StatCard label='Arbeitszeit heute' value='07:42 h' />
          <StatCard label='Letzte Buchung' value='08:02 Uhr' />
          <StatCard label='Status' value='Eingestempelt' />
        </div>
      </Section>

      <div className='grid gap-4 lg:grid-cols-2'>
        <Section title='Meine Aufgaben'>
          <div className='space-y-2'>
            {tasks.map((task) => (
              <div key={task.title} className='rounded-lg border border-slate-200 p-3'>
                <div className='flex items-center justify-between gap-2'>
                  <p className='text-sm font-medium'>{task.title}</p>
                  <StatusBadge status={task.status} />
                </div>
                <p className='mt-1 text-xs text-slate-600'>{task.desc}</p>
                <button className='btn btn-muted mt-2 text-xs' disabled>Platzhalter</button>
              </div>
            ))}
          </div>
        </Section>

        <Section title='Schnellzugriffe'>
          <div className='grid gap-2 sm:grid-cols-2'>
            {quickLinks.map((item) => (
              <a key={item.label} href={item.href} className='rounded-lg border border-slate-200 p-3 hover:bg-slate-50'>
                <p className='text-sm font-medium text-slate-900'>{item.label}</p>
                <p className='text-xs text-slate-600'>{item.desc}</p>
              </a>
            ))}
          </div>
        </Section>
      </div>

      <Section title='Heutiger Verlauf'>
        <ul className='space-y-2 text-sm'>
          {timeline.map((item) => (
            <li key={`${item.time}-${item.event}`} className='flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2'>
              <span>{item.event}</span>
              <span className='font-medium text-slate-700'>{item.time}</span>
            </li>
          ))}
        </ul>
      </Section>

      <TrustNote>Mockdaten — echte Zeiterfassung, Aufgaben und Benachrichtigungen folgen in späteren Tasks.</TrustNote>
    </div>
  );
};

export const TimeClockPage = () => {
  const timeline = [
    ['Eingestempelt', '08:02'],
    ['Pause gestartet', '12:03'],
    ['Pause beendet', '12:35'],
    ['Ausgestempelt', '17:02'],
  ] as const;

  return (
    <div className='space-y-4'>
      <PageHeader title='Zeiterfassung' description='Mobile-first Arbeitszeiterfassung als Platzhalter-Oberfläche.' />

      <Section title='Aktueller Status & nächste Aktion'>
        <div className='grid gap-4 lg:grid-cols-[1.2fr_1fr]'>
          <div className='rounded-xl border border-indigo-200 bg-indigo-50 p-4'>
            <p className='text-sm text-indigo-700'>Aktueller Status</p>
            <div className='mt-2 flex flex-wrap items-center gap-2'>
              <StatusBadge status='Eingestempelt' />
              <span className='text-sm text-slate-600'>Letzte Buchung: 12:35 Uhr</span>
            </div>
            <button className='btn btn-primary mt-4 w-full py-3 sm:w-auto' disabled>
              Nächste Aktion: Pause starten
            </button>
          </div>

          <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-1'>
            {['Einstempeln', 'Pause starten', 'Pause beenden', 'Ausstempeln'].map((label) => (
              <button key={label} className='btn btn-muted py-3' disabled>
                {label}
              </button>
            ))}
          </div>
        </div>
      </Section>

      <div className='grid gap-4 lg:grid-cols-2'>
        <Section title='Heutiger Verlauf'>
          <ul className='space-y-2'>
            {timeline.map(([event, time]) => (
              <li key={event} className='flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm'>
                <span>{event}</span>
                <span className='font-medium text-slate-700'>{time} Uhr</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title='Arbeitszeit heute'>
          <div className='grid gap-3 sm:grid-cols-2'>
            <StatCard label='Startzeit' value='08:02 Uhr' />
            <StatCard label='Pausenzeit' value='00:32 h' />
            <StatCard label='Bisherige Arbeitszeit' value='07:42 h' />
            <StatCard label='Letzte Buchung' value='Pause beendet · 12:35 Uhr' />
          </div>
        </Section>
      </div>

      <TrustNote>Mockdaten — echte Zeiterfassung und Protokollierung folgen später.</TrustNote>
    </div>
  );
};

export const MyHoursPage = () => <div className='space-y-4'><PageHeader title='Meine Stunden' description='Monatsübersicht und Bestätigungsstatus.'/><div className='grid gap-4 md:grid-cols-4'>{['Offen','Zur Prüfung','Bestätigt','Nachträglich geändert'].map((s)=><StatCard key={s} label={s} value='1'/>)}</div><Section title='Einträge April 2026'><TableShell><thead><tr className='border-b text-left text-xs uppercase tracking-wide text-slate-500'><th className='py-2'>Datum</th><th>Einstempeln</th><th>Ausstempeln</th><th>Pause</th><th>Arbeitszeit</th><th>Status</th></tr></thead><tbody>{myEntries.map((t)=><tr key={t.id} className='border-b hover:bg-slate-50'><td className='py-3'>{t.date}</td><td>{t.start}</td><td>{t.end}</td><td>{t.breakMinutes} min</td><td>08:10 h</td><td><StatusBadge status={t.confirmationStatus}/></td></tr>)}</tbody></TableShell><button className='btn btn-muted mt-3' disabled>Monat bestätigen</button></Section></div>;

export const PayslipsPage = () => <div className='space-y-4'><PageHeader title='Lohnabrechnungen' description='Vertrauliche Dokumente mit Berechtigungsschutz (Platzhalter).'/><TrustNote>Lohnabrechnungen werden später nur nach Anmeldung und Berechtigung abrufbar sein.</TrustNote><Section title='Dokumente'><TableShell><thead><tr className='border-b text-left text-xs uppercase tracking-wide text-slate-500'><th className='py-2'>Monat</th><th>Jahr</th><th>Status</th><th>Bereitgestellt am</th><th>Aktion</th></tr></thead><tbody>{payslips.length===0 ? <tr><td colSpan={5} className='p-4'><EmptyState title='Keine Lohnabrechnungen' description='Sobald Dokumente bereitstehen, erscheinen sie hier.'/></td></tr> : payslips.map((p)=><tr key={p.id} className='border-b hover:bg-slate-50'><td className='py-3'>{p.month}</td><td>{p.year}</td><td><StatusBadge status={p.status}/></td><td>{p.providedAt}</td><td><button className='btn btn-muted' disabled>Herunterladen</button></td></tr>)}</tbody></TableShell></Section></div>;

export const VacationPage = () => <div className='space-y-4'><PageHeader title='Urlaub' description='Kontostände und Anträge mit manueller MVP-Prüfung.' action={<button className='btn btn-primary' disabled>Urlaub beantragen</button>} /><div className='grid gap-4 md:grid-cols-5'><StatCard label='Jahresurlaub' value={`${me.urlaubstageProJahr}`}/><StatCard label='Genommen' value='8'/><StatCard label='Geplant/Genehmigt' value='4'/><StatCard label='Anpassung' value='+0'/><StatCard label='Verfügbar' value='18'/></div><Section title='Anträge'><TableShell><thead><tr className='border-b text-left text-xs uppercase tracking-wide text-slate-500'><th className='py-2'>Zeitraum</th><th>Tage</th><th>Status</th><th>Eingereicht am</th><th>Kommentar</th><th>Aktion</th></tr></thead><tbody>{vacationRequests.filter(v=>v.employeeId===currentUser.id).map((v)=><tr key={v.id} className='border-b hover:bg-slate-50'><td className='py-3'>{v.from} – {v.to}</td><td>{v.days}</td><td><StatusBadge status={v.status}/></td><td>{v.submittedAt}</td><td>{v.comment}</td><td><button className='btn btn-muted' disabled>Stornieren</button></td></tr>)}</tbody></TableShell></Section><WarningNote>Feiertage und Sonderfälle werden im MVP manuell geprüft.</WarningNote></div>;

export const SickLeavePage = () => <div className='space-y-4'><PageHeader title='Krankmeldung' description='Datensparsame Krankmeldungsübersicht.' action={<button className='btn btn-primary' disabled>Krankmeldung melden</button>} /><WarningNote>Keine Diagnose speichern.</WarningNote><Section title='Meldungen'><TableShell><thead><tr className='border-b text-left text-xs uppercase tracking-wide text-slate-500'><th className='py-2'>Zeitraum</th><th>Status</th><th>Dokument</th><th>Gemeldet am</th></tr></thead><tbody>{sickReports.filter(s=>s.employeeId===currentUser.id).map((s)=><tr key={s.id} className='border-b hover:bg-slate-50'><td className='py-3'>{s.from} – {s.to}</td><td><StatusBadge status={s.status}/></td><td><StatusBadge status={s.documentStatus}/></td><td>{s.submittedAt}</td></tr>)}</tbody></TableShell></Section><TrustNote>eAU-Integration folgt später.</TrustNote></div>;

export const ProfilePage = () => <div className='space-y-4'><PageHeader title='Profil' description='Persönliche Daten, Arbeitsmodell, Urlaub und Sprache.'/><div className='grid gap-4 lg:grid-cols-2'><Section title='Persönliche Daten'><p className='text-sm'>Name: {currentUser.name}</p><p className='text-sm'>E-Mail: {currentUser.email}</p><p className='text-sm'>Personalnummer: {me.personalnummer}</p><p className='text-sm'>Standort: {me.standort}</p></Section><Section title='Arbeitsmodell'><p className='text-sm'>Beschäftigungsart: {me.beschaeftigungsart}</p><p className='text-sm'>Wochenstunden: {me.wochenstunden}</p><p className='text-sm'>Arbeitstage/Woche: {me.arbeitstageProWoche}</p></Section><Section title='Urlaub'><p className='text-sm'>Urlaubstage pro Jahr: {me.urlaubstageProJahr}</p></Section><Section title='Konto & Sprache'><p className='text-sm'>Account Status: {me.accountStatus}</p><p className='text-sm'>Sprache: DE (Platzhalter)</p></Section></div></div>;
