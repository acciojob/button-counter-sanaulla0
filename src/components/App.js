
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData] = useState(0);
  const handleClick = ()=>{
       setData+=1;
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {data} times</p>

<button type="submit" onClick="handleClick">Click Me</button>

    </div>
  )
}

export default App
