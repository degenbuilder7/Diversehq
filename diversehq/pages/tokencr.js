import React from 'react'

const tokencr = () => {
  return(
    <div class="container">
      <div class="card">
         <div class="content">
           <h2>01</h2>
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
