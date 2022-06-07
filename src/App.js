import "swiper/css";
import "./assets/boxicons-2.1.2/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Switch from "./routes/Switch";

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
