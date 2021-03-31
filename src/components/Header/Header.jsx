import style from './Header.module.scss';

import { Link } from 'react-router-dom';

import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';


const Header = () => {
    const [user] = useContext(UserContext)

    return (
        <header className={style.header}>
            <div>
                <Link to="/"><img src="/images/beer-mug.svg" alt="Beer club logo" /></Link>
                {user ? (<span className={style.userSpan}>Hello {user.email}</span>) : null}
            </div>
            <ul >
                {user ?
                    (
                        <>
                            <li>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                            <li>
                                <Link to="/recipes/add">Add Recipe</Link>
                            </li>
                            <li>
                                <Link to="/recipes/mine">My Recipes</Link>
                            </li>
                            <li>
                                <Link to="/auth/logout">Logout</Link>
                            </li>
                        </>
                    ) :
                    (
                        <>
                            <li>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                            <li>
                                <Link to="/auth/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/auth/register">Register</Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </header>
    );
};

export default Header;