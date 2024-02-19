
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inputText, setInputText] = useState("");
  function handleChange (e){
    setInputText(e.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input onChange={handleChange} value={inputText} />
        <p>Hello {inputText}!</p>
    </div>
  )
}

export default App
