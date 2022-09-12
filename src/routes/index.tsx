import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from '@/pages/index';
import NotfoundPage from '@/pages/notfound';
import { applyTheme } from '@/themes/utils';
import { DEFAULT_THEME } from '@/themes/index';

function Routess() {
  useEffect(() => {
    applyTheme(DEFAULT_THEME);
    window.addEventListener('resize', setupScreen);
    return () => window.removeEventListener('resize', setupScreen);
  }, []);

  const setupScreen = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotfoundPage />} />
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routess;
