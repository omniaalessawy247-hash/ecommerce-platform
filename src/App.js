import React, { useRef, useState, useEffect } from 'react';
import Allnavbar from './Home/Allnavbar';
import Allfooter from './Home/Allfooter';
import { Outlet } from 'react-router-dom';

function App() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <>
      <div ref={navRef} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Allnavbar />
      </div>
      <div style={{ paddingTop: `${navHeight}px` }}>
        <Outlet />
      </div>
      <Allfooter />
    </>
  );
}

export default App;