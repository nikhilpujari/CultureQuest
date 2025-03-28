import React from 'react';
import { ScreenType } from '@/lib/types';
import { CheckCircle2, Clock } from 'lucide-react';

interface ProgressBarProps {
  currentScreen: ScreenType;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentScreen }) => {
  // Map screens to progress steps with time info
  const screenToStep: Record<string, { step: number; progress: string, time: string, title: string }> = {
    "avatar-selection": { step: 1, progress: "1/10", time: "8:45 AM", title: "Getting Started" },
    "meet-mentor": { step: 2, progress: "2/10", time: "8:55 AM", title: "Meet Your Mentor" },
    "scenario-1": { step: 3, progress: "3/10", time: "9:00 AM", title: "Morning Kickoff" },
    "scenario-2": { step: 4, progress: "4/10", time: "10:30 AM", title: "Team Coordination" },
    "scenario-3": { step: 5, progress: "5/10", time: "12:30 PM", title: "Lunch Discussion" },
    "scenario-4": { step: 6, progress: "6/10", time: "2:00 PM", title: "Technical Challenge" },
    "scenario-5": { step: 7, progress: "7/10", time: "2:45 PM", title: "Client Feedback" },
    "scenario-6": { step: 8, progress: "8/10", time: "3:15 PM", title: "Resource Allocation" },
    "scenario-7": { step: 9, progress: "9/10", time: "4:00 PM", title: "Launch Preparation" },
    "scenario-8": { step: 10, progress: "10/10", time: "5:30 PM", title: "Project Retrospective" },
    "final-summary": { step: 10, progress: "Complete", time: "5:45 PM", title: "Assessment Results" }
  };

  // Don't show progress bar on welcome screen
  if (currentScreen === 'welcome') {
    return null;
  }

  const { step, progress, time, title } = screenToStep[currentScreen] || { step: 0, progress: "0/10", time: "", title: "" };
  const percentage = (step / 10) * 100;

  // For the timeline markers, determine which steps are completed
  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-900">{time}</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium text-gray-700">{title}</span>
        </div>
        <div className="bg-primary/10 px-3 py-1 rounded-full">
          <span className="text-xs font-medium text-primary">{progress}</span>
        </div>
      </div>
      
      {/* Main progress bar */}
      <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      {/* Timeline markers */}
      <div className="flex justify-between items-center px-1">
        {steps.map((stepNumber) => (
          <div key={stepNumber} className="flex flex-col items-center">
            {stepNumber <= step ? (
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            ) : (
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 bg-white"></div>
            )}
            <span className="text-[10px] text-gray-500 mt-1">{stepNumber}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
