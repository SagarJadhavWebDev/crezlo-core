'use client';

import { useEffect, useState } from 'react';
import './styles/style.css';

export default function Home() {
  const [cookieValue, setCookieValue] = useState<string | null>(null);

  function getCookie(name: string) {
    console.log('getCookie1');
    if (typeof window === 'undefined') return null;
    function escape(s: string) {
      return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, "\\$1");
    }
    const match = document.cookie.match(
      RegExp("(?:^|;\\s*)" + escape(name) + "=([^;]*)")
    );
    console.log('getCookie2');
    return match ? match[1] : null;
  }

  const handleLocalStorage = () => {
    const data = getCookie('auth');
    console.log('from package', data);
    localStorage.setItem('test', '1msadncmsd23');
  };

  useEffect(() => {
    setCookieValue(getCookie('auth'));
  }, []);

  return (
    <div onClick={handleLocalStorage}>
      <h1 className="text-3xl font-bold underline text-red-600">
        Hello world! + {cookieValue}
      </h1>
    </div>
  );
}
