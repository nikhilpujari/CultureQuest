import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AVATARS } from '@/lib/data';
import { AvatarOption } from '@/lib/types';
import { fadeIn } from '@/lib/animation';
import { Check, ChevronRight, UserCircle } from 'lucide-react';

interface AvatarSelectionProps {
  onSelectAvatar: (avatar: AvatarOption) => void;
}

const AvatarSelection: React.FC<AvatarSelectionProps> = ({ onSelectAvatar }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarOption | null>(null);

  const handleAvatarClick = (avatar: AvatarOption) => {
    setSelectedAvatar(avatar);
  };

  const handleNext = () => {
    if (selectedAvatar) {
      onSelectAvatar(selectedAvatar);
    }
  };

  return (
    <div className={`${fadeIn} max-w-4xl mx-auto`}>
      <div className="bg-gradient-to-br from-primary/90 to-primary/70 text-white p-6 rounded-t-xl shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-full">
            <UserCircle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold">Choose Your Character</h2>
        </div>
        <p className="text-white/90 ml-10">Select the avatar that best represents you</p>
      </div>
      
      <Card className="shadow-xl border-t-0 rounded-t-none">
        <CardContent className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {AVATARS.map((avatar) => (
              <div 
                key={avatar.id}
                className={`cursor-pointer transition rounded-xl p-4 hover:shadow-md 
                  ${selectedAvatar?.id === avatar.id 
                    ? 'border-2 border-primary bg-primary/5 shadow-md transform scale-105' 
                    : 'border border-gray-100 hover:border-primary/30'
                  }`}
                onClick={() => handleAvatarClick(avatar)}
              >
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto overflow-hidden rounded-full bg-yellow-50 flex items-center justify-center 
                    shadow-inner border-4 border-white">
                    <img 
                      src={avatar.imageSrc} 
                      alt={`Avatar option ${avatar.name}`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {selectedAvatar?.id === avatar.id && (
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-1 shadow-lg border-2 border-white">
                      <Check className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <p className="font-medium text-gray-800">{avatar.name}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {avatar.id % 2 === 0 ? 'Creative Thinker' : 'Problem Solver'}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button 
              onClick={handleNext}
              disabled={!selectedAvatar}
              size="lg"
              className={`py-6 px-8 font-semibold rounded-full shadow-lg transition-all group
                ${!selectedAvatar 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:shadow-xl hover:-translate-y-1'
                }`}
            >
              <span>Continue to Orientation</span>
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AvatarSelection;
