import React from "react";

//Import Heading & Card Components
import Heading from "./Heading";
import Card from "./Card";

//import Contacts object from contacts.js
import contacts from "../contacts";
console.log(contacts);

function App() {
  return (
    <div>
      <Heading />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
