import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavItem } from '../../lib/constants/app';

function StatusBadge({ children, tone = 'muted' }: { children: ReactNode; tone?: 'muted' | 'success' | 'warning' | 'danger' }) {
  const map = {
    muted: 'bg-slate-100 text-slate-700 border-slate-200',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    danger: 'bg-rose-50 text-rose-700 border-rose-200',
  };
  return <span className={`badge border ${map[tone]}`}>{children}</span>;
}

export function Shell({ title, nav, role, children }: { title: string; nav: NavItem[]; role: string; children: ReactNode }) {
  const location = useLocation();
  return (
    <div className='min-h-screen bg-slate-100 text-slate-900 lg:grid lg:grid-cols-[260px_1fr]'>
      <aside className='hidden border-r border-slate-200 bg-white lg:block'>
        <div className='sticky top-0 p-5'>
          <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>Mitarbeiterportal</p>
          <h1 className='mt-1 text-xl font-semibold text-indigo-700'>{title}</h1>
          <div className='mt-3'><StatusBadge>{role}</StatusBadge></div>
          <nav className='mt-6 space-y-1'>
            {nav.map(([to, label]) => {
              const active = location.pathname === to;
              return (
                <Link key={to} to={to} className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${active ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-100'}`}>
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      <main className='min-w-0'>
        <header className='sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur'>
          <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6'>
            <div>
              <p className='text-sm text-slate-500 lg:hidden'>{title}</p>
              <h2 className='text-base font-semibold sm:text-lg'>Einfaches Mitarbeiterportal</h2>
            </div>
            <div className='flex items-center gap-2 text-xs sm:text-sm'>
              <StatusBadge tone='muted'>DE</StatusBadge>
              <StatusBadge tone='success'>Muster GmbH · Erika Mustermann</StatusBadge>
            </div>
          </div>
          <div className='overflow-x-auto border-t border-slate-200 px-2 py-2 lg:hidden'>
            <div className='flex gap-2'>
              {nav.map(([to, label]) => (
                <Link key={to} to={to} className={`whitespace-nowrap rounded-md px-3 py-2 text-xs ${location.pathname === to ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </header>
        <div className='mx-auto w-full max-w-7xl p-4 sm:p-6'>{children}</div>
      </main>
    </div>
  );
}
