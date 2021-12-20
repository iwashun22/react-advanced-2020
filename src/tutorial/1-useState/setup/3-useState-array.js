import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState([...data]);
  return (
    <React.Fragment>
    {
      people.map(person => {
        // console.log(person);
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
        );
      })
    }
    </React.Fragment>
  );
};

export default UseStateArray;
