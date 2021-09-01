import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header-component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import signInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

function App() {
  const [currentUser, setCurrentUser] = useState(null);



  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        onSnapshot(userRef, (docSnap) => {
          setCurrentUser({
            id: docSnap.id,
            ...docSnap.data()
          });
          return () => {
            unsubscribeFromAuth();
          }
        })
      } else {
        setCurrentUser({userAuth});
      }
    })
  });
  

  const test = () => {
    console.log(currentUser);
  }

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={signInAndSignUp} />
      </Switch>
      <button onClick={test}>test</button>
    </div>
  );
}


export default App;