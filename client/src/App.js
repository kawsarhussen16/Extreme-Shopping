import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/Error-Boundary";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user-action.js";
import { selectCurrentUser } from "./redux/user/user.selector.js";
import Footer from "./components/footer/footer.js";
import Header from "./components/header/header.js";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.js";
import Spinner from "./components/spinner/Spinner";
const Homepage = lazy(() => import("./pages/homepage/homepage.js"));
const ShopPage = lazy(() => import("./pages/shop-page/shop"));
const ContactPage = lazy(() => import("./pages/contact/contact.js"));
const Checkout = lazy(() => import("./pages/checkout/checkout.js"));
const SignInUP = lazy(() => import("./pages/signIn&up/signIn-Up"));

class App extends Component {
    unsubscribeFromSnapShot = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
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
            <Router>
                <div>
                    <Switch>
                        <ErrorBoundary>
                            <Suspense fallback={<Spinner />}>
                                <Header />
                                <Route exact path="/" component={Homepage} />
                                <Route path="/shop" component={ShopPage} />
                                <Route path="/contact" component={ContactPage} />
                                <Route exact path="/checkout" component={Checkout} />
                                <Route
                                    exact
                                    path="/signin"
                                    render={() =>
                                        this.props.currentUser ? (
                                            <Redirect to="/" />
                                        ) : (
                                                <SignInUP />
                                            )
                                    }
                                />
                                <Route path="/" component={Footer} />
                                <Redirect to="/" />
                            </Suspense>
                        </ErrorBoundary>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
