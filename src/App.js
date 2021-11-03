import React from 'react';
// import * as ServiceWorker from './service-worker.js';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { GlobalStyle } from '../src/global.styles';

import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';


import SignInAndSignUpPage from './pages/signin/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from "./firebase/firebase.utils";

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview} from './redux/shop/shop.selectors';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionArray } = this.props;

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
      addCollectionAndDocuments('collections', collectionArray);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage /> 
              )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// ServiceWorker.register();

export default connect(mapStateProps, mapDispatchToProps)(App);
