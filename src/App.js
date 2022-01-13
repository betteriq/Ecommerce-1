import { Link, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Notfound from "./Notfound";
import Home from "./Home";
import Product from "./components/Product";
import About from "./components/About";
import Container from "./Container";
import { Provider } from "react-redux";
import store from "./components/AddtoCart/Create"
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
