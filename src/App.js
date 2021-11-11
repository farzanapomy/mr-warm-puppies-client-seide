import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './pages/Home/About/About';
import Home from './pages/Home/Home/Home';
import Reviews from './pages/Home/Reviews/Reviews';
import Products from './pages/Home/Products/Products';
import AddProduct from './pages/Private/AddProduct/AddProduct';
import Product from './pages/SingleItems/Product/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/addProduct">
            <AddProduct />
          </Route>
        
          <Route path="/about">
            <About />
          </Route> 
         
        </Switch>
      </Router >
   
    </div >
  );
}

export default App;
