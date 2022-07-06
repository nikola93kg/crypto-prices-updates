import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteCrypto) => { },
    removeFavorite: (cryptoId) => { },
    itemIsFavorite: (cryptoId) => { }
});

export function FavoritesContextProvider({ children }) {

    const [favorites, setFavorites] = useState([]);

    function addFavoriteHandler(favoriteCrypto) {
        setFavorites((previousUserFavorites) => {
            return previousUserFavorites.concat(favoriteCrypto);
        })
    }
    function removeFavoriteHandler(cryptoId) {
        setFavorites(previousUserFavorites => {
            return previousUserFavorites.filter(item => item.id !== cryptoId);
        })
    }
    function itemIsFavoriteHandler(cryptoId) {
        return favorites.some(item => item.id === cryptoId);
    }

    const context = {
        favorites: favorites,
        totalFavorites: favorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;