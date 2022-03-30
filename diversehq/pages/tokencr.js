import React from 'react';
import styles from './tokencr.module.css';
import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const tokencr = () => {
  // useEffect( () => { document.querySelector("body").classList.add("home") } );
  if(typeof window === 'object'){
    const element = document.querySelector("#tiltme");
    VanillaTilt.init((element), {
    max: 25,
    speed: 400,
    glare: true,
    });
  }
  
	
  return(
    <div className={styles.body}>
      <div className={styles.container} id='tiltme'>
        <div className={styles.card}>
          <div className={styles.content}>
            <img src="https://bitcoinchaser.com/wp-content/uploads/2019/02/what-is-erc-20-token_800x480-compressor.jpg" alt="token" />
            <input type="text" placeholder="Token name" className={styles.txt}/>
            <input type="text" placeholder="Token symbol" className={styles.txt} />
            <input type="number" placeholder="Total Supply" className={styles.txt} />
            <a href="/graph">Submit</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default tokencr
