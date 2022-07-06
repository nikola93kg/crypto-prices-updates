import CryptoItem from './CryptoItem';
import { useGlobalContext } from '../../store/context';
import Loading from '../Loading';
import './CryptoList.css';

function CryptoList() {

    const { cryptoData, loading } = useGlobalContext();

    if (loading) {
        return <Loading />
    }
    if (cryptoData.length < 1) {
        return <h2 className='error-title'>No data from the server</h2>
    }

    return (
        <section>
            {cryptoData.map(data => {
                return <CryptoItem key={data.id} {...data} />
            })}
        </section>
    )
}

export default CryptoList;