import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { COMPANY_NAME } from '@/lib/data';
import { fadeIn } from '@/lib/animation';
import { Clock, Rocket, Target, Zap } from 'lucide-react';

interface WelcomeScreenProps {
  onBegin: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onBegin }) => {
  return (
    <div className={`${fadeIn} max-w-4xl mx-auto`}>
      <div className="bg-gradient-to-br from-primary/90 to-primary/70 text-white p-8 rounded-t-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">
            <span className="block text-sm uppercase tracking-widest mb-1 opacity-80">Welcome to</span>
            {COMPANY_NAME}
          </h1>
          <div className="text-right">
            <div className="text-sm uppercase tracking-wider opacity-80">First Day Assessment</div>
            <div className="font-mono bg-black/20 px-3 py-1 rounded-md mt-1 text-white/90">Project Phoenix</div>
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 mb-6 flex items-center">
          <div className="mr-4 bg-white/20 p-2 rounded-full">
            <Rocket className="w-6 h-6" />
          </div>
          <div>
            <p className="font-semibold text-lg">URGENT: Launch Day!</p>
            <p className="text-white/90">Our biggest client's project needs to be completed by 5PM today</p>
          </div>
        </div>
      </div>
      
      <Card className="shadow-xl border-t-0 rounded-t-none">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">8-Hour Challenge</h3>
              <p className="text-gray-600 text-sm">Navigate from morning kickoff to final launch in one day</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">High-Stakes Decisions</h3>
              <p className="text-gray-600 text-sm">Your choices under pressure reveal your workplace style</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Cultural Fit Analysis</h3>
              <p className="text-gray-600 text-sm">Discover how your approach aligns with our values</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={onBegin}
              size="lg" 
              className="py-6 px-10 font-semibold text-lg rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Start Your First Day
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
