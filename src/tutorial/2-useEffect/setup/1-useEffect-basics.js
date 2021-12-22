import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call useEffect');
    if(value > 0){
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  // second parameter will be an array of dependencies. If the value is change and re-render, the code will run.

  useEffect(() => {
    console.log('initial render');
  }, []);
  // this will only run on initial render

  console.log('render component');
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>click me</button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
