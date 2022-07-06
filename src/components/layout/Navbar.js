import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../store/context';
import FavoritesContext from '../../store/favorites-context';
import './Navbar.css';

function Navbar() {

    const { login, setLogin } = useGlobalContext();
    const favoritesContext = useContext(FavoritesContext);

    return (
        <header>
            <div className='logo'><button onClick={() => setLogin(true)}>{login ? 'Logout' : 'Login'}</button></div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        {login &&
                            <Link to='/favorites'>
                                Favorites
                            </Link>}
                        {login &&
                            <div className={`${favoritesContext.totalFavorites >= 1 ? 'notification' : 'notification-none'}`}>
                                {favoritesContext.totalFavorites}
                            </div>}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;