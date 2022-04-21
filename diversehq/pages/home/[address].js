import { Token } from 'graphql';
import { useRouter } from 'next/router'
import {useEffect, useState, useReducer} from "react"
import { createClient, Client } from '@urql/core';
import {Web3Storage} from "web3.storage"
import Image from 'next/image'


const client = createClient({
  url: "https://api.thegraph.com/subgraphs/name/kirtirajsinh/diversehq"
})


const Community = ()=>{
  const router = useRouter();
  const {address} = router.query
  const [files, setFiles] = useState([])
  const [messages, showMessage] = useReducer((msgs, m) => msgs.concat(m), [])
  const [tokens, setTokens] = useState('')

    console.log(address)

    const handleSubmit= async(event) => {
      event.preventDefault()
      const token = process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY
      showMessage('> 📦 creating web3.storage client')
      const client = new Web3Storage({ token })
  
      // showMessage('> 🤖 chunking and hashing the files (in your browser!) to calculate the Content ID')
      const cid = await client.put(files, {
        onRootCidReady: localCid => {
          // showMessage(`> 🔑 locally calculated Content ID: ${localCid} `)
          // showMessage('> 📡 sending files to web3.storage ')
        },
        onStoredChunk: bytes => showMessage(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
      })
      showMessage(`> ✅ web3.storage now hosting ${cid}`)
      showLink(`https://dweb.link/ipfs/${cid}/${files[0].name}`)
  
      // showMessage('> 📡 fetching the list of all unique uploads on this account')
      let totalBytes = 0
      for await (const upload of client.list()) {
        totalBytes += upload.dagSize || 0
      }
      // showMessage(`> ⁂ ${totalBytes.toLocaleString()} bytes stored!`)
    };

    function showLink (url) {
      showMessage(<span>&gt; 🔗 <a href={url}>{url}</a></span>)
    }

    const query = `
query{
  tokens(where:{tokenaddress:"${address}"}) {
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

    async function fetchData(event) {
        const response = await client.query(query).toPromise();
        console.log('response:', response)
        // setTokens(response.data.tokens[0])
      }
      useEffect(() => {
        fetchData();
      }, [])

    return(
        <div>
            {/* <h1>Community Name: {token.name}</h1> */}
         <form  onSubmit={handleSubmit}>
        <label htmlFor='filepicker'>Pick files to store</label>
        <input type='file' id='filepicker' name='fileList' onChange={e => setFiles(e.target.files)} />
        <input type='submit' value='Submit' id='submit' />
      </form>
      <div id='output'>
        &gt; ⁂ waiting for form submission...
        {messages.map((m, i) => <div key={m + i}>{m}</div>)}
      </div>
        </div>
    )
}

export default Community;