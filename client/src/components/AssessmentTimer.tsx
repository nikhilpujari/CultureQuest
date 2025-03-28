import React, { useState, useEffect } from 'react';
import { AlarmClock } from 'lucide-react';

interface AssessmentTimerProps {
  initialTime: number; // time in seconds
  onTimeUp: () => void;
}

const AssessmentTimer: React.FC<AssessmentTimerProps> = ({ initialTime, onTimeUp }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    let timerId: number | undefined;

    if (timeRemaining > 0) {
      timerId = window.setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      onTimeUp();
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timeRemaining, onTimeUp]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Calculate color based on time remaining
  const getTimerColor = (): string => {
    if (timeRemaining > initialTime / 2) return 'text-green-500';
    if (timeRemaining > initialTime / 4) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 shadow-md rounded-lg p-3 flex items-center space-x-2 z-50">
      <AlarmClock className={`${getTimerColor()} h-5 w-5`} />
      <div className={`font-bold ${getTimerColor()}`}>
        {formatTime(timeRemaining)}
      </div>
    </div>
  );
};

export default AssessmentTimer;