import { useHistory } from "react-router";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import TailwindContactUs from "./pages/TailwindContactUs";
import Footer from "./components/Footer";
import Cookie from "./components/Cookies";
import Join from "./pages/Join";
import Login from "./pages/Login";
import GymDetails from "./pages/GymDetails";
import GymPartnerships from "./pages/GymPartnerships";
import PublicAPI from "./pages/PublicAPI";
import TailwindNavbar from "./components/TailwindNavbar";

export default function App() {
  let history = useHistory();
  return (
    <BrowserRouter history={history}>
      <TailwindNavbar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/about-us"
          render={(props) => <AboutUs {...props} />}
        />
        <Route
          exact
          path="/contact-us"
          render={(props) => <TailwindContactUs {...props} />}
        />
        <Route exact path="/join" render={(props) => <Join {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/gym-partnerships"
          render={(props) => <GymPartnerships {...props} />}
        />
        <Route
          exact
          path="/gym-details"
          render={(props) => <GymDetails {...props} />}
        />
        <Route
          exact
          path="/city-bikes"
          render={(props) => <PublicAPI {...props} />}
        />
      </Switch>
      <Cookie />
      <Footer />
    </BrowserRouter>
  );
}

// export default App;
