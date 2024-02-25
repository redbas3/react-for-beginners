import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const increment = () => setCounter((prev)=> prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log('I run only once');
  }
  useEffect(() => {
    iRunOnlyOnce();
  }, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {
      console.log("Search for: ", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("Counter changed to: ", counter);
  }, [counter]);

  return (
    <div>
      <input type="text" placeholder="search here..." value={keyword} onChange={onChange} />
      <h1>Welcome back!</h1>
      <p>Counter: {counter}</p>
      <Button text={"Click me!"} onClick={increment} />
    </div>
  );
}

export default App;
