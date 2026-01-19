import './NavBar.css'
import logo from '../assets/microchip.png';

function NewButton(){
    return (
        <button className="nav-button">New Button</button>
    )
}

// function NavBar() {
//     return (
//         <div className="navbar">
//             <NewButton />
//             <button className="nav-button">Navigation Bar</button>
//         </div>
//     )
// }

function NavBar() {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo of the site" />
            <div>
                <a href="https://www.google.com">Google</a>
                <a href="https://www.dribbble.com">Dribbble</a>
                <a href="https://www.chatgpt.com">ChatGPT</a>
                <a href="#">About Us</a>
            </div>
        </nav>
    )
}

export default NavBar;