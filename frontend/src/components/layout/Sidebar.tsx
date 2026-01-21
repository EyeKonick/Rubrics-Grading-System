import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export default function Sidebar() {
  const navItems = [
    { path: ROUTES.DASHBOARD, label: 'Dashboard', icon: '📊' },
    { path: ROUTES.CREATE_PROJECT, label: 'Create Project', icon: '➕' },
  ];

  return (
    <aside className="w-64 bg-[#1e293b] border-r border-[#475569] flex-shrink-0 overflow-y-auto">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#334155] text-[#f1f5f9]'
                  : 'text-[#cbd5e1] hover:bg-[#334155]'
              }`
            }
          >
            <span className="text-xl flex-shrink-0">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}