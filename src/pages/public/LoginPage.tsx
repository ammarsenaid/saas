export const LoginPage = () => (
  <div className='min-h-screen bg-slate-100 p-4 md:p-8'>
    <div className='mx-auto grid w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-2'>
      <div className='p-7 md:p-10'>
        <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>Mitarbeiterportal</p>
        <h1 className='mt-2 text-3xl font-semibold text-slate-900'>Willkommen zurück</h1>
        <p className='mt-3 text-sm text-slate-600'>Einfaches Mitarbeiterportal für kleine deutsche Unternehmen — Arbeitszeiten, Urlaub, Krankmeldung und Lohnabrechnungen sicher an einem Ort.</p>
        <div className='mt-7 space-y-3'>
          <input className='w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm' placeholder='E-Mail' disabled />
          <input className='w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm' placeholder='Passwort' type='password' disabled />
          <button className='btn btn-primary w-full' disabled>Anmelden (Platzhalter)</button>
        </div>
        <p className='mt-4 text-xs text-slate-500'>Echte Anmeldung und Rollenrechte folgen in Task 5.</p>
      </div>
      <div className='bg-indigo-50/70 p-7 md:p-10'>
        <h2 className='text-lg font-semibold text-indigo-900'>Sicherer Zugriff mit klaren Rollen</h2>
        <ul className='mt-4 space-y-2 text-sm text-indigo-900'>
          <li>• Zeiterfassung und Arbeitszeiten</li><li>• Urlaub und Krankmeldung</li><li>• Lohnabrechnungen geschützt bereitstellen</li>
        </ul>
        <p className='mt-5 rounded-lg border border-indigo-200 bg-white/70 p-3 text-sm text-indigo-800'>Mockdaten — echte Funktionen folgen in späteren Tasks.</p>
      </div>
    </div>
  </div>
);
