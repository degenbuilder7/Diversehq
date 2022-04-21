import React, { useEffect, useState, useContext } from "react";
import Link from 'next/link';
import {WalletContext} from "../../utils/WalletContext";
import { createClient } from '@urql/core';

const query = `
query{
  tokens {
    id
    count
    tokenaddress
    creator
    name
    symbol
    totalSupply
  }
}
`
const client = createClient({
  url: "https://api.thegraph.com/subgraphs/name/kirtirajsinh/diversehq"
})

const App = () => {
  const [wallet, setWallet] = useContext(WalletContext);
  const [tokens, setTokens] = useState([]);

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

  async function fetchData() {
    const response = await client.query(query).toPromise();
    console.log('response:', response)
    setTokens(response.data.tokens);
  }
  useEffect(() => {
    checkIfWalletIsConnected();
    fetchData();
  }, [])

  return (
    
    <div className="h-screen bg-gray-50">
      <div className="flex flex-col ">

      <div className="flex flex-col justify-center items-center">
        <div className="header">
        👋 Welcome to the first step towards <br/> building a Great community!
        </div>
        <div className="pt-8">
        {!wallet ? (
          <button className="border border-black max-w-md hover:bg-gray-400 p-2 rounded-full " onClick={connectWallet}>
            Connect Wallet
          </button>
        ): (
          <button className="border border-black max-w-md hover:bg-red-50 p-2 rounded-full cursor-cell">
          <Link href='/tokencr' className="">
          Create Token
        </Link>
          </button>
        )}
        </div>
      </div>

      <div className="flex flex-col p-16">
      {
  tokens.map((token) => (
    <button className="p-2 hover:bg-red-50" key={token.tokenaddress}>
    <Link href={'/home/' + token.tokenaddress}  className="">
      
      <p className="border rounded-md border-black p-3 ">
        Community Name: {token.name} <br></br>
        Token Symbol: ${token.symbol} <br></br>
        Token Creator: {token.creator}<br/>
        Token Address: {token.tokenaddress}
      </p>
    </Link>
    </button>
  ))
}
      </div>
      </div>
    </div>
  );
}
export default App

