import React from 'react';

interface AppIconProps {
  className?: string;
  size?: number;
}

export const AppIcon: React.FC<AppIconProps> = ({ className = 'w-6 h-6', size }) => {
  const style = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Kaay Jang Icon"
    >
      <defs>
        <linearGradient id="appIconBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id="appIconGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <filter id="appIconShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Rounded squircle background */}
      <rect width="512" height="512" rx="112" fill="url(#appIconBg)" />
      <rect x="4" y="4" width="504" height="504" rx="108" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />

      {/* Senegal Ribbon */}
      <g transform="translate(186, 55)">
        <rect x="0" y="0" width="44" height="12" rx="6" fill="#10B981" />
        <rect x="48" y="0" width="44" height="12" rx="6" fill="#FBBF24" />
        <rect x="96" y="0" width="44" height="12" rx="6" fill="#EF4444" />
      </g>

      {/* Graduation Cap */}
      <g filter="url(#appIconShadow)" transform="translate(256, 175)">
        <polygon points="0,-65 145,-15 0,35 -145,-15" fill="#FFFFFF" />
        <polygon points="0,-55 130,-15 0,25 -130,-15" fill="url(#appIconGold)" />
        <path d="M-80,0 Q0,45 80,0 L80,30 Q0,75 -80,30 Z" fill="#1E293B" />
        <circle cx="0" cy="-15" r="9" fill="#F59E0B" />
        <path d="M0,-15 Q90,-5 110,40" fill="none" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
        <polygon points="106,38 114,38 118,65 102,65" fill="#F59E0B" />
      </g>

      {/* Open Book */}
      <g filter="url(#appIconShadow)" transform="translate(256, 320)">
        <path d="M-130,-40 Q-65,-25 0,-10 Q65,-25 130,-40 L130,50 Q65,65 0,80 Q-65,65 -130,50 Z" fill="#0F172A" opacity="0.4" />
        <path d="M-125,-45 Q-65,-30 0,-15 L0,75 Q-65,60 -125,45 Z" fill="#FFFFFF" />
        <line x1="-105" y1="-15" x2="-20" y2="-5" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round" />
        <line x1="-105" y1="10" x2="-20" y2="20" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round" />
        <line x1="-105" y1="35" x2="-45" y2="42" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round" />

        <path d="M125,-45 Q65,-30 0,-15 L0,75 Q65,60 125,45 Z" fill="#F8FAFC" />
        <line x1="20" y1="-5" x2="105" y2="-15" stroke="#93C5FD" strokeWidth="5" strokeLinecap="round" />
        <line x1="20" y1="20" x2="105" y2="10" stroke="#93C5FD" strokeWidth="5" strokeLinecap="round" />
        <line x1="20" y1="42" x2="75" y2="35" stroke="#93C5FD" strokeWidth="5" strokeLinecap="round" />

        <line x1="0" y1="-15" x2="0" y2="75" stroke="#94A3B8" strokeWidth="4" />
      </g>

      <text x="256" y="445" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="42" fill="#FFFFFF" textAnchor="middle" letterSpacing="2">
        KAAY JANG
      </text>
      <text x="256" y="480" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="20" fill="#93C5FD" textAnchor="middle" letterSpacing="4">
        🇸🇳 SÉNÉGAL
      </text>
    </svg>
  );
};
