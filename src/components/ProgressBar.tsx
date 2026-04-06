interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const safeTotal = total || 1;
  const percent = Math.min(100, Math.max(0, Math.round((current / safeTotal) * 100)));

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm text-slate-600">
        <span>Practice progress</span>
        <span>
          {current}/{total}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
};
