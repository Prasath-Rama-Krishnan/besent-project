import Header from "./Header";
import Nav from "./Nav.tsx";
import { Outlet } from "react-router-dom";

export default function Layouts() {
    return (
        <div className="app-shell">
            <aside className="sidebar">
                <Nav />
            </aside>
            <div className="content-area">
                <Header />
                <main className="main-content">
                    <div className="page-content">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}