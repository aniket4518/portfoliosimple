import { useInteraction } from '../contexts/InteractionContext';

const ScrollProgress = () => {
  const { scrollProgress } = useInteraction();

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-neutral-200 dark:bg-neutral-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Scroll Progress Circle (Optional - for modern feel) */}
      <div className="fixed bottom-8 right-8 w-12 h-12 z-40 hidden lg:block">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="stroke-neutral-200 dark:stroke-neutral-700"
            strokeWidth="2"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="stroke-primary-500"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${scrollProgress}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>
    </>
  );
};

export default ScrollProgress;