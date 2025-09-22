// src/components/Loading/Loading.jsx
// src/components/Loading.jsx
// src/Loading.jsx
import React, { useState, useEffect } from 'react';
import './Loading.css'; // This is where you'll put the CSS from the original code

const Loading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const loadData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Data loaded");
        }, 3000); // Simulate a 3-second data loading time
      });
    };

    loadData().then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div id="overlay">
        <div className="progress"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;