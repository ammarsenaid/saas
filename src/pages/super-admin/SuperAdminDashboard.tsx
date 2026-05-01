import { PageHeader, StatCard } from '../../components/ui/primitives';

export const SuperAdminDashboard = () => <div className='space-y-4'><PageHeader title='Super Admin Dashboard' description='Mandantenverwaltung und System-Administration folgen später.'/><div className='grid gap-4 md:grid-cols-3'><StatCard label='Mandanten' value='12'/><StatCard label='Systemstatus' value='Stabil'/><StatCard label='Abrechnung' value='Platzhalter'/></div></div>;
