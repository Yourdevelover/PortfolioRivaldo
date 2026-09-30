export default function FishLoading() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 opacity-30">
        <div className="w-8 h-8 border-2 border-sky-400/30 border-t-sky-400 rounded-full animate-spin" />
        <span className="text-xs text-sky-400/50 tracking-widest uppercase">Loading</span>
      </div>
    </div>
  );
}
