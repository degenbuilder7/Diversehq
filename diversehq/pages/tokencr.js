import {useState , useContext, useEffect } from 'react';
import styles from './tokencr.module.css';
import VanillaTilt from 'vanilla-tilt';
import {WalletContext} from "../utils/WalletContext";
import TokenSeed from "../contracts/TokenSeed.json";
import {ethers} from "ethers"

const tokencr = () => {
    const [wallet] = useContext(WalletContext);
    const [DaoName, setDaoName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [decimal, setDecimal] = useState('18')
    const [totalSupply, setTotalSupply] = useState('');
    if(typeof window === 'object'){
      const element = document.querySelector("#tiltme");
      VanillaTilt.init((element), {
      max: 25,
      speed: 400,
      glare: true,
      });
    }
    const  CONTRACT_ADDRESS = "0xbd8f2441a807FA841B2fB23893F5dE31c1433fBA";

    const handleSubmit = async() =>{
      event.preventDefault();
      if(!DaoName || !decimal || !symbol || !totalSupply){
        console.log("Fill all the required Field");
        return;
      }

      await createDao(DaoName, 18, symbol, totalSupply, wallet);
    }

     const createDao = async (DaoName, decimal, symbol, totalSupply, currentAccount) =>{
       try{
       const {ethereum} = window;
       if(ethereum){
         const provider = new ethers.providers.Web3Provider(ethereum);
         const signer = provider.getSigner();
         const contract = new ethers.Contract(CONTRACT_ADDRESS, TokenSeed.abi, signer);

         console.log("Going to pop wallet now to pay gas...")
         let tx = await contract.create(totalSupply,100000, decimal, DaoName, symbol, currentAccount);
         const receipt = await tx.wait();

         if (receipt.status === 1) {
           console.log("Domain minted! https://mumbai.polygonscan.com/tx/"+tx.hash);
           
          //  setDaoName('');
          //  setSymbol('');
          //  setTotalSupply('');
         }
         else {
           alert("Transaction failed! Please try again");
         }
   
       }
     }
       catch(error){
         console.log(error);
       }
     }
  useEffect(() =>{
    console.log(wallet);
    console.log("Create Token");
  },[]);
	
  return(
    <div className={styles.container} id="tiltme">
      <div className={styles.card}>
         <div className={styles.content}>
           {/* <img src="https://bitcoinchaser.com/wp-content/uploads/2019/02/what-is-erc-20-token_800x480-compressor.jpg" alt="token" /> */}
           <form>
            <label>Community Name:
                <input type="text" name="communityName" value={DaoName} onChange={(e) => setDaoName(e.target.value)} placeholder="Add your Community Name" />
            </label>
            <label>Symbol:
                <input type="text" name="CommunitySymbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} placeholder="Add your Token Symbol" />
            </label>
            <label>Total Supply:
                <input type="number" name="TotalSupply" value={totalSupply} onChange={(e) => setTotalSupply(e.target.value)} placeholder="Add your Token Symbol" />
            </label>
            <button onClick={handleSubmit}>Create Token</button>

        </form>
        </div>
      </div>
    </div>
  )
}

export default tokencr
