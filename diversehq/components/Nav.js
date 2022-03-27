import Image from "next/image"
import ScrollAnimation from "react-animate-on-scroll";

const Nav = () =>{
    return(
        <div className=" bg-transparent flex flex-row text-white justify-between p-4 items-baseline ">
            <h1 className="tracking-wider font-bold text-lg">Diverse HQ</h1>
            <div className="flex flex-row text-sm font-light space-x-1">
                <button onClick={() => {
                    if(typeof window !== 'undefined'){
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }
                }} className="bg-gradient-to-tr from-amber-500 to-fuchsia-700 w-40 mr-5 px-2 py-1 text-2xl rounded-full ease-in-out duration-300  hover:w-48">Join</button>
                <a href="https://discord.gg/sEe7KWne" className="bg-blurple content-center pt-1 px-1 rounded-full ">
                <Image src="/DiscordWhite.png"  width={35} height={35} />
                </a>
            </div>
        </div>
    )
}

export default Nav