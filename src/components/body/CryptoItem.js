import { Link } from 'react-router-dom';
import './CryptoItem.css';

function CryptoItem({ id, image, name, symbol, current_price, total_volume, price_change_percentage_24h, market_cap }) {
    return (
        <div className='crypto-item-container'>
            <div className="crypto-item-row">
                <div className='coin'>
                    <img src={image} alt='crypto' />
                    <Link to={`/details/${id}`}>
                        <h3>{name}</h3>
                    </Link>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>
                        <span>Current price:</span> <br />
                        ${current_price}
                    </p>
                    <p className='coin-volume'>
                        <span>Total volume:</span> <br />
                        ${total_volume.toLocaleString()}
                    </p>

                    {price_change_percentage_24h < 0 ? (
                        <p className='coin-percent red'>
                            {price_change_percentage_24h.toFixed(2)}%
                        </p>
                    ) : (
                        <p className='coin-percent green'>
                            {price_change_percentage_24h.toFixed(2)}%
                        </p>
                    )}

                    <p className='coin-marketcap'>
                        <span>Market Cap:</span> <br />  ${market_cap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CryptoItem;
