import { Component, useRef } from "react";
function Uncontrolled() {
        const userText:any=useRef('');
        const handleSubmit=(e:any)=>{
            e.preventDefault();
            alert(userText.current.value);
        }
        return (    
            <>
                <h1>Uncontrolled Component</h1>
                <input type="text" ref={userText} />
                <button onClick={handleSubmit}>Submit</button>
            </>
        );
}
 
export default Uncontrolled;