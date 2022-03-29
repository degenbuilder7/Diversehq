import '../styles/globals.css'
import {WalletProvider} from "../utils/WalletContext" 

function MyApp({ Component, pageProps }) {
  return( 
  <WalletProvider>
    <Component {...pageProps} />
  </WalletProvider>)
}

export default MyApp
