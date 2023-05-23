import { useState } from "react";

function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}

function EventDemo() {
  let [todo, setTodo] = useState("");
  let [list, setList] = useState([]);

  let inputHandler = (e) => {
    console.log(e.target.value);
    let newValue = e.target.value;
    setTodo(newValue);
  };

  let addNewItem = () => {
    let newList = [todo, ...list];
    setList(newList);
    setTodo("");
  };

  let deleteItem = (index) => {
    list.splice(index, 1);
    console.log(list);
    setList([...list]);
  };

  //UI
  return (
    <div className="container-fluid bg-success object-fit-cover border rounded">
      <h1 className="bg-danger p-3 d-flex justify-content-center">ToDo App</h1>

      <input
        type="text"
        placeholder="Enter"
        value={todo}
        onChange={inputHandler}
      />

      <input type="button" value="Add" onClick={addNewItem} />

      {list.map((item, index) => (
        <div key={index} className="d-flex justify-content-between">
          <h1 class="bg-light mt-3 fs-3">{item}</h1>
          <input
            type="button"
            value="Delete"
            onClick={() => deleteItem(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
