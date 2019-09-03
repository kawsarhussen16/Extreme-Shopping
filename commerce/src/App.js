import React from "react";

import Homepage from "./pages/homepage/homepage.js";
import ShopPage from "./pages/shop-page/shop.js";
import Checkout from "./pages/checkout/checkout.js"
import Header from "./components/header/header.js";
import SignInUP from "./pages/signIn&up/signIn-Up";
import { auth, createUserProfileDocument } from "./firebase/firebase.js";

import { setCurrentUser } from './redux/user/user-action.js';
import { selectCurrentUser } from './redux/user/user.selector.js';

import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />
          ) : (
              <SignInUP />
            )
          }
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
