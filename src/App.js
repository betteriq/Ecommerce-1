import { Link, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Notfound from "./Notfound";
import Home from "./Home";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/" component={Home} />
        <Route component={Notfound} />
      </Switch>
    </div>
  );
}

export default App;
