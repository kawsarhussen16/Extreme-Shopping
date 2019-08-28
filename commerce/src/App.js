import React, { Component } from "react";

import Homepage from "./pages/homepage/homepage.js";
import ShopPage from "./pages/shop-page/shop.js";
import Header from "./components/header/header.js";
import SignInUP from "./pages/signIn&up/signIn-Up";
import { auth, createUserProfileDocument } from "./firebase/firebase.js";

import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  SignOutFromAuth = null;

  componentDidMount() {
    this.SignOutFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snap => {
          this.setState({
            currentUser: {
              id: snap.id,
              ...snap.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: user });
      console.log({ user })
    });
  }
  componentWillUnmount() {
    this.SignOutFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInUP} />
        </Switch>
      </div>
    );
  }
}

export default App;
