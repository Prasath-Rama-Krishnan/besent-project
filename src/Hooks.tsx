import { useEffect, useRef } from "react";

function Hooks() {
    const userText:any = useRef("");
    const focus = () => {
        userText.current.focus();
    }   
    useEffect(() => {
        focus();
    },[]);
  return (
    <>
        <h1>Hooks</h1>
        <input type="text" ref={userText} />
        <button onClick={() => focus()}>Submit</button>
    </>
  );
}

export default Hooks;