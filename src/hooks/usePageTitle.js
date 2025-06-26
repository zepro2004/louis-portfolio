import { useEffect } from 'react';

export function usePageTitle(title) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | Louis Bertrand Ntwali` : 'Louis Bertrand Ntwali - Full-Stack Developer';
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
