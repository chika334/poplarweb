import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { indigo, pink } from "@material-ui/core/colors";
import { Redirect } from "react-router-dom";

// component
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
// import Profile from "./component/Profile/Profile";
import ProfileDetails from "./component/Profile/ProfileDetails";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes.js";
import forgotPassword from "./component/forgotPassword/forgotPassword";
import resetPasswordDetails from "./component/forgotPassword/resetPasswordDetails";

// pages
import Login from "./component/Login/Signin";
import BuyToken from "./Pages/BuyToken";
import Register from "./component/Register/Signup";
import Dashboard from "./component/Dashboard/Dashboard";
import Home from "./Pages/Home";
import About from "./Pages/About.js";
import Error from "./Pages/Error.js";
import Report from "./Pages/Report";
import wallet from "./Pages/Wallet";
import Together from "./Pages/Together";
import TokenSuccess from "./Pages/TokenSuccess";
import WalletReport from "./Pages/WalletReport";
import DebitWallet from './Pages/DebitWallet';

// get request
import { getCountryId, getUser } from "./_action/userAction";
import { getTransactions } from "./_action/transactions";
import { wallets } from "./_action/wallet";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757de8",
      main: "#3f51b5",
      dark: "#002984",
      contractText: "#fff",
    },
    secondary: {
      light: "#ff79b0",
      main: "#ff4081",
      dark: "#c60055",
      contractText: "#000",
    },
    openTitle: indigo["400"],
    protectedTitle: pink["400"],
    type: "light",
  },
});

export class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      store.dispatch(getCountryId());
      store.dispatch(getUser());
      store.dispatch(getTransactions());
      store.dispatch(wallets());
    } else {
      return <Redirect to="/poplarpower/signin" />;
    }
  }
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/poplarpower/signin"} component={Login} />
            <Route exact path={"/poplarpower/signup"} component={Register} />
            <Route exact path={"/poplarpower/about"} component={About} />
            {/* <Route exact path="/powerweb/forgotPasword" component={forgotPassword} /> */}
            {/* profile */}
            <ProtectedRoutes path="/poplarpower/profile/:path?">
              <Switch>
                <ProtectedRoutes
                  path="/poplarpower/profile/dashboard"
                  exact
                  component={Dashboard}
                />
                <ProtectedRoutes
                  path="/poplarpower/profile"
                  exact
                  component={ProfileDetails}
                />
                <ProtectedRoutes
                  path="/poplarpower/profile/dashboard/buytoken"
                  exact
                  component={BuyToken}
                />
                <ProtectedRoutes
                  path="/poplarpower/profile/dashboard/report"
                  exact
                  component={Report}
                />
                <ProtectedRoutes
                  path="/poplarpower/profile/dashboard/wallet"
                  exact
                  component={wallet}
                />
                <ProtectedRoutes
                  path="/poplarpower/profile/dashboard/together"
                  exact
                  component={Together}
                />
                <ProtectedRoutes
                  path="/poplarpower/profile/dashboard/reportwallet"
                  exact
                  component={WalletReport}
                />
                <ProtectedRoutes
                  path="/poplarpower/profile/dashboard/debitwallet"
                  exact
                  component={DebitWallet}
                />
                <ProtectedRoutes
                  path="/poplarpower/profile/success"
                  exact
                  component={TokenSuccess}
                />
                <ProtectedRoutes
                  path="/poplarpower/profile/setpassword"
                  exact
                  component={resetPasswordDetails}
                />
              </Switch>
            </ProtectedRoutes>
            <Route component={Error} />
          </Switch>
          <Footer />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

// const

export default App;
