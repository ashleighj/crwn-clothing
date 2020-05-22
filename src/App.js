import React from "react";
import { Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header/header.component";
import SignInUp from "./components/sign-in-up/sign-in-up.component";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            console.log(this.state)
          );
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
