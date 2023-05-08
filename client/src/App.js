import React, { Redirect, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";

import CheckoutPage from "./pages/checkout/checkout.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

import WithSpinner from './components/with-spinner/with-spinner.component';
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const renderLoader = () => <WithSpinner />;
const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={renderLoader()}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={HomePage}>
          <Route path="/shop" element={ShopPage} />
          <Route exact path="/checkout" element={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
