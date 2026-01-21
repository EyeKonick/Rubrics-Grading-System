import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export default function Header() {
  return (
    <header className="bg-[#151b35] border-b border-[#1e293b] px-6 py-4 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to={ROUTES.DASHBOARD} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">Rubric Grading System</h1>
            <p className="text-xs text-slate-400">Academic Assessment Tool</p>
          </div>
        </Link>
        
        <div className="flex items-center gap-2 bg-[#1a1f3a] px-3 py-2 rounded-lg">
          <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-semibold">I</span>
          </div>
          <span className="text-sm text-white font-medium">Instructor</span>
        </div>
      </div>
    </header>
  );
}