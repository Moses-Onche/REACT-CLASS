import './NavBar.css'
import arrow from '../assets/arrow-up-right-stroke.svg'

function NavBar() {
    return (
        <nav className="navbar">
            <a href="">
                <p className="logo">(dot)connect</p>
            </a>
            <div className="nav-links">
                <a href="">about</a>
                <a href="">offer</a>
                <a href="">brainpower</a>
                <a href="">stories</a>
                <a href="">team</a>
                <a href="">philosophy</a>
            </div>
            <button className="connect-button">
                <div>
                    <img src={arrow} alt="arrow in button" />
                </div>
                <p>let's connect</p>
            </button>
        </nav>
    )
}

export default NavBar;