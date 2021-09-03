import React from 'react'
import styles from "./Information.module.css"

function Information({ipInfo}) {
  if(!ipInfo){
    return (<div>Loading...</div>)
  }
  return (
    <div className={styles.outer_container}>
      <div className={styles.inner_container}>
        <div className={styles.info_container}>
          <div className={styles.title}>IP ADDRESS</div>
          <div className={styles.info}>{ipInfo.ip}</div>
        </div>
          <hr />
        <div className={styles.info_container}>
          <div className={styles.title}>LOCATION</div>
          <div className={styles.info}>{ipInfo.location?.city} <br></br>{ipInfo.location?.postalCode}</div>
        </div>
          <hr />
        <div className={styles.info_container}>
          <div className={styles.title}>TIMEZONE</div>
          <div className={styles.info}>UTC{ipInfo.location.timezone}</div>
        </div>
          <hr />
        <div className={styles.info_container}>
          <div className={styles.title}>ISP</div>
          <div className={styles.info}>{ipInfo.isp}</div>
        </div>
      </div>
    </div>
  )
}

export default Information
