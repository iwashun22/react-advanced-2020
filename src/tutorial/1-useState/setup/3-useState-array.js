import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState([...data]);
  const removeItem = id => {
    const newPeople = people.filter(person => person.id !== id)
    setPeople(newPeople);
  }
  return (
    <React.Fragment>
    {
      people.map(person => {
        // console.log(person);
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove this item</button>
          </div>
        );
      })
    }
    <button className="btn" onClick={() => setPeople([])}>
      clear items
    </button>
    </React.Fragment>
  );
};

export default UseStateArray;
