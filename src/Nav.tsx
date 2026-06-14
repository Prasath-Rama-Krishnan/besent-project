import { useNavigate } from "react-router-dom"

export default function Nav() {
    const route = useNavigate()

    const navFun = (path: string) => {
        route(path)
    }

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn')
        route('/Login')
    }



    return (
        <nav className="sidebar-nav">
            <button type='button' onClick={() => navFun('/Home/home')}>
                Home
            </button>
            <button type='button' onClick={() => navFun('/Home/about')}>
                About
            </button>
            <button type='button' onClick={() => navFun('/Home/controlled')}>
                Controlled
            </button>
            <button type='button' onClick={() => navFun('/Home/uncontrolled')}>
                Uncontrolled
            </button>
            <button type='button' onClick={() => navFun('/Home/hooks')}>
                Hooks
            </button>
            <button type='button' onClick={() => navFun('/Home/ComA')}>
                ComA
            </button>
            <button type='button' onClick={() => navFun('/Home/ComB')}>
                ComB
            </button>
            <button type='button' onClick={() => navFun('/Home/ComC')}>
                ComC
            </button>
            <button type='button' onClick={() => navFun('/Home/Api')}>
                Api
            </button>
            <button type='button' onClick={handleLogout}>
                Logout
            </button>
        </nav>
    )
}