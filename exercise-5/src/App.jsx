
import React from "react";
import { AVAILABLE_CARDS } from "./data.js";
import Card from "./components/wyze.jsx";
import "../style.css";

function App() {
  return (
    <main className="app">
      <h1 className="app-title">My Items</h1>
      <ul className="cards-list">
        {AVAILABLE_CARDS.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            info={card.info}
            hobby={card.hobby}
            image={card.image}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
