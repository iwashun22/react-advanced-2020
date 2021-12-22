import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  function checkSize() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);

    // this function will run before re-rendering
    return () => {
      console.log('clean up');
      window.removeEventListener('resize', checkSize);
    }
  })

  return (
    <React.Fragment>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
