import {useState , useContext, useEffect } from 'react';
import {WalletContext} from "../utils/WalletContext";
import TokenSeed from "../contracts/TokenSeed.json";
import {ethers} from "ethers"
import {db} from '../utils/firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'


const tokencr = () => {
    const [wallet] = useContext(WalletContext);
    const [tokenSymbol , setTokenSymbol] = useState("");
    const [communityName, setCommunityName] = useState("");
    const [totalSupply, setTotalSupply] = useState();
    const [amount, setAmount] = useState();
    const [decimal, setDecimal] = useState(18);

    const CONTRACT_ADDRESS =  "0xa5f44E4ac546b87CB75FcaaAf9930f2A0FE6ca70";
    const handleSubmit = async() =>{
      event.preventDefault();
      await createCommunity(totalSupply, amount, 18, communityName, tokenSymbol, wallet);
    }

    const createCommunity = async(totalSupply, amount, decimal, communityName, tokenSymbol, wallet) =>{
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, TokenSeed.abi, signer);
        console.log("Going to pop wallet now to pay gas...")
        
        const res = await contract.create(totalSupply, amount, decimal, communityName, tokenSymbol, wallet, {gasLimit: 3000000, gasPrice: 30000000000});
        const receipt = await res.wait();

        if (receipt.status === 1) {
          console.log("Domain minted! https://mumbai.polygonscan.com/tx/"+res.hash);
          handleFirebase()
        }
        else {
          alert("Transaction failed! Please try again");
        }
  
  
        
      } catch (error) {
        console.error("Error creating Community", error);
      }
    }
    const handleFirebase = async() =>{
      try {
        await addDoc(collection(db, 'communities'), {
          name: communityName,
          symbol: tokenSymbol,
        })
      } catch (err) {
        alert(err)
      }
    }

    useEffect(()=>{
      console.log(wallet);
    },[])
	
  return(
     <div className="w-full max-w-xs p-5">
    <div className="mb-4  items-center ">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="communityName">
        Community Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="communityName" type="text" placeholder="community Name"  onChange={e => setCommunityName(e.target.value)} />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tokenSymbol">
        Token Symbol
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="tokenSymbol" type="text" placeholder="Token Symbol"  onChange={e => setTokenSymbol(e.target.value)}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tokenSymbol">
        Total Supply
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="tokenSymbol" type="number" placeholder="Token Symbol"  onChange={e => setTotalSupply(Number(e.target.value))} />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tokenSymbol">
        Initial Supply
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="tokenSymbol" type="number" placeholder="Token Symbol"  onChange={e => setAmount(Number(e.target.value))} />
    </div>
    <button className="border border:black-500 p-5" onClick={handleSubmit}>Submit </button><br/>
    The Token will be Minted on the Polygon Testnet during the testing Period. Please change your Network to Polygon Testnet.
</div>
  )
}

export default tokencr
