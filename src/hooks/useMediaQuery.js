import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  // Default to true for desktop-first assumption before hydration,
  // or read window if available.
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return true;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);
    media.addEventListener('change', listener);
    
    // Catch if it changed before the listener was added
    if (media.matches !== matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMatches(media.matches);
    }
    
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
