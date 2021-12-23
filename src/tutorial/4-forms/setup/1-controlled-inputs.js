import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if(firstName && email) {
      const person = { id: uuidV4(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    }
    else {
      console.log('empty values');
    }
  }

  // when you are working on form in React, you need to use onChange to trigger the event and get the input from users, by accessng event.target.value
  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input 
              type="text" 
              placeholder="your name"
              name="firstName" 
              id="firstName" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input 
              type="email" 
              placeholder="email address"
              name="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {
          people.map((person) => {
            const { id, firstName, email } = person;
            return (
              <div className="item" key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            );
          })
        }
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;
