import '../styles/globals.css'
import WalletProvider from "../utils/WalletContext" 
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'https://api.thegraph.com/subgraphs/name/kirtirajsinh/diversehq'
});


function MyApp({ Component, pageProps }) {
  return( 
  <WalletProvider>
    <Provider value={client}>
    <Component {...pageProps} />
    </Provider>
  </WalletProvider>
  )
}

export default MyApp
