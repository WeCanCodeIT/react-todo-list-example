import React from "react";
import "./App.css";

import ListItem from "./list-item/list-item.component";
import Title from "./title/title.component";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [
//         "Learn React",
//         "Master React",
//         "Monetize off of knowledge of React"
//       ]
//     };
//   }

//   handleClick = () => {
//     console.log("button clicked!");
//   };

//   render() {
//     return (
//       <div className="App">
//         <Title text="Todo List" />
//         <input type="text" />
//         <button onClick={this.handleClick}>Add New Todo</button>
//         <ul>
//           {this.state.todos.map(todo => (
//             <ListItem content={todo} />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function App() {
  const [todos, setTodos] = React.useState([
    "Learn React",
    "Master React",
    "Monetize off of knowledge of React"
  ]);

  const [inputValue, setInputValue] = React.useState("");

  const [fetchResponse, setFetchResponse] = React.useState({});

  React.useEffect(() => {
    fetch("http://localhost:3001/students")
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setFetchResponse(response);
      });
  }, []);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleClick() {
    setTodos([inputValue, ...todos]);
  }

  return (
    <div className="App">
      <Title text="Todo List" />
      <input onChange={handleChange} type="text" />
      <button onClick={handleClick}>Add New Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <ListItem key={index} content={todo} />
        ))}
      </ul>
      <output>
        {fetchResponse.students && fetchResponse.students[0].name}
      </output>
    </div>
  );
}

export default App;
