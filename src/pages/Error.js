import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div class="d-flex align-items-center justify-content-center">
            <div class="text-center">
                <h1 class="display-1 fw-bold m-4">404</h1>
                <p class="fs-1 m-1"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you're looking for doesn't exist.
                </p>
                <Link to='/' className='btn btn-danger mt-5'>Go Home</Link>
            </div>
        </div>
    )
}

export default ErrorPage;