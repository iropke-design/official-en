import { useState, useEffect } from 'react';
import IropkeMobile00HomeTypeA from '@/imports/IropkeMobile00HomeTypeA20260123';
import IropkeTablet00HomeTypeA from '@/imports/IropkeTablet00HomeTypeA20260123';
import IropkeDesktop00HomeTypeA from '@/imports/IropkeDesktop00HomeTypeA20260123';

function useViewportSize() {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewportWidth;
}

export default function HomePage() {
  const viewportWidth = useViewportSize();

  // Mobile: < 768px
  // Tablet: 768px - 1024px
  // Desktop: >= 1024px
  
  if (viewportWidth < 768) {
    return <IropkeMobile00HomeTypeA />;
  } else if (viewportWidth < 1024) {
    return <IropkeTablet00HomeTypeA />;
  } else {
    return <IropkeDesktop00HomeTypeA />;
  }
}
