import { Link } from 'react-router-dom';
import './CryptoItem.css';

function CryptoItem(props) {

    const { id, image, name, symbol, current_price, high_24h, low_24h, price_change_percentage_24h, price_change_24h } = props;

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
                        ${current_price.toLocaleString()}
                    </p>

                    <p className='coin-price'>
                        <span>Change:</span> <br />
                        ${price_change_24h}
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
                        <span>Daily high:</span> <br />  ${high_24h.toLocaleString()}
                    </p>
                    <p className='coin-marketcap'>
                        <span>Daily low:</span> <br />  ${low_24h.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CryptoItem;
