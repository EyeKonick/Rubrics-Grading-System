import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#f1f5f9] mb-4">404</h1>
        <p className="text-[#cbd5e1] mb-6">Page not found</p>
        <Link
          to={ROUTES.DASHBOARD}
          className="px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}