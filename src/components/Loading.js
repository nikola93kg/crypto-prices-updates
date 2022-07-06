import loading from '../assets/img/loading.svg';

function Loading() {
    return (
        <div style={{ display: 'grid', placeItems: 'center' }}>
            <img src={loading} alt="loading..." />
        </div>
    )
}

export default Loading;