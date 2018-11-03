import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'
import * as firebase from 'firebase'
// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAnv9TJnW-QRLXyEFHOT_-tl6IKBRG20iA",
    authDomain: "lulu-bc5e0.firebaseapp.com",
    databaseURL: "https://lulu-bc5e0.firebaseio.com",
    projectId: "lulu-bc5e0",
    storageBucket: "lulu-bc5e0.appspot.com",
  };
  firebase.initializeApp(config);

  // create our app's navigation stack
  const App = createSwitchNavigator(
    {
      Loading,
      SignUp,
      Login,
      Main
    },
    {
      initialRouteName: 'Loading'
    }
  )
  export default App