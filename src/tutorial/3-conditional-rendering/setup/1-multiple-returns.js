import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => {
        if(res.status >= 200 && res.status < 300)
          return res.json();
        else {
          setIsLoading(false)
          setIsError(true);
          throw new Error('Failed fetching data...');
        }
      })
      .then(user => {
        const { login } = user;
        console.log(user);
        setUser(login);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [])

  if(isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if(isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
