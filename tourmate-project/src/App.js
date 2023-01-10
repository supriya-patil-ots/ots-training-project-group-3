// import logo from "./logo.svg";
import { Route, Routes} from "react-router-dom";
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
import HoneymoonPackage from "./components/HoneymoonPackage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<HoneymoonPackage />} />
          <Route path="/City" element={<City />} />
          <Route path={`/CityDetails/:id`} element={<CityDetails />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Honeymoon" element={<HoneymoonPackage />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;

// client-id for office id :- 33829118762-jshen9lnlnqtq7fju10ml0sbp21ldail.apps.googleusercontent.com
// secret id :-  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
