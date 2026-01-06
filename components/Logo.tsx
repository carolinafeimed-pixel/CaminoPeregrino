
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 90C45 80 30 65 20 50C10 35 15 20 25 15C35 10 45 20 50 30C55 20 65 10 75 15C85 20 90 35 80 50C70 65 55 80 50 90Z" transform="scale(1.1) translate(-5, -5)" />
      <path d="M50 90C50 80 40 65 30 50C20 35 25 20 35 15C45 10 50 20 50 30Z" transform="scale(1.1) translate(-5, -5)" />
      <path d="M50 90C50 80 60 65 70 50C80 35 75 20 65 15C55 10 50 20 50 30Z" transform="scale(1.1) translate(-5, -5)" />
      <path d="M50 90L40 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 90L60 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 90L50 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
       <path d="M50 90L30 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
       <path d="M50 90L70 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};

export default Logo;
