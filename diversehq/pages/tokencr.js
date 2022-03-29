import React from 'react';
import styles from './tokencr.module.css';
import { useEffect } from 'react';

const tokencr = () => {
  useEffect( () => { document.querySelector("body").classList.add("home") } );
  return(
    <div className={styles.container}>
      <div className={styles.card}>
         <div className={styles.content}>
           <h3>01</h3>
           <img src="https://bitcoinchaser.com/wp-content/uploads/2019/02/what-is-erc-20-token_800x480-compressor.jpg" alt="token" />
            <input type="text" placeholder="Token name" />
            <input type="text" placeholder="Token symbol" />
            <input type="number" placeholder="Total Supply" />
           <a href="/graph">Submit</a>
        </div>
      </div>
   </div>
  )
}

export default tokencr
