import { useContext } from "react";
import userContext from "./UserContext";

function ComC() {
    const user = useContext(userContext);
    return (
        <div>
            <h1>ComC</h1>
            <p>User: {user}</p>
        </div>
    );
}   
export default ComC;
