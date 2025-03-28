import { cn } from "./utils";

export const fadeIn = "animate-[fadeIn_0.5s_ease-in]";
export const slideIn = "animate-[slideIn_0.5s_ease-out]";

export const keyframes = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes slideIn {
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
`;

export const getFeedbackStyles = (points: number): string => {
  // More nuanced feedback styles based on point values
  if (points >= 8) {
    // Excellent choice
    return cn("border-green-500 bg-green-50 text-green-800");
  } else if (points >= 5) {
    // Good choice
    return cn("border-teal-500 bg-teal-50 text-teal-800");
  } else if (points >= 1) {
    // Acceptable choice
    return cn("border-blue-500 bg-blue-50 text-blue-800");
  } else if (points === 0) {
    // Neutral choice
    return cn("border-gray-400 bg-gray-50 text-gray-800");
  } else {
    // Poor choice
    return cn("border-amber-500 bg-amber-50 text-amber-800");
  }
};
