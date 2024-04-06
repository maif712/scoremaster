import { NavLink } from "react-router-dom"
import { useAppContext } from "../AppContext"



export default function Nav() {

    const { isMenuOpen, handleCloseNavMenu } = useAppContext()

    return (
        <div onClick={handleCloseNavMenu} className={`nav-wrapper ${isMenuOpen ? "canvas-off" : ""}`}>
            <div className="close-button-wrapper">
                <button onClick={handleCloseNavMenu} className="nav-close-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
            <nav className={`primary-nav`} aria-label="Main navigation">
                <ul className="nav__ul">
                    <li><NavLink className={"nav__link"} to={"/"}>home</NavLink></li>
                    <li><NavLink className={"nav__link"} to={"/dice"}>dice</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
