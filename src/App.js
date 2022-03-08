import logo from "./logo.svg";
import "./App.css";
import allContacts from "./contacts.json";
import React from "react";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));

  const handleContacts = () => {
    const randomPosition = Math.floor(Math.random() * allContacts.length);
    const randomContacts = allContacts[randomPosition];

    setContacts([randomContacts, ...contacts]);
  };

  const handleSortContactsPopularity = () => {
    const contactsCopy = [...contacts];

    contactsCopy.sort((pop1, pop2) => (pop1.name > pop2.name ? -1 : 1));

    setContacts(contactsCopy);
  };
  const handleSortContactsName = () => {
    const contactsCopy = [...contacts];

    contactsCopy.sort((elem1, elem2) => (elem1.name > elem2.name ? 1 : -1));

    setContacts(contactsCopy);
  };

  const handleDeleteContacts = (positionContact) => {
    const contactsCopy = [...contacts];

    contactsCopy.splice(positionContact, 1);

    setContacts(contactsCopy);
  };

  return (
    <div className="App">
      <h1>Iron contacts</h1>
      <div class="buttons">
        <button onClick={handleContacts}>Add Random Contact</button>
        <button id="b2" onClick={handleSortContactsPopularity}>
          Sort by popularity
        </button>
        <button onClick={handleSortContactsName}>Sort by name</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>
              won <br /> Oscar
            </th>
            <th>
              won <br /> Emmy
            </th>
            <th>Actions</th>
          </tr>
        </thead>

        {contacts.map((eachContact, index) => {
          return (
            <tbody>
              <tr>
                <td>
                  <img src={eachContact.pictureUrl} alt="pic1" width="100px" />
                </td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity.toFixed(2)}</td>
                <td> {eachContact.wonOscar ? "🏆" : ""}</td>
                <td> {eachContact.wonEmmy ? "⭐" : ""}</td>
                <td>
                  <button onClick={() => handleDeleteContacts(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
