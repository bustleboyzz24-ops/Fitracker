import { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Checklist() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Morning jog - 20 min', done: false },
    { id: 2, text: 'Drink 3L water', done: false },
    { id: 3, text: 'Eat balanced meals', done: false },
    { id: 4, text: 'Workout (30-45 min)', done: false },
    { id: 5, text: 'Stretch & recovery', done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  const saveChecklist = () => {
    alert('Checklist saved (demo)');
  };

  return (
    <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-7 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-3" style={{ color: '#ff8c42' }}>
          Daily Checklist
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Complete items and save your checklist.
        </p>
        <ul className="flex flex-col gap-2 list-none mb-3">
          {tasks.map(task => (
            <li
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`rounded-lg p-2.5 cursor-pointer flex justify-between items-center hover-elevate active-elevate-2 ${
                task.done ? 'opacity-60 line-through' : ''
              }`}
              style={{
                background: 'rgba(255,255,255,0.03)',
              }}
              data-testid={`task-${task.id}`}
            >
              <span className="text-muted-foreground">{task.text}</span>
              {task.done && <Check className="w-4 h-4 text-primary" />}
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          onClick={saveChecklist}
          className="border-white/10"
          data-testid="button-save-checklist"
        >
          Save checklist
        </Button>
      </div>
      <aside>
        <GlassCard>
          <h3 className="text-primary font-semibold mb-2">Streaks</h3>
          <p className="text-muted-foreground leading-relaxed">
            Keep a 7-day streak for habit reinforcement.
          </p>
        </GlassCard>
      </aside>
    </div>
  );
}
