import { AvatarOption, Scenario, AlignmentInfo, CategoryType } from "./types";
// Import avatar images
import avatar1Img from '@assets/Avatar1.png';
import avatar2Img from '@assets/Avatar2.png';
import avatar3Img from '@assets/Avatar3.png';
import avatar4Img from '@assets/Avatar4.png';
import avatar5Img from '@assets/Avatar5.png';
import avatar6Img from '@assets/Avatar6.png';
import managerImg from '@assets/manager.png';

export const COMPANY_NAME = "TechVision";

export const AVATARS: AvatarOption[] = [
  {
    id: 1,
    name: "Emily",
    imageSrc: avatar1Img
  },
  {
    id: 2,
    name: "James",
    imageSrc: avatar2Img
  },
  {
    id: 3,
    name: "Daniel",
    imageSrc: avatar3Img
  },
  {
    id: 4,
    name: "Sarah",
    imageSrc: avatar4Img
  },
  {
    id: 5,
    name: "Ryan",
    imageSrc: avatar5Img
  },
  {
    id: 6,
    name: "Michael",
    imageSrc: avatar6Img
  }
];

export const MENTOR_IMAGE = managerImg;

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "Morning Kickoff Meeting",
    description: "It's 9AM: Your team is planning the launch of 'Project Phoenix' by 5PM today. A colleague shares a vague idea about the approach. What do you do?",
    choices: {
      A: {
        id: "A",
        text: "Ask for clarification to understand the idea better.",
        points: 10,
        feedback: "Great! Asking questions ensures clear communication from the start of our tight timeline.",
        mentorReaction: "I like how you're starting the day with good communication. That's exactly what we need to launch by 5PM!",
        category: "collaboration"
      },
      B: {
        id: "B",
        text: "Suggest your own approach instead - we need to move quickly.",
        points: 0,
        feedback: "While speed matters, taking time to understand all ideas creates stronger collaborative results.",
        mentorReaction: "Hmm, your enthusiasm is great, but we might have missed something valuable in your colleague's idea.",
        category: "collaboration"
      },
      C: {
        id: "C",
        text: "Stay quiet - we have a lot to cover in the kickoff.",
        points: 0,
        feedback: "Active participation in planning ensures alignment on our tight deadline day.",
        mentorReaction: "I was hoping you'd jump in there! Your input is valuable, even on day one.",
        category: "collaboration"
      }
    }
  },
  {
    id: 2,
    title: "Mid-Morning Roadblock",
    description: "It's 10:30AM: You notice a teammate struggling with their portion of Project Phoenix. If they fall behind, the whole launch could be delayed. What's your move?",
    choices: {
      A: {
        id: "A",
        text: "Offer to help them work through the challenge together.",
        points: 10,
        feedback: "Awesome! Showing support when teammates hit roadblocks keeps the project on track.",
        mentorReaction: "Now that's teamwork! I noticed you stepping in - that's the kind of support we value here.",
        category: "support"
      },
      B: {
        id: "B",
        text: "Reassign their tasks to someone else - we can't afford delays today.",
        points: 0,
        feedback: "Reassignment might resolve the immediate issue but misses an opportunity to build team resilience.",
        mentorReaction: "Quick decision, but maybe not the best for team morale on a stressful day like today.",
        category: "support"
      },
      C: {
        id: "C",
        text: "Alert the project manager about the potential delay risk.",
        points: 0,
        feedback: "Direct peer support often resolves issues faster than escalation, especially on time-sensitive days.",
        mentorReaction: "Thanks for the heads-up, but I wonder if you could have helped them directly first?",
        category: "support"
      }
    }
  },
  {
    id: 3,
    title: "Lunchtime Blocker",
    description: "It's 12:30PM: The team hits a major technical roadblock that threatens the 5PM launch. You have an unorthodox solution idea. What do you do?",
    choices: {
      A: {
        id: "A",
        text: "Share your unconventional idea and offer to lead its implementation.",
        points: 10,
        feedback: "Bold choice! Creative thinking under pressure is exactly what we need for Project Phoenix.",
        mentorReaction: "I love that out-of-the-box thinking! That's exactly the kind of creative solution we needed.",
        category: "innovation"
      },
      B: {
        id: "B",
        text: "Keep quiet - if it fails, we'd waste precious afternoon hours.",
        points: 0,
        feedback: "On deadline day, calculated risks can be worth taking rather than staying stuck.",
        mentorReaction: "We're still stuck... I wonder if you had an idea that could have helped us?",
        category: "innovation"
      },
      C: {
        id: "C",
        text: "Suggest we revert to a safer, proven approach even if it means cutting features.",
        points: 0,
        feedback: "Innovation often happens under pressure - we value trying new approaches even on tight deadlines.",
        mentorReaction: "Playing it safe might work, but our client was really excited about those features we'd have to cut.",
        category: "innovation"
      }
    }
  },
  {
    id: 4,
    title: "Early Afternoon Check-in",
    description: "It's 2PM: The project lead provides constructive criticism about your morning contributions to Project Phoenix. How do you respond with 3 hours to go?",
    choices: {
      A: {
        id: "A",
        text: "Thank them and ask for specific ways to improve for the final push.",
        points: 10,
        feedback: "Perfect! Using feedback to improve mid-project shows real growth mindset.",
        mentorReaction: "That's the attitude! I'm impressed by how you're using feedback to level up in real-time.",
        category: "growth"
      },
      B: {
        id: "B",
        text: "Explain the reasoning behind your morning decisions.",
        points: 0,
        feedback: "In a time crunch, focusing forward on improvements rather than explaining past decisions keeps momentum.",
        mentorReaction: "I appreciate the explanation, but we're really focused on the next 3 hours now.",
        category: "growth"
      },
      C: {
        id: "C",
        text: "Feel stressed about performing poorly on such an important day.",
        points: 0,
        feedback: "Viewing feedback as a tool rather than a judgment is crucial, especially during high-stakes projects.",
        mentorReaction: "Hey, no need to stress! Everyone's first day is challenging - especially with a big launch.",
        category: "growth"
      }
    }
  },
  {
    id: 5,
    title: "Remote Team Coordination",
    description: "It's 2:45PM: Half the team is working remotely and communication is breaking down with just hours until launch. What's your approach?",
    choices: {
      A: {
        id: "A",
        text: "Suggest an emergency video standup with a structured status format.",
        points: 10,
        feedback: "Excellent! Creating clear communication channels during crunch time prevents last-minute issues.",
        mentorReaction: "That quick standup was genius! Everyone's back on the same page now. Great initiative!",
        category: "collaboration"
      },
      B: {
        id: "B",
        text: "Continue with the existing communication plan - changing now wastes time.",
        points: 0,
        feedback: "Adapting communication approaches when things aren't working shows collaborative flexibility.",
        mentorReaction: "Sticking to the plan is making things worse... we might need to try something different.",
        category: "collaboration"
      },
      C: {
        id: "C",
        text: "Focus on your tasks and let the project manager handle communication issues.",
        points: 0,
        feedback: "Everyone shares responsibility for effective team communication, especially as deadlines approach.",
        mentorReaction: "Communication is everyone's job today - we need all hands on deck to coordinate this launch.",
        category: "collaboration"
      }
    }
  },
  {
    id: 6,
    title: "New Team Member Crisis",
    description: "It's 3:15PM: A developer who joined this week is panicking about completing their critical component before the 5PM deadline. What do you do?",
    choices: {
      A: {
        id: "A",
        text: "Pair program with them to provide guidance while completing the work together.",
        points: 10,
        feedback: "Fantastic! Supporting newer team members during crunch time builds long-term team strength.",
        mentorReaction: "That's exactly how we treat newcomers here! You're already acting like you've been with us for years.",
        category: "support"
      },
      B: {
        id: "B",
        text: "Take over their component - we need experience with the deadline so close.",
        points: 0,
        feedback: "Teaching in real-time creates better outcomes than taking over, even under pressure.",
        mentorReaction: "I know you're trying to help, but they won't learn this way. Maybe there's a more collaborative approach?",
        category: "support"
      },
      C: {
        id: "C",
        text: "Tell them to simplify their approach and just deliver the basics.",
        points: 0,
        feedback: "Direct mentorship in critical moments provides better support than downscaling expectations.",
        mentorReaction: "That component is pretty critical for the launch. I'm not sure simplifying is the answer here.",
        category: "support"
      }
    }
  },
  {
    id: 7,
    title: "Late Afternoon Client Change",
    description: "It's 4PM: With just an hour until launch, the client requests a significant feature change to Project Phoenix. How do you react?",
    choices: {
      A: {
        id: "A",
        text: "Quickly brainstorm a creative way to meet their needs without delaying launch.",
        points: 10,
        feedback: "Perfect! Finding innovative solutions under extreme pressure is a valuable skill.",
        mentorReaction: "Your solution is brilliant! The client is thrilled and we're still on track for 5PM!",
        category: "innovation"
      },
      B: {
        id: "B",
        text: "Push back and explain we need to stick to the original plan for today's deadline.",
        points: 0,
        feedback: "Finding ways to adapt to changing requirements showcases real innovation.",
        mentorReaction: "The client wasn't happy with that response... we might need to find a more flexible approach.",
        category: "innovation"
      },
      C: {
        id: "C",
        text: "Suggest we launch as planned and add their requested changes tomorrow.",
        points: 0,
        feedback: "Creative problem-solving often finds ways to meet both timelines and changing needs.",
        mentorReaction: "That's a reasonable compromise, but I wonder if we could have found a way to include their request today.",
        category: "innovation"
      }
    }
  },
  {
    id: 8,
    title: "Launch Retrospective",
    description: "It's 5:30PM: Project Phoenix launched! In the team retrospective, you're asked what you'll do differently tomorrow. What's your response?",
    choices: {
      A: {
        id: "A",
        text: "Share specific learnings and how you'll apply them to the next deadline day.",
        points: 10,
        feedback: "Excellent! Continuous improvement through reflection is exactly the mindset we value.",
        mentorReaction: "That's the kind of reflection that helps us all grow! What an impressive first day you've had.",
        category: "growth"
      },
      B: {
        id: "B",
        text: "Focus on what went well and suggest we repeat the same approach next time.",
        points: 0,
        feedback: "While celebrating successes matters, identifying growth opportunities drives real improvement.",
        mentorReaction: "Yes, a lot went well, but every project teaches us something new we can improve.",
        category: "growth"
      },
      C: {
        id: "C",
        text: "Mention you're just glad it's over and ready for a less stressful project.",
        points: 0,
        feedback: "Embracing challenges as growth opportunities rather than obstacles is central to our culture.",
        mentorReaction: "Project Phoenix 2.0 is actually next week! We love the energy of tight deadlines around here.",
        category: "growth"
      }
    }
  }
];

export const getAlignmentInfo = (score: number): AlignmentInfo => {
  if (score >= 70) {
    return {
      level: "Cultural Champion",
      colorClass: "bg-green-100 text-green-800"
    };
  } else if (score >= 50) {
    return {
      level: "Strong Fit",
      colorClass: "bg-blue-100 text-blue-800"
    };
  } else if (score >= 30) {
    return {
      level: "Emerging Fit",
      colorClass: "bg-yellow-100 text-yellow-800"
    };
  } else {
    return {
      level: "Needs Alignment",
      colorClass: "bg-red-100 text-red-800"
    };
  }
};

export const formatCategoryName = (category: CategoryType): string => {
  switch(category) {
    case 'collaboration': return 'collaboration';
    case 'support': return 'support';
    case 'innovation': return 'innovation';
    case 'growth': return 'growth mindset';
  }
};

export const getCategoryColors = (category: CategoryType): string => {
  switch(category) {
    case 'collaboration': return 'bg-blue-500';
    case 'support': return 'bg-green-500';
    case 'innovation': return 'bg-purple-500';
    case 'growth': return 'bg-yellow-500';
  }
};
