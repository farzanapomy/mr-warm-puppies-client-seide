import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './pages/Home/About/About';
import Home from './pages/Home/Home/Home';
import Products from './pages/Home/Products/Products';
import AddProduct from './pages/Private/AddProduct/AddProduct';
import Login from './pages/Login/Login/Login';
import AddReview from './pages/Private/AddReview/AddReview';
import AllProducts from './pages/AllProducts/AllProducts/AllProducts';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Login/Register/Register';
import PlaceOrder from './pages/Private/PlaceOrder/PlaceOrder';
import Menubar from './pages/Home/Menubar/Menubar';
import Footer from './pages/Home/Footer/Footer';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import MyOrders from './pages/Private/MyOrders/MyOrders';
import Reviews from './pages/DashBoard/Reviews/Reviews';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
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
            <PrivateRoute exact path="/products/:Id">
              <PlaceOrder />
            </PrivateRoute>
            <Route path="/addProduct">
              <AddProduct />
            </Route>
            <Route path="/AddReview">
              <AddReview />
            </Route>
            <PrivateRoute exact path="/allProducts/:Id">
              <PlaceOrder />

            </PrivateRoute>
            <Route path="/allProducts">
              <AllProducts />
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <Route path="/placeOrder">
              <PlaceOrder />
            </Route>
            <Route path="/dashBoard">
              <DashBoard />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router >
      </AuthProvider>

    </div >
  );
}

export default App;
