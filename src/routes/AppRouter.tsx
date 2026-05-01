import type { ReactNode } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Shell } from '../components/layout/Shell';
import { ADMIN_NAV, EMPLOYEE_NAV, SUPER_ADMIN_NAV } from '../lib/constants/app';
import { EmployeeDashboard, MyHoursPage, PayslipsPage, ProfilePage, SickLeavePage, TimeClockPage, VacationPage } from '../pages/employee/EmployeePages';
import { AdminDashboard, AuditLogsPage, CompanySettingsPage, EmployeesPage, LeaveRequestsPage, PayslipUploadPage, SickReportsPage, TimeRecordsPage } from '../pages/admin/AdminPages';
import { SuperAdminDashboard } from '../pages/super-admin/SuperAdminDashboard';
import { LoginPage } from '../pages/public/LoginPage';

const rolePreview: 'Employee' | 'Admin' | 'SuperAdmin' = 'Employee';
const Emp = ({ children }: { children: ReactNode }) => <Shell title='Mitarbeiterportal' nav={EMPLOYEE_NAV} role='Mitarbeiterbereich'>{children}</Shell>;
const Adm = ({ children }: { children: ReactNode }) => <Shell title='Adminbereich' nav={ADMIN_NAV} role='Adminbereich'>{children}</Shell>;
const Sup = () => <Shell title='Super Admin' nav={SUPER_ADMIN_NAV} role='Systembetreiber'><SuperAdminDashboard /></Shell>;

export function AppRouter() { return <BrowserRouter><Routes>
  <Route path='/login' element={<LoginPage />} />
  <Route path='/' element={<Navigate to={rolePreview === 'Admin' ? '/admin' : rolePreview === 'SuperAdmin' ? '/super-admin' : '/app'} />} />
  <Route path='/app' element={<Emp><EmployeeDashboard /></Emp>} />
  <Route path='/app/time-clock' element={<Emp><TimeClockPage /></Emp>} />
  <Route path='/app/my-hours' element={<Emp><MyHoursPage /></Emp>} />
  <Route path='/app/payslips' element={<Emp><PayslipsPage /></Emp>} />
  <Route path='/app/vacation' element={<Emp><VacationPage /></Emp>} />
  <Route path='/app/sick-leave' element={<Emp><SickLeavePage /></Emp>} />
  <Route path='/app/profile' element={<Emp><ProfilePage /></Emp>} />
  <Route path='/admin' element={<Adm><AdminDashboard /></Adm>} />
  <Route path='/admin/employees' element={<Adm><EmployeesPage /></Adm>} />
  <Route path='/admin/time-records' element={<Adm><TimeRecordsPage /></Adm>} />
  <Route path='/admin/leave-requests' element={<Adm><LeaveRequestsPage /></Adm>} />
  <Route path='/admin/sick-reports' element={<Adm><SickReportsPage /></Adm>} />
  <Route path='/admin/payslip-upload' element={<Adm><PayslipUploadPage /></Adm>} />
  <Route path='/admin/company-settings' element={<Adm><CompanySettingsPage /></Adm>} />
  <Route path='/admin/audit-logs' element={<Adm><AuditLogsPage /></Adm>} />
  <Route path='/super-admin' element={<Sup />} />
</Routes></BrowserRouter>; }
