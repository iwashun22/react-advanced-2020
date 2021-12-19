import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    title = 'Hello world';
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>change title</button>
      {/* We can change the variable but the Document won't update */}
    </React.Fragment>
  );
};

export default ErrorExample;
