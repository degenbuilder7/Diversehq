import {useState, createContext, useEffect} from "react";

export const WalletContext = createContext([]);

 const WalletProvider = ({children}) => {
    const [wallet, setWallet] = useState('');

    const checkIfWalletIsConnected = async () => {
        try {
          const { ethereum } = window;
    
          if (!ethereum) {
            console.log("Make sure you have metamask!");
            return;
          } else {
            console.log("We have the ethereum object", ethereum);
          }
    
          const accounts = await ethereum.request({ method: "eth_accounts" });
    
          if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account:", account);
            setWallet(account);
          } else {
            console.log("No authorized account found")
          }
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() =>{
        checkIfWalletIsConnected()
      },[])
    return(
        <WalletContext.Provider value={[wallet, setWallet]}>
            {children}
        </WalletContext.Provider>
    )
}
export default WalletProvider;