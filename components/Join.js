// import Image from "next/image";
import {useState} from "react"
const Airtable = require('airtable');
const base = new Airtable({apiKey: "keyX217mb8lxAgZS6"}).base("appH3euv1Dzz8CQx1");


const Join = () =>{
    const [mail, setMail] = useState('')
    const [joined,setJoined] = useState(false);
    const [joining,setJoining] = useState(false);
    const handleSubmit = async () => {
        setJoining(true);
        try{
            base('join').create([
              {
                "fields":{'emails':mail},
              }],function (err, records){
                if(err){
                  console.error(err);
                  return;
                }
                setJoined(true);
                setJoining(false);
              });
          }catch(error){
            console.error(error);
            setJoining(false);
          }
    }
    return(
        <>
        <div className="bg-lightblack flex flex-col text-white py-40 justify-center">
            {/* <form className=" shadow-md rounded  flex justify-center p-6 space-x-3" onSubmit={handleSubmit}> */}
                {/* <label>Join now for further updates</label> */}
                <div className="gradient-text text-6xl pb-10  text-center justify-center">Join now for further updates</div>
                <div className="flex flex-row  space-x-2 justify-center items-center mt-8">
                  <>
                <input type="email" placeholder="Email" name="join" onChange= {e => setMail(e.target.value)} value={mail} className="shadow-sm shadow-[#ffeaea] rounded-full bg-[#272626] h-8 w-72 pl-5 placeholder:white items-center justify-center" />
                {!joined && !joining && <button className="bg-gradient-to-tr from-amber-500 to-fuchsia-700 w-16  rounded-full justify-center items-center h-8" onClick={handleSubmit}>Join</button>}
                {/* {joined &&  !joining &&<Image src='/Tick.png' width={35} height={30}/>} */}
                {joined && !joining && <div className="text-white"> You will be notified</div>}
                {/* {joining && <Image src='/Loading.gif' width={200} height={13}/>} */}
                </>
                </div>
                {/* <div className="bg-blurple content-center  rounded-full">
                <Image src="/DiscordWhite.png" width={35} height={35} />
                </div> */}
            {/* </form> */}
        </div>
        </>
    )
}

export default Join