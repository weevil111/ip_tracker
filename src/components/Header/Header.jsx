import React from 'react'
import styles from "./Header.module.css";
import arrow from "../../assets/icon-arrow.svg"
function Header() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>IP Address Tracker</h2>
      <div className={styles.input_container}>
        <input 
          type="text"
            placeholder="Search for any IP addresses or domain"
          />
        <div className={styles.search_icon}>
          <img src={arrow} />
        </div>
      </div>
    </div>
  )
}

export default Header
