import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header-component';
import { auth } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import signInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  

  useEffect(()=> {
    let unsubscribeFromAuth = null;
     unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
      return () => {
        unsubscribeFromAuth();
      }
    })
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={signInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;