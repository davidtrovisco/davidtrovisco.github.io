// Badge.tsx
import React from 'react';

interface BadgeProps {
  text: string;
  backgroundColor: string;
  textColor: string;
}

const Badge: React.FC<BadgeProps> = ({ text, backgroundColor, textColor }) => {
  return (
    <div
      className={`rounded-md px-2 py-1 text-xs font-semibold ${backgroundColor} ${textColor}`}
    >
      {text}
    </div>
  );
};

export default Badge;
