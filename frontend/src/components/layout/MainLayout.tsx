import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <Header />
      
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-[#0f172a]">
          <div className="max-w-7xl mx-auto p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}