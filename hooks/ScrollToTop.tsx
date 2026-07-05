'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Small delay helps with layout shifts, fonts, and React rendering
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',   // 'smooth' if you prefer animation
      });
    }, 10); // or try 0 / 50 / 100

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);   // Include searchParams for query changes

  return null;
}