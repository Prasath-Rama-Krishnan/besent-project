
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import login from './assets/images/login.png'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
function Login(){
    const route = useNavigate();
    const loginfun=()=>{
        localStorage.setItem("isLoggedIn", "true");
        route("/Home");
    }
    return(
        <>
        <div className='login'>
            <div className='loginform'>
                <FontAwesomeIcon icon={faUser} className='faUser' />
                <label htmlFor="mail">Email</label>
                <input type="email" id="mail" placeholder='Enter your email'/>
                <label htmlFor='password'>Password</label>
                <input type="password" id='password' placeholder='Enter your password' />
                <button className="submit" onClick={()=>loginfun()}>Sign in</button>
            </div>
            <div className='loginimg'>
                <img src={login} alt="login image" />
            </div>
        </div>
        </>
    )
}

export default Login;