import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { UserAnswer, CategoryType, CategoryScore } from '@/lib/types';
import { COMPANY_NAME, getAlignmentInfo, formatCategoryName, getCategoryColors } from '@/lib/data';
import { fadeIn } from '@/lib/animation';
import ProgressCircle from '@/components/ui/progress-circle';
import { Award, Calendar, ChevronRight, Clock, Redo, Trophy } from 'lucide-react';

interface FinalSummaryProps {
  score: number;
  answers: Record<number, UserAnswer>;
  onReplay: () => void;
  timerExpired?: boolean;
}

const FinalSummary: React.FC<FinalSummaryProps> = ({ score, answers, onReplay, timerExpired = false }) => {
  const [animateScores, setAnimateScores] = useState(false);
  const alignment = getAlignmentInfo(score);

  // Calculate category scores
  const categoryScores: CategoryScore = {
    collaboration: (answers[1]?.points || 0) + (answers[5]?.points || 0),
    support: (answers[2]?.points || 0) + (answers[6]?.points || 0),
    innovation: (answers[3]?.points || 0) + (answers[7]?.points || 0),
    growth: (answers[4]?.points || 0) + (answers[8]?.points || 0)
  };

  // Generate feedback text
  const generateFeedback = () => {
    const strengths: string[] = [];
    const improvements: string[] = [];

    (Object.entries(categoryScores) as [CategoryType, number][]).forEach(([category, points]) => {
      if (points >= 15) {
        strengths.push(formatCategoryName(category));
      } else {
        improvements.push(formatCategoryName(category));
      }
    });

    if (strengths.length > 0) {
      let feedbackText = `During today's Project Phoenix launch, you demonstrated exceptional `;
      
      if (strengths.length === 1) {
        feedbackText += `${strengths[0]}`;
      } else if (strengths.length === 2) {
        feedbackText += `${strengths[0]} and ${strengths[1]}`;
      } else {
        const lastStrength = strengths.pop();
        feedbackText += `${strengths.join(', ')}, and ${lastStrength}`;
      }
      
      if (improvements.length > 0) {
        feedbackText += `. For your next high-pressure project, focusing on ${improvements.join(' and ')} would help you better align with our team culture.`;
      } else {
        feedbackText += `. Your performance today shows you're a perfect cultural fit for ${COMPANY_NAME}!`;
      }
      
      return feedbackText;
    } else {
      return `While Project Phoenix launched successfully, there's an opportunity to better align with our team culture by focusing on ${improvements.join(', ')} during future high-stakes projects.`;
    }
  };

  // Trigger animations after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateScores(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLearnMore = () => {
    alert(`This would take you to more information about ${COMPANY_NAME}. This is a demo, so no additional page exists.`);
  };

  const handleApply = () => {
    alert(`This would take you to a job application page for ${COMPANY_NAME}. This is a demo, so no application form exists.`);
  };

  return (
    <div className={`${fadeIn} max-w-4xl mx-auto`}>
      <div className="bg-gradient-to-br from-primary/90 to-primary/70 text-white p-6 rounded-t-xl shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-full">
            <Trophy className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold">Project Phoenix Complete</h2>
        </div>
        <div className="flex items-center ml-10 text-white/80">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">5:45 PM</span>
        </div>
      </div>
      
      <Card className="shadow-xl border-t-0 rounded-t-none">
        <CardContent className="p-6 md:p-8">
          {/* Time Expired Banner (if timer expired) */}
          {timerExpired && (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-100 rounded-lg p-4 mb-6 flex items-center">
              <div className="bg-orange-100 rounded-full p-2 mr-4">
                <Clock className="w-5 h-5 text-orange-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-orange-800 mb-1">Time's Up!</h3>
                <p className="text-orange-700">
                  Assessment time (5 minutes) has expired. 
                  {Object.keys(answers).length < 8 
                    ? " Any unanswered questions have been marked as incorrect."
                    : " You completed all scenarios within the time limit."}
                </p>
              </div>
            </div>
          )}
          
          {/* Success Banner */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex items-center">
            <div className="bg-blue-100 rounded-full p-2 mr-4">
              <Award className="w-5 h-5 text-blue-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-800 mb-1">Project Phoenix Successfully Launched!</h3>
              <p className="text-blue-700">Congratulations on completing your first day and delivering the project on time.</p>
            </div>
          </div>
          
          {/* Main Score */}
          <div className="flex flex-col md:flex-row items-center mb-8 gap-8">
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <ProgressCircle 
                  percentage={(score / 80) * 100} 
                  size={180} 
                  strokeWidth={15}
                  color="var(--primary)"
                  backgroundColor="#f3f4f6"
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">{score}</div>
                    <div className="text-gray-500 text-sm">out of 80</div>
                  </div>
                </ProgressCircle>
                
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className={`text-center text-sm font-semibold px-4 py-1 rounded-full shadow-md ${alignment.colorClass}`}>
                    {alignment.level}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Fit Assessment</h3>
              <p className="mb-4">{generateFeedback()}</p>
              <div className="flex items-center text-gray-500 text-sm gap-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>March 27, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Assessment Duration: 8 hours</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Category Breakdown */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4 border-b pb-2">Cultural Alignment by Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Object.entries(categoryScores) as [CategoryType, number][]).map(([category, points]) => {
                const percentage = (points / 20) * 100;
                let performanceLabel = "Needs Improvement";
                if (percentage >= 90) performanceLabel = "Exceptional";
                else if (percentage >= 75) performanceLabel = "Strong";
                else if (percentage >= 60) performanceLabel = "Adequate";
                
                return (
                  <div key={category} className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{formatCategoryName(category).charAt(0).toUpperCase() + formatCategoryName(category).slice(1)}</h4>
                      <div className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">{points}/20</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                      <div 
                        className={`${getCategoryColors(category)} h-2.5 rounded-full transition-all duration-1500 ease-out`} 
                        style={{ width: animateScores ? `${percentage}%` : '0%' }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{performanceLabel}</span>
                      <span>{Math.round(percentage)}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Unanswered Scenarios - Only show if timer expired and there are unanswered scenarios */}
          {timerExpired && Object.keys(answers).length < 8 && (
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4 border-b pb-2">Unanswered Scenarios</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-gray-700 mb-2">The following scenarios were not answered before time expired:</p>
                <ul className="list-disc pl-5 text-gray-600">
                  {Array.from({ length: 8 }, (_, i) => i + 1).map(id => {
                    if (!answers[id] || answers[id].choice === 'Unanswered') {
                      return (
                        <li key={id} className="mb-1">
                          <span className="font-medium">Scenario {id}</span>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center border-t border-gray-100 pt-6">
            <Button 
              variant="outline"
              onClick={onReplay}
              className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold py-6 px-6 rounded-full group"
            >
              <Redo className="w-4 h-4 mr-2 group-hover:animate-spin" />
              Replay Assessment
            </Button>
            <Button 
              onClick={handleLearnMore}
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-6 px-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Learn More About {COMPANY_NAME}
            </Button>
            <Button 
              onClick={handleApply}
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-500 text-white font-semibold py-6 px-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              Apply Now
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinalSummary;
