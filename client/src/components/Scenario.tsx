import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Scenario as ScenarioType, UserAnswer } from '@/lib/types';
import { fadeIn, slideIn, getFeedbackStyles } from '@/lib/animation';
import { MENTOR_IMAGE } from '@/lib/data';
import { ChevronRight, Clock, MessageSquare } from 'lucide-react';

// Import scenario images
import scenario1Img from '@assets/scenario1.png';
import scenario2Img from '@assets/scenario2.png';
import scenario3Img from '@assets/scenario3.png';
import scenario4Img from '@assets/scenario4.png';
import scenario5Img from '@assets/scenario5.png';
import scenario6Img from '@assets/scenario6.png';
import scenario7Img from '@assets/scenario7.png';
import scenario8Img from '@assets/scenario8.png';

interface ScenarioProps {
  scenario: ScenarioType;
  onComplete: (answer: UserAnswer) => void;
}

const Scenario: React.FC<ScenarioProps> = ({ scenario, onComplete }) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answer, setAnswer] = useState<UserAnswer | null>(null);

  // Reset state when scenario changes (important for navigation)
  useEffect(() => {
    setSelectedChoice(null);
    setShowFeedback(false);
    setAnswer(null);
    console.log(`Rendering scenario ${scenario.id}, state reset`);
  }, [scenario.id]);

  const handleChoiceClick = (choice: string) => {
    if (selectedChoice) return; // Prevent changing choice after selection
    
    const choiceData = scenario.choices[choice as keyof typeof scenario.choices];
    setSelectedChoice(choice);
    
    // Show feedback after a short delay
    setTimeout(() => {
      setShowFeedback(true);
    }, 300);

    // Create and store user answer object (but don't complete yet)
    setAnswer({
      choice,
      points: choiceData.points,
      category: choiceData.category
    });
  };

  const handleContinue = () => {
    // Only proceed if we have a valid answer
    if (answer) {
      onComplete(answer);
      
      // Reset state (as a safety mechanism in case component doesn't unmount)
      setSelectedChoice(null);
      setShowFeedback(false);
      setAnswer(null);
    }
  };

  const getChoiceData = (choice: string) => {
    return scenario.choices[choice as keyof typeof scenario.choices];
  };
  
  const getScenarioImage = (scenarioId: number) => {
    switch(scenarioId) {
      case 1: return scenario1Img;
      case 2: return scenario2Img;
      case 3: return scenario3Img;
      case 4: return scenario4Img;
      case 5: return scenario5Img;
      case 6: return scenario6Img;
      case 7: return scenario7Img;
      case 8: return scenario8Img;
      default: return scenario1Img;
    }
  };

  // Extract the time based on scenario id
  const getScenarioTime = () => {
    switch(scenario.id) {
      case 1: return "9:00 AM";
      case 2: return "10:30 AM";
      case 3: return "12:30 PM";
      case 4: return "2:00 PM";
      case 5: return "2:45 PM";
      case 6: return "3:15 PM";
      case 7: return "4:00 PM";
      case 8: return "5:30 PM";
      default: return "9:00 AM";
    }
  };

  return (
    <div className={`${fadeIn} max-w-4xl mx-auto`}>
      <div className="bg-gradient-to-br from-primary/90 to-primary/70 text-white p-6 rounded-t-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 py-1 px-2 rounded text-xs font-mono">
              {scenario.id}/8
            </div>
            <h2 className="text-2xl font-bold">{scenario.title}</h2>
          </div>
          <div className="bg-black/20 px-3 py-1 rounded-md text-white/90 flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{getScenarioTime()}</span>
          </div>
        </div>
      </div>
      
      <Card className="shadow-xl border-t-0 rounded-t-none">
        <CardContent className="p-0 overflow-hidden">
          <div className="relative">
            <div className="w-full h-56 md:h-72 overflow-hidden">
              <img 
                src={getScenarioImage(scenario.id)} 
                alt={`Scenario ${scenario.id}`} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-lg md:text-xl font-medium">{scenario.description}</p>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="space-y-3 mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">What will you do?</h3>
              {Object.keys(scenario.choices).map((choice) => {
                const choiceData = getChoiceData(choice);
                return (
                  <button
                    key={choice}
                    onClick={() => handleChoiceClick(choice)}
                    disabled={selectedChoice !== null}
                    className={`w-full text-left p-4 border-2 rounded-lg transition group
                      ${selectedChoice === choice 
                        ? 'border-primary bg-primary/5 shadow-md' 
                        : 'border-gray-200 hover:border-primary hover:shadow'} 
                      ${selectedChoice !== null && selectedChoice !== choice ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center text-sm font-medium
                        ${selectedChoice === choice ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 group-hover:bg-primary/20'}
                      `}>
                        {choice}
                      </div>
                      <span className="text-gray-800">{choiceData.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {selectedChoice && showFeedback && (
              <div className={`${slideIn} mb-8 border-t border-gray-100 pt-5`}>
                <h3 className="text-sm uppercase text-gray-500 tracking-wide mb-4 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" /> 
                  Mentor Feedback
                </h3>
                
                <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden bg-yellow-50 border-2 border-primary/30 shadow-md flex items-center justify-center">
                    <img 
                      src={MENTOR_IMAGE} 
                      alt="Mentor Alex" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 relative flex-1 border border-primary/10">
                    <div className="absolute w-3 h-3 bg-primary/5 border-l border-t border-primary/10 transform rotate-45 -left-1.5 top-4"></div>
                    <p className="text-gray-800">
                      "{getChoiceData(selectedChoice).mentorReaction}"
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <p className="text-gray-500 text-sm">- Alex Johnson, Project Lead</p>
                      <div className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">{getScenarioTime()}</div>
                    </div>
                  </div>
                </div>
                
                <div className={`${getFeedbackStyles(getChoiceData(selectedChoice).points)} mt-5 rounded-lg p-4 border border-l-4`}>
                  {getChoiceData(selectedChoice).feedback}
                </div>
              </div>
            )}
            
            {showFeedback && (
              <div className="text-center pt-4 border-t border-gray-100">
                <Button 
                  onClick={handleContinue}
                  size="lg"
                  className="py-6 px-8 font-semibold rounded-full shadow-lg transition-all group hover:shadow-xl hover:-translate-y-1"
                >
                  <span>{scenario.id === 8 ? 'View Results' : 'Continue to Next Challenge'}</span>
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Scenario;
