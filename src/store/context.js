import React, { useState, useContext, useEffect } from 'react';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=15&page=1&sparkline=false';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [cryptoData, setCryptoData] = useState([]);
    const [login, setLogin] = useState(false);

    const fetchCrypto = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            const limitedResult = result.slice(0, 5);
            setCryptoData(limitedResult);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCrypto();
    }, [])

    return (
        <AppContext.Provider value={{ loading, cryptoData, login, setLogin }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }
