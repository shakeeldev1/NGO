import React, { memo, useMemo } from 'react';
import GlobalCTA from '../ui/GlobalCTA';

const HomeCTA = () => {
  // Memoize CTA props to ensure stable reference across parent re-renders
  const ctaProps = useMemo(
    () => ({
      title: 'Join us in empowering',
      highlightText: 'communities today',
      subtitle:
        'Support USWA in delivering essential advocacy, education, and healthcare initiatives without discrimination across Pakistan.',
      badgeText: 'Bila Imtiaz Sub Ki Khidmat',
      primaryBtnText: 'Become a Volunteer',
      secondaryBtnText: 'Support Our Work',
      primaryLink: '/contact',
      secondaryLink: '/programs',
    }),
    []
  );

  return (
    <div className="w-full transform-gpu">
      <GlobalCTA {...ctaProps} />
    </div>
  );
};

export default memo(HomeCTA);