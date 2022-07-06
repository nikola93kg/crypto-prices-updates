import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DetailsPage from './pages/Details';
import FavoritesPage from './pages/Favorites';
import ErrorPage from './pages/Error';
import Layout from './components/layout/Layout';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Layout>
  )
}

export default App;