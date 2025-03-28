import React, { useState, useEffect } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import AvatarSelection from '@/components/AvatarSelection';
import MeetMentor from '@/components/MeetMentor';
import Scenario from '@/components/Scenario';
import FinalSummary from '@/components/FinalSummary';
import ProgressBar from '@/components/ProgressBar';
import AssessmentTimer from '@/components/AssessmentTimer';
import { SCENARIOS } from '@/lib/data';
import { AvatarOption, ScreenType, UserAnswer } from '@/lib/types';
import { keyframes } from '@/lib/animation';

const Home: React.FC = () => {
  // Force reset for development purposes
  useEffect(() => {
    console.log("Home component mounted - resetting to welcome screen");
  }, []);

  // Initialize state with default values
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('welcome');
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarOption | null>(null);
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, UserAnswer>>({});
  const [currentScenario, setCurrentScenario] = useState(0); // Start with 0 to avoid auto-loading scenario 1
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [timerExpired, setTimerExpired] = useState<boolean>(false);

  // Handle navigation between screens
  const navigateToScreen = (screen: ScreenType) => {
    console.log(`Navigating to screen: ${screen}`);
    setCurrentScreen(screen);
  };

  // Handle avatar selection
  const handleSelectAvatar = (avatar: AvatarOption) => {
    console.log("Avatar selected:", avatar.name);
    setSelectedAvatar(avatar);
    navigateToScreen('meet-mentor');
  };

  // Handle scenario completion
  const handleScenarioComplete = (scenarioId: number, answer: UserAnswer) => {
    console.log(`Scenario ${scenarioId} completed, choice: ${answer.choice}`);
    
    // Save the answer
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [scenarioId]: answer
    }));

    // Update score
    if (answer.points > 0) {
      setScore(prevScore => prevScore + answer.points);
    }

    // Go to next scenario or summary
    if (scenarioId < 8) {
      setCurrentScenario(scenarioId + 1);
    } else {
      // End timer and go to summary when all scenarios are completed
      setShowTimer(false);
      navigateToScreen('final-summary');
    }
  };

  // Handle user wanting to replay
  const handleReplay = () => {
    console.log("Replaying assessment");
    setCurrentScreen('welcome');
    setSelectedAvatar(null);
    setScore(0);
    setAnswers({});
    setCurrentScenario(0);
    setShowTimer(false);
    setTimerExpired(false);
  };

  // After avatar selection, show the mentor screen
  const handleBegin = () => {
    console.log("Beginning assessment");
    navigateToScreen('avatar-selection');
  };

  // After meeting mentor, show first scenario
  const handleMeetMentorContinue = () => {
    console.log("Continuing to first scenario");
    navigateToScreen('scenario-1');
    // Start the timer when the first scenario begins
    setShowTimer(true);
  };
  
  // Handle when timer expires
  const handleTimeUp = () => {
    console.log("Time's up! Marking unanswered questions as wrong and redirecting to final summary");
    
    // Mark all unanswered questions as wrong with 0 points
    const unansweredScenarios = [];
    for (let i = 1; i <= 8; i++) {
      if (!answers[i]) {
        unansweredScenarios.push(i);
      }
    }
    
    // Create default wrong answers for unanswered scenarios
    if (unansweredScenarios.length > 0) {
      console.log(`Marking scenarios ${unansweredScenarios.join(', ')} as unanswered`);
      const updatedAnswers = { ...answers };
      
      // Find the scenarios and add default wrong answers
      unansweredScenarios.forEach(id => {
        const scenario = SCENARIOS.find(s => s.id === id);
        if (scenario) {
          // Use option A as default with 0 points (this preserves the category)
          updatedAnswers[id] = {
            choice: 'Unanswered',
            points: 0,
            category: scenario.choices.A.category
          };
        }
      });
      
      setAnswers(updatedAnswers);
    }
    
    setTimerExpired(true);
    setShowTimer(false);
    navigateToScreen('final-summary');
  };

  // Update currentScreen when currentScenario changes
  useEffect(() => {
    if (currentScenario >= 1 && currentScenario <= 8) {
      console.log(`Setting scenario screen to: scenario-${currentScenario}`);
      navigateToScreen(`scenario-${currentScenario}` as ScreenType);
    }
  }, [currentScenario]);

  // Render the appropriate screen
  const renderCurrentScreen = () => {
    console.log("Rendering screen:", currentScreen);
    
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onBegin={handleBegin} />;
      case 'avatar-selection':
        return <AvatarSelection onSelectAvatar={handleSelectAvatar} />;
      case 'meet-mentor':
        return selectedAvatar ? 
          <MeetMentor selectedAvatar={selectedAvatar} onContinue={handleMeetMentorContinue} /> : 
          null;
      case 'scenario-1':
      case 'scenario-2':
      case 'scenario-3':
      case 'scenario-4':
      case 'scenario-5':
      case 'scenario-6':
      case 'scenario-7':
      case 'scenario-8':
        const scenarioId = parseInt(currentScreen.split('-')[1]);
        const scenario = SCENARIOS.find(s => s.id === scenarioId);
        return scenario ? 
          <Scenario 
            scenario={scenario} 
            onComplete={(answer) => handleScenarioComplete(scenarioId, answer)} 
          /> : 
          null;
      case 'final-summary':
        return <FinalSummary 
          score={score} 
          answers={answers} 
          onReplay={handleReplay} 
          timerExpired={timerExpired}
        />;
      default:
        console.warn("Unknown screen type:", currentScreen);
        return <WelcomeScreen onBegin={handleBegin} />;
    }
  };

  return (
    <>
      <style>{keyframes}</style>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <ProgressBar currentScreen={currentScreen} />
        {renderCurrentScreen()}
        {showTimer && !timerExpired && (
          <AssessmentTimer 
            initialTime={300} // 5 minutes in seconds
            onTimeUp={handleTimeUp} 
          />
        )}
      </div>
    </>
  );
};

export default Home;
