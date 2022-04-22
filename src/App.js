import 'swiper/css';
import './assets/boxicons-2.1.2/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Switch from './config/Switch';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
