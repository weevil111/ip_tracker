import React, { useState, useEffect } from 'react'
import styles from "./Header.module.css";
import arrow from "../../assets/icon-arrow.svg"
import Information from '../Information/Information';
function Header({ip, setIp, ipInfo}) {

  const [searchField, setSearchField] = useState("")

  function searchIp(){
    if(searchField.trim() === ""){
      return;
    }
    setIp(searchField);
  }

  useEffect(() => {
    setSearchField(ip);
  },[ip])
  
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>IP Address Tracker</h2>
      <div className={styles.input_container}>
        <input 
          type="text"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
            placeholder="Search for any IP addresses or domain"
          />
        <div className={styles.search_icon} onClick={searchIp}>
          <img src={arrow} alt="arrow image"/>
        </div>
      </div>
      <Information ipInfo={ipInfo}></Information>
    </div>
  )
}

export default Header
