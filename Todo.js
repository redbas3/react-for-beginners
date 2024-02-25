import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {
    setToDo(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(toDo);
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} type="text" placeholder="Write your todo" onChange={onChange}/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
      {toDos.map((toDo, index) => (
        <li key={index}>
          {toDo}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
