import type { ReactNode } from 'react';

export const PageHeader = ({ title, description, action }: { title: string; description: string; action?: ReactNode }) => (
  <div className='mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
    <div className='space-y-1'>
      <h1 className='text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl'>{title}</h1>
      <p className='max-w-3xl text-sm text-slate-600 md:text-base'>{description}</p>
    </div>
    {action}
  </div>
);

export const StatCard = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className='card'>
    <p className='text-xs font-medium uppercase tracking-wide text-slate-500'>{label}</p>
    <p className='mt-2 text-2xl font-semibold text-slate-900'>{value}</p>
    {hint && <p className='mt-1 text-xs text-slate-500'>{hint}</p>}
  </div>
);

const tones: Record<string, string> = {
  Eingestempelt: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  Bestätigt: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  Genehmigt: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  Verfügbar: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  Offen: 'border-amber-200 bg-amber-50 text-amber-700',
  'Zur Prüfung': 'border-amber-200 bg-amber-50 text-amber-700',
  Eingereicht: 'border-amber-200 bg-amber-50 text-amber-700',
  Abgelehnt: 'border-rose-200 bg-rose-50 text-rose-700',
  Deaktiviert: 'border-rose-200 bg-rose-50 text-rose-700',
};

export const StatusBadge = ({ status }: { status: string }) => <span className={`badge border ${tones[status] ?? 'border-slate-200 bg-slate-100 text-slate-700'}`}>{status}</span>;

export const Notice = ({ tone = 'info', children }: { tone?: 'info' | 'warning'; children: ReactNode }) => <div className={`rounded-xl border p-3 text-sm ${tone === 'warning' ? 'border-amber-200 bg-amber-50 text-amber-800' : 'border-indigo-200 bg-indigo-50 text-indigo-800'}`}>{children}</div>;
export const TrustNote = ({ children }: { children: ReactNode }) => <Notice>{children}</Notice>;
export const WarningNote = ({ children }: { children: ReactNode }) => <Notice tone='warning'>{children}</Notice>;

export const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className='card'>
    <h2 className='text-base font-semibold text-slate-900'>{title}</h2>
    <div className='mt-4'>{children}</div>
  </section>
);

export const TableShell = ({ children }: { children: ReactNode }) => <div className='overflow-x-auto rounded-lg border border-slate-200'>{children}</div>;
