import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <React.Fragment>
      {/* <h1>{firstValue}</h1> */}
      {/* <h1>{secondValue}</h1> */}
      <h1>{text || 'Johny'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
      {isError && <h2>Error...</h2>}
      {isError ? (
        <p>There is an error</p> 
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </React.Fragment>
  );
};

export default ShortCircuit;
