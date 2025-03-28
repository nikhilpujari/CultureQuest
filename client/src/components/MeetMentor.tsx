import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { COMPANY_NAME, MENTOR_IMAGE } from '@/lib/data';
import { AvatarOption } from '@/lib/types';
import { fadeIn } from '@/lib/animation';
import { ChevronRight, Clock, MessageSquare } from 'lucide-react';

interface MeetMentorProps {
  selectedAvatar: AvatarOption;
  onContinue: () => void;
}

const MeetMentor: React.FC<MeetMentorProps> = ({ selectedAvatar, onContinue }) => {
  return (
    <div className={`${fadeIn} max-w-4xl mx-auto`}>
      <div className="bg-gradient-to-br from-primary/90 to-primary/70 text-white p-6 rounded-t-xl shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-full">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold">Meet Your Mentor</h2>
        </div>
        <div className="flex items-center ml-10 text-white/80">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">8:55 AM</span>
        </div>
      </div>
      
      <Card className="shadow-xl border-t-0 rounded-t-none">
        <CardContent className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div className="md:col-span-2 flex flex-col items-center">
              <div className="w-32 h-32 md:w-44 md:h-44 flex-shrink-0 rounded-full overflow-hidden bg-yellow-50 
                border-4 border-primary/20 shadow-xl flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 rounded-full"></div>
                <img 
                  src={MENTOR_IMAGE} 
                  alt="Mentor Alex" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="text-center mt-4">
                <div className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">Team Lead</div>
                <h3 className="text-xl font-bold text-gray-900">Alex Johnson</h3>
                <p className="text-gray-500 text-sm">5 years at {COMPANY_NAME}</p>
              </div>
            </div>
            
            <div className="md:col-span-3 flex flex-col">
              <div className="flex items-center mb-3">
                <div className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                  <img 
                    src={selectedAvatar.imageSrc} 
                    alt={selectedAvatar.name} 
                    className="w-7 h-7 rounded-full object-contain"
                  />
                </div>
                <span className="text-sm text-gray-500">{selectedAvatar.name} (You)</span>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 relative self-start max-w-xs animate-[slideIn_0.5s_ease-out]">
                <p className="text-sm text-gray-700">
                  Hi Alex, excited for my first day! What's our plan?
                </p>
                <span className="text-xs text-gray-400 block text-right mt-1">8:55 AM</span>
              </div>
              
              <div className="flex items-center self-end mt-3 mb-2">
                <span className="text-sm text-gray-500 mr-2">Alex Johnson</span>
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
                  <img 
                    src={MENTOR_IMAGE} 
                    alt="Mentor Alex" 
                    className="w-7 h-7 rounded-full object-contain"
                  />
                </div>
              </div>
              
              <div className="bg-primary/10 text-gray-800 rounded-lg p-4 relative self-end max-w-md animate-[slideIn_0.7s_ease-out]">
                <p className="text-sm mb-2">
                  <span className="font-semibold">Hi {selectedAvatar.name}!</span> Welcome to Project Phoenix! 🚀
                </p>
                <p className="text-sm mb-2">
                  We have just 8 hours to complete and launch this project for our biggest client. Today will be intense but rewarding!
                </p>
                <p className="text-sm">
                  As your mentor, I'll guide you through your first day at {COMPANY_NAME}. Your decisions today will show us how you align with our company culture.
                </p>
                <span className="text-xs text-gray-500 block text-right mt-1">8:56 AM</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-6 mt-2">
            <div className="flex justify-between items-center">
              <div className="bg-amber-50 border-l-4 border-amber-400 pl-3 pr-4 py-2">
                <p className="text-amber-800 text-sm font-medium">The morning kickoff meeting starts in 4 minutes!</p>
              </div>
              
              <Button 
                onClick={onContinue}
                size="lg"
                className="py-6 px-8 font-semibold rounded-full shadow-lg transition-all group hover:shadow-xl hover:-translate-y-1"
              >
                <span>Let's Get Started</span>
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MeetMentor;
