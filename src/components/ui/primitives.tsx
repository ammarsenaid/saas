import type { ReactNode } from 'react';

export const PageHeader = ({ title, description, action }: { title: string; description: string; action?: ReactNode }) => (
  <div className='mb-6 flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-end sm:justify-between'>
    <div>
      <h1 className='text-2xl font-semibold tracking-tight text-slate-900'>{title}</h1>
      <p className='mt-1 max-w-3xl text-sm text-slate-600'>{description}</p>
    </div>
    {action}
  </div>
);

export const StatCard = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className='card'>
    <p className='text-sm text-slate-500'>{label}</p>
    <p className='mt-1 text-2xl font-semibold text-slate-900'>{value}</p>
    {hint && <p className='mt-1 text-xs text-slate-500'>{hint}</p>}
  </div>
);

const statusTone: Record<string, string> = {
  Eingestempelt: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  'Pause aktiv': 'border-amber-200 bg-amber-50 text-amber-800',
  Offen: 'border-amber-200 bg-amber-50 text-amber-800',
  Abgelehnt: 'border-rose-200 bg-rose-50 text-rose-800',
  Bestätigt: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  Genehmigt: 'border-emerald-200 bg-emerald-50 text-emerald-800',
};

export const StatusBadge = ({ status }: { status: string }) => <span className={`badge border ${statusTone[status] ?? 'border-slate-200 bg-slate-100 text-slate-700'}`}>{status}</span>;

export const Notice = ({ tone = 'info', children }: { tone?: 'info' | 'warning'; children: ReactNode }) => <div className={`rounded-lg border p-3 text-sm ${tone === 'warning' ? 'border-amber-200 bg-amber-50 text-amber-900' : 'border-indigo-200 bg-indigo-50 text-indigo-900'}`}>{children}</div>;
export const TrustNote = ({ children }: { children: ReactNode }) => <Notice>{children}</Notice>;
export const WarningNote = ({ children }: { children: ReactNode }) => <Notice tone='warning'>{children}</Notice>;

export const Section = ({ title, children }: { title: string; children: ReactNode }) => <section className='card'><h2 className='font-semibold text-slate-900'>{title}</h2><div className='mt-3'>{children}</div></section>;

export const TableShell = ({ children }: { children: ReactNode }) => <div className='overflow-x-auto rounded-lg border border-slate-200'><table className='w-full min-w-[760px] bg-white text-sm'>{children}</table></div>;

export const EmptyState = ({ title, description }: { title: string; description: string }) => (
  <div className='rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center'>
    <p className='font-medium text-slate-800'>{title}</p>
    <p className='mt-1 text-sm text-slate-600'>{description}</p>
  </div>
);
