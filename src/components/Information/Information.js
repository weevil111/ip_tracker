import React from 'react'
import styles from "./Information.module.css"

function Information() {
  return (
    <div className={styles.outer_container}>
      <div className={styles.inner_container}>
        <div className={styles.info_container}>
          <div className={styles.title}>IP ADDRESS</div>
          <div className={styles.info}>192.212.174.101</div>
        </div>
          <hr />
        <div className={styles.info_container}>
          <div className={styles.title}>LOCATION</div>
          <div className={styles.info}>Brooklyn, NY 10001</div>
        </div>
          <hr />
        <div className={styles.info_container}>
          <div className={styles.title}>TIMEZONE</div>
          <div className={styles.info}>UTC-05:00</div>
        </div>
          <hr />
        <div className={styles.info_container}>
          <div className={styles.title}>ISP</div>
          <div className={styles.info}>SpaceX Starlink</div>
        </div>
      </div>
    </div>
  )
}

export default Information
