import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
import Error from './Error'
const Person = () => {
  const [name, setName] = useState('default name');
  const [isError, setIsError] = useState(false);
  // console.log(useParams());
  const { id } = useParams();
  useEffect(() => {
    const newPerson = data.find(person => person.id === +id);
    if(newPerson) {
      setName(newPerson.name);
    } else {
      setIsError(true);
    }
  }, [])
  return (
    <div>
      {
        isError ?  <Error /> :
        (<>
          <h2>{name}</h2>
          <Link to="/people" className="btn">Back To People</Link>
        </>)
      }
    </div>
  );
};

export default Person;
