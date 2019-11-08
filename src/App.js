import React from "react";
import "./App.css";

import ListItem from "./list-item/list-item.component";
import Title from "./title/title.component";

function App() {
  const todos = [
    "Learn React",
    "Master React",
    "Monetize off of knowledge of React"
  ];
  return (
    <div className="App">
      <Title text="Todo List" />
      <input type="text" />
      <button>Add New Todo</button>
      <ul>
        {todos.map(todo => (
          <ListItem content={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
