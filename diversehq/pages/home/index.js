import React, { useEffect, useState, useContext } from "react";
import Link from 'next/link';
import {WalletContext} from "../../utils/WalletContext";



const App = () => {
  const [wallet, setWallet] = useContext(WalletContext);

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

  /**
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
  
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setWallet(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
        👋 Welcome to the first step towards creating a Great community!
        </div>

        <Link href='/tokencr' className="waveButton">
          Create Token
        </Link>

        
        {/* * If there is no currentAccount render this button */}
        
        {!wallet && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default App