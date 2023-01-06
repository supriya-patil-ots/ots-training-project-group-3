// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Packages from "./components/Packages";
import City from "./components/City";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CityDetails from "./components/CityDetails";
import Wishlist from "./components/wishlist";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/City" element={<City />} />
          <Route path="/CityDetails" element={<CityDetails />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Wishlist" element={<Wishlist />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
