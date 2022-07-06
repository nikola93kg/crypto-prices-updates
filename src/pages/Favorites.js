import { useContext } from 'react';
import { Link } from 'react-router-dom';
import empty from '../assets/img/empty.svg';
import FavoritesContext from '../store/favorites-context';

function FavoritesPage() {

    const favoritesContext = useContext(FavoritesContext);

    if (favoritesContext.totalFavorites === 0) {
        return (
            <div className='d-flex justify-content-center flex-column'>
                <h3 className='text-center'>You got no favorites yet</h3>
                <img src={empty} alt="nothing here" style={{ height: '400px' }} className='mt-5' />
            </div>
        )
    }

    const favorites = favoritesContext.favorites;

    return (
        <section>
            {favorites.map(data => {
                return (
                    <div className='crypto-item-container' key={data.id}>
                        <div className="crypto-item-row">
                            <div className='coin'>
                                <img src={data.image.large} alt='crypto' />
                                <Link to={`/details/${data.id}`}>
                                    <h3>{data.name}</h3>
                                </Link>
                            </div>
                            <div className='coin-data'>
                                <p className='coin-price'>
                                    <span>Current price:</span> <br />
                                    ${data.price}</p>
                                <p className='coin-marketcap'>
                                    <span>Lowest price:</span> <br /> ${data.lowest_price}
                                </p>
                                <p className='coin-marketcap'>
                                    <span>Highest price:</span> <br /> ${data.highest_price}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default FavoritesPage;