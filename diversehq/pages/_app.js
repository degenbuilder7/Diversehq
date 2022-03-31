import '../styles/globals.css'
import {WalletProvider} from "../utils/WalletContext" 

function MyApp({ Component, pageProps }) {
  return(
       <Layout>
        <AnimatePresence exitBeforeEnter>
    ``````<WalletProvider>
            <Component {...pageProps} key={router.route} />
          <WalletProvider>
        </AnimatePresence>
      </Layout>
  )
}

export default MyApp
