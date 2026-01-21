import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export default function Header() {
  return (
    <header className="bg-[#1e293b] border-b border-[#475569] px-6 py-4 flex-shrink-0">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        <Link to={ROUTES.DASHBOARD} className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <h1 className="text-xl font-semibold text-[#f1f5f9] whitespace-nowrap">
            Rubric Grading System
          </h1>
        </Link>
        
        <div className="text-sm text-[#cbd5e1] whitespace-nowrap">
          Instructor Dashboard
        </div>
      </div>
    </header>
  );
}