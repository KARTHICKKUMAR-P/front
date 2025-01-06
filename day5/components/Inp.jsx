import { useState, useEffect, useRef } from "react";
function Inp() {
    const [inp, setInp] = useState("");
    const handleInputChange = (e) => {
      setInp(e.target.value);
    };
    useEffect(() => {
      console.log(inp);
    }, [inp]);
    return (
      <>
        <label>Input: </label>
        <input type="text" placeholder="Enter your text" value={inp} onChange={handleInputChange} 
        />
      </>
    )
  } 
  
  export default Inp