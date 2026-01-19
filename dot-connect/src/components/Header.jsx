import MoreButton from "./MoreButton";
import './Header.css';

function Header(){
    return (
        <header className="header-content">
            <h1>We are an engineering-driven company
                that effectively delivers deep tech products.
            </h1>
            <p>We have years of experience, a multitalented and diverse
                team and most importantly, our founder's zero tolerance
                for bullsh*t.
            </p>
            <MoreButton />
        </header>
    )
}

export default Header;