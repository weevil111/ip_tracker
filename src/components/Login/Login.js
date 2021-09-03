import React from 'react'
import SawoLogin from 'sawo-react'
import { firebaseDB } from '../../config/firebase';
import styles from "./login.module.css";

const Login = ({setUser}) => {

  function sawoLoginCallback(payload) {

    // saving user IP details to the firebase
    firebaseDB.collection("users").doc(payload.user_id).set(payload)
    .then(() => console.log("Saved to databse successfully"))
    .catch((err) => console.log("An error occured ",err));
    setUser(payload)
  }
  const sawoConfig = {
    onSuccess: sawoLoginCallback, 
    identifierType: 'email', 
    apiKey: process.env.REACT_APP_SAWO_API_KEY,
    containerHeight: '230px',
  }

  return (
    <div className={styles.login_form}>
      <SawoLogin config={sawoConfig} />
    </div>
  )
}

export default Login