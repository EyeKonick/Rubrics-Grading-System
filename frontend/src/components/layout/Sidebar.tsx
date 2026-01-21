import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#151b35] border-r border-[#1e293b] flex-shrink-0 p-4">
      <nav className="space-y-2">
        <NavLink
          to={ROUTES.DASHBOARD}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:bg-[#1a1f3a]'
            }`
          }
        >
          <span className="text-xl">📊</span>
          <span className="font-medium">Dashboard</span>
        </NavLink>

        <NavLink
          to={ROUTES.CREATE_PROJECT}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:bg-[#1a1f3a]'
            }`
          }
        >
          <span className="text-xl">➕</span>
          <span className="font-medium">Create Project</span>
        </NavLink>

        <div className="pt-4 mt-4 border-t border-[#1e293b]">
          <p className="px-4 text-xs font-semibold text-slate-500 uppercase mb-2">
            Coming Soon
          </p>
          <div className="space-y-1">
            <div className="flex items-center gap-3 px-4 py-2 text-slate-500 text-sm">
              <span className="text-lg">📈</span>
              <span>Analytics</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 text-slate-500 text-sm">
              <span className="text-lg">📤</span>
              <span>Export</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}