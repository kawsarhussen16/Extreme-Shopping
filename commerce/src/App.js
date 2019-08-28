import React, { Component } from "react";

import Homepage from "./pages/homepage/homepage.js";
import ShopPage from "./pages/shop-page/shop.js";
import Header from "./components/header/header.js";
import SignInUP from "./pages/signIn&up/signIn-Up";
import { auth, createUserProfileDocument } from "./firebase/firebase.js";

import { setCurrentUser } from './redux/user/user-action.js';

import "./App.css";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

class App extends Component {
  SignOutFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.SignOutFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snap => {
          setCurrentUser({
            currentUser: {
              id: snap.id,
              ...snap.data()
            }
          });
          console.log(this.state);
        });
      }
      setCurrentUser({ currentUser: user });
      console.log({ user })
    });
  }
  componentWillUnmount() {
    this.SignOutFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInUP} />
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
