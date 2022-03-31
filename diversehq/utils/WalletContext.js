import {useState, createContext} from "react";

export const WalletContext = createContext([]);

export const WalletProvider = ({children}) => {
    const [wallet, setWallet] = useState('');
    return(
        <WalletContext.Provider value={[wallet, setWallet]}>
            {children}
        </WalletContext.Provider>
    )
}
