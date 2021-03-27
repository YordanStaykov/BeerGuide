import style from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={style.header}>
            <Link to="/"><img src="/images/beer-mug.svg" alt="Beer club logo" /></Link>
            <ul >
                <li>
                    <Link to="/auth/login">Login</Link>
                </li>
                <li>
                    <Link to="/auth/register">Register</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;