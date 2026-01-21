export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Dashboard</h1>
        <p className="text-slate-400">Welcome back! Here's your grading overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[#151b35] border border-[#1e293b] rounded-xl p-6 hover:border-blue-600 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-2xl">
              📁
            </div>
            <div>
              <div className="text-2xl font-bold text-white">0</div>
              <div className="text-sm text-slate-400">Total Projects</div>
            </div>
          </div>
        </div>

        <div className="bg-[#151b35] border border-[#1e293b] rounded-xl p-6 hover:border-green-600 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-2xl">
              ✅
            </div>
            <div>
              <div className="text-2xl font-bold text-white">0</div>
              <div className="text-sm text-slate-400">Completed</div>
            </div>
          </div>
        </div>

        <div className="bg-[#151b35] border border-[#1e293b] rounded-xl p-6 hover:border-purple-600 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl">
              👥
            </div>
            <div>
              <div className="text-2xl font-bold text-white">0</div>
              <div className="text-sm text-slate-400">Students Graded</div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="bg-[#151b35] border border-[#1e293b] rounded-xl p-8">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-4xl flex-shrink-0">
            👋
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-2">
              Ready to Start Grading?
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Create your first project to begin setting up rubrics and importing students. 
              The system will guide you through each step.
            </p>
            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Create Your First Project →
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#151b35] border border-[#1e293b] rounded-xl p-6 hover:border-blue-600 transition-colors cursor-pointer">
            <div className="text-3xl mb-3">📋</div>
            <h4 className="font-semibold text-white mb-1">Browse Templates</h4>
            <p className="text-sm text-slate-400">Start with pre-built rubric templates</p>
          </div>
          <div className="bg-[#151b35] border border-[#1e293b] rounded-xl p-6 hover:border-blue-600 transition-colors cursor-pointer">
            <div className="text-3xl mb-3">📚</div>
            <h4 className="font-semibold text-white mb-1">View Guide</h4>
            <p className="text-sm text-slate-400">Learn how to use the grading system</p>
          </div>
        </div>
      </div>
    </div>
  );
}