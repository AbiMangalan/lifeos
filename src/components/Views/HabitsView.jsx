import { Calendar } from 'lucide-react';
import PhaseNavigation from '../Dashboard/PhaseNavigation';
import { getAllCombinedWeeks } from '../../utils/trackMerger';
import { generateHabitId } from '../../utils/idGenerator';

const EXTRA_HABITS = [
  { id: 'meditation', label: 'Meditation', icon: '🧘' },
  { id: 'affirmation', label: 'Affirmation', icon: '✨' },
  { id: 'exercise', label: 'Exercise', icon: '🏃' }
];

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function HabitsView({ state, setState, completedItems, toggleHabit }) {
  const activePhase = state.phase;
  
  const setActivePhase = (newPhase) => {
    setState({ phase: newPhase });
  };
  
  // Filter weeks for the active phase
  const allWeeks = getAllCombinedWeeks();
  const phaseWeeks = allWeeks.filter(w => {
    const weekNum = w.gtme?.weekNumber || w.swe?.weekNumber;
    return Math.ceil(weekNum / 4) === (activePhase + 1);
  });

  return (
    <div className="space-y-6">
      <PhaseNavigation 
        activePhase={activePhase} 
        setActivePhase={setActivePhase} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {phaseWeeks.map((week) => {
          const weekNumber = week.gtme?.weekNumber || week.swe?.weekNumber;
          const title = week.gtme?.title || week.swe?.title;

          return (
            <div key={weekNumber} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 px-5 py-4">
                <h3 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                  <Calendar size={16} className="text-indigo-400" />
                  Week {weekNumber}: {title}
                </h3>
              </div>

              <div className="p-2">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest w-24">Day</th>
                      <th className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Habits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DAYS_OF_WEEK.map((dayName) => (
                      <tr key={dayName} className="group">
                        <td className="px-4 py-3 align-middle border-l-4 border-transparent group-hover:border-indigo-400 transition-all bg-slate-50/50 rounded-l-xl">
                          <span className="text-xs font-bold text-slate-600">{dayName}</span>
                        </td>
                        <td className="px-4 py-3 align-middle bg-slate-50/50 rounded-r-xl">
                          <div className="flex justify-center gap-3">
                            {EXTRA_HABITS.map((habit) => {
                              const id = generateHabitId(weekNumber, dayName, habit.id);
                              const isCompleted = !!completedItems[id];

                              return (
                                <button 
                                  key={habit.id}
                                  onClick={() => toggleHabit(weekNumber, dayName, habit.id)}
                                  title={habit.label}
                                  className={`flex flex-col items-center gap-1 p-2 rounded-lg border transition-all w-16
                                    ${isCompleted 
                                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm' 
                                      : 'bg-white border-slate-100 text-slate-400 hover:border-indigo-200 hover:text-indigo-600'
                                    }`}
                                >
                                  <div className={`text-lg transition-transform ${isCompleted ? 'scale-110' : 'grayscale opacity-50'}`}>
                                    {habit.icon}
                                  </div>
                                  <span className={`text-[8px] font-black uppercase tracking-tighter ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`}>
                                    {habit.id}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
