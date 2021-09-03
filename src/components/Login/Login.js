import React from 'react'
import SawoLogin from 'sawo-react'
import styles from "./login.module.css";

const Login = ({setUser}) => {

  function sawoLoginCallback(payload) {
    console.log(payload)
    setUser(payload)
  }

  const sawoConfig = {
    onSuccess: sawoLoginCallback, 
    identifierType: 'email', 
    apiKey: 'fa4f63cc-2ab3-4c58-a664-0314d52cbaeb',
    containerHeight: '230px',
  }

  return (
    <div className={styles.login_form}>
      <SawoLogin config={sawoConfig} />
    </div>
  )
}

export default Login