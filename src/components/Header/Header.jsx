import style from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={style.header}>
            <a href="/"><img src="/images/beer-mug.svg" alt="Beer club logo" /></a>
            <ul >
                <li><a href="auth/login">Login</a></li>
                <li><a href="auth/register">Register</a></li>
            </ul>
        </header>
    );
};

export default Header;