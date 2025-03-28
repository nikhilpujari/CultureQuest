export interface AvatarOption {
  id: number;
  name: string;
  imageSrc: string;
}

export interface ScenarioChoice {
  id: string;
  text: string;
  points: number;
  feedback: string;
  mentorReaction: string;
  category: CategoryType;
}

export type CategoryType = 'collaboration' | 'support' | 'innovation' | 'growth';

export interface Scenario {
  id: number;
  title: string;
  description: string;
  choices: {
    A: ScenarioChoice;
    B: ScenarioChoice;
    C: ScenarioChoice;
  };
}

export interface UserAnswer {
  choice: string;
  points: number;
  category: CategoryType;
}

export interface CategoryScore {
  collaboration: number;
  support: number;
  innovation: number;
  growth: number;
}

export type AlignmentLevel = 'Cultural Champion' | 'Strong Fit' | 'Emerging Fit' | 'Needs Alignment';

export interface AlignmentInfo {
  level: AlignmentLevel;
  colorClass: string;
}

export type ScreenType = 
  | 'welcome' 
  | 'avatar-selection' 
  | 'meet-mentor' 
  | 'scenario-1' 
  | 'scenario-2' 
  | 'scenario-3' 
  | 'scenario-4' 
  | 'scenario-5' 
  | 'scenario-6' 
  | 'scenario-7' 
  | 'scenario-8'
  | 'final-summary';
