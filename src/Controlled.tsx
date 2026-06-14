import { useState } from "react";
function Controlled() {
    const [value, setValue] = useState('Hello World ');

        return (    
            <>
                <h1>Controlled Component</h1>
                <p>Value: {value}</p>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            </>
        );
}
 
export default Controlled;