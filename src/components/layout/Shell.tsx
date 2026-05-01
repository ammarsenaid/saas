import { Link } from 'react-router-dom';
export function Shell({title, nav, children}:{title:string; nav:[string,string][]; children:React.ReactNode}){
 return <div className='min-h-screen md:grid md:grid-cols-[240px_1fr]'>
  <aside className='border-r bg-white p-4'><h1 className='font-semibold text-brand mb-3'>{title}</h1><nav className='space-y-1'>{nav.map(([to,l])=><Link key={to} className='block rounded px-2 py-1 hover:bg-slate-100' to={to}>{l}</Link>)}</nav></aside>
  <main><header className='border-b bg-white p-3'>Deutschland-first HR & Zeit</header><div className='p-4'>{children}</div></main></div>
}
