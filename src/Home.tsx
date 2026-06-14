import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Home(){
    const [name,setName]=useState(true);
    const [status,setStatus]=useState(true);
    const navigate = useNavigate();
    const handleClick = () => {
        setName(!name);
        setStatus(!status);
    }
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/Login");
    }
    return(
        <div>
            <p>{name ? "Welcome to uchiha clan" : "hello world"}</p>
            <button onClick={handleClick}>Change State</button>
            <button onClick={handleClick}>{status ? 'Change toggle' : 'Toggle changed'}</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home;