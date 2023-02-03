import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './shared/Navbar.js';
import Footer from './shared/Footer';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Privacy from './routes/Privacy';
import Imprint from './routes/Imprint';
import LandingPage from './routes/LandingPage/LandingPage';

function App() {
    return (
        <Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="imprint" element={<Imprint />} />
            </Routes>
            <Footer />
        </Fragment>
    );
}

export default App;
