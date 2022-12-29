// import logo from "./logo.svg";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import City from "./components/City";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Provider } from 'react-redux';
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/City" element={<City />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Provider>
    </div>
  );
}

export default App;
