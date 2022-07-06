import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import FavoritesContext from '../store/favorites-context';
import Loading from "../components/Loading";
import './Details.css';

const url = 'https://api.coingecko.com/api/v3/coins/';

function DetailsPage() {

    const { id } = useParams();
    const favoritesContext = useContext(FavoritesContext);

    const [loading, setLoading] = useState(false);
    const [crypto, setCrypto] = useState(null);

    useEffect(() => {
        setLoading(true);
        const getCrypto = async () => {
            try {
                const response = await fetch(`${url}${id}`);
                const result = await response.json();
                setCrypto(result);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getCrypto();
    }, [id]);

    const itemIsFavorite = favoritesContext.itemIsFavorite(id);

    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {
            favoritesContext.removeFavorite(crypto.id);
        } else {
            favoritesContext.addFavorite({
                id: crypto.id,
                image: crypto.image,
                name: crypto.name,
                price: market_data.current_price.usd.toLocaleString(),
                highest_price: market_data.market_cap.usd.toLocaleString(),
                lowest_price: market_data.low_24h.usd.toLocaleString()
            })
        }
    }

    if (loading) {
        return <Loading />
    }
    if (!crypto) {
        return <h2>Nothing found...</h2>
    }

    const { name, image, market_data } = crypto;

    return (
        <div className="card">
            <img className="card-img-top" src={image.large} alt={name} />
            <div className="card-body">
                <h2 className="card-title mb-5">{name}</h2>
                <p className="card-text"> <span>Current price:</span> ${market_data.current_price.usd.toLocaleString()}</p>
                <p> <span>Highest price:</span> ${market_data.market_cap.usd.toLocaleString()}</p>
                <p> <span>Lowest price in 24h: ${market_data.low_24h.usd.toLocaleString()} </span> </p>
            </div>
            <div className="footer">
                <button
                    onClick={toggleFavoriteStatusHandler}
                    btn btn-light
                    className={`${itemIsFavorite ? 'btn btn-danger' : 'btn btn-light'}`}>
                    {itemIsFavorite ? 'Remove from favorites' : 'To Favorites'}
                </button>
            </div>
        </div>
    )
}

export default DetailsPage;