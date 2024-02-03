import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// Importul pentru useMediaQuery nu este necesar dacă nu folosești 'isMobile'
// import { useMediaQuery } from 'react-responsive';

import HomeTab from '../HomeTab/HomeTab';

import './DashboardPage.scss';

const DashboardPage = () => {
  // Linia de mai jos poate fi ștearsă dacă nu folosești 'isMobile'
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="main-content">
      <Routes>
        <Route path="/dashboard/home" element={<HomeTab />} />
        <Route
          path="/dashboard/*"
          element={<Navigate to="/dashboard/home" />}
        />
      </Routes>
    </div>
  );
};

export default DashboardPage;
