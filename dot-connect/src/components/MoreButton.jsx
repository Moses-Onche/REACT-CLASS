import './NavBar.css'
import arrow from '../assets/arrow-up-right-stroke.svg'

function MoreButton() {
    return (
        <button className="connect-button">
            <div>
                <img src={arrow} alt="arrow in button" />
            </div>
            <p>more</p>
        </button>
    )
}

export default MoreButton;