import { Sidebar } from "../ui/dashboard/Sidebar";

interface DashboarLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboarLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
