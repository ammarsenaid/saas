import type { ReactNode } from 'react';

export const PageHeader = ({ title, description, action }: { title: string; description: string; action?: ReactNode }) => (
  <div className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'><div><h1 className='text-2xl font-semibold'>{title}</h1><p className='text-sm text-slate-600'>{description}</p></div>{action}</div>
);
export const StatCard = ({ label, value, hint }: { label: string; value: string; hint?: string }) => <div className='card'><p className='text-sm text-slate-500'>{label}</p><p className='mt-1 text-2xl font-semibold'>{value}</p>{hint && <p className='mt-1 text-xs text-slate-500'>{hint}</p>}</div>;
export const StatusBadge = ({ status }: { status: string }) => <span className='badge border border-slate-200 bg-slate-100 text-slate-700'>{status}</span>;
export const Notice = ({ tone='info', children }: { tone?: 'info'|'warning'; children: ReactNode }) => <div className={`rounded-lg border p-3 text-sm ${tone==='warning'?'border-amber-200 bg-amber-50 text-amber-800':'border-indigo-200 bg-indigo-50 text-indigo-800'}`}>{children}</div>;
export const Section = ({ title, children }: { title: string; children: ReactNode }) => <section className='card'><h2 className='font-semibold'>{title}</h2><div className='mt-3'>{children}</div></section>;
