import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/LoginPage/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Signup from "./pages/SignupPage/Signup";
import Home from "./pages/HomePage/Home";
import Product from "./pages/ProductPage/Product";
import ProductDetail from "./pages/ProductDetailPage/ProductDetail";
import Cart from "./pages/CartPage/Cart";
import Order from "./pages/OrderPage/Order";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login" component={Login} />
        <Redirect exact from="/" to="/login" />
        <Route path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/product/:category" component={Product} />
        <Route exact path="/product/:category/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/order" component={Order} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
