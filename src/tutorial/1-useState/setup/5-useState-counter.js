import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  }
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1); this will not work if you click multiple time
      setValue(prevState => {
        return prevState + 1;
      })
    }, 2000)
  }
  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>increase delay</button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
