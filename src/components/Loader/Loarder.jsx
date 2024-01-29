// Loader.js
import React from 'react';
import { useSelector } from 'react-redux';
import LoaderSpinner from 'react-loader-spinner'; // Import your loader library

function Loader() {
  const isLoading = useSelector(state => state.global.isLoading);

  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <LoaderSpinner type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
}

export default Loader;
