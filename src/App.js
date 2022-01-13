import { Link, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Notfound from "./Notfound";
import Home from "./Home";
import Product from "./components/Product";
import About from "./components/About";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/products/:id" component={Product} exact />
        <Route path="/About" component={About} exact />
        <Route component={Notfound} exact />
      </Switch>
    </div>
  );
}

export default App;
