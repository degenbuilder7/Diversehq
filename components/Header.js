import ScrollAnimation from "react-animate-on-scroll"
import Link from 'next/link'

// import styles from "../styles/Home.module.css"
const Header = () => {
    return (
        <>
        {/* <video autoPlay loop muted playsInline className={styles.bg_vid}>
          <source src="/video.mp4" type="video/mp4" />
        </video> */}
         <div className="bg-transparent h-screen flex flex-col justify-center items-center">
           {/* <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'> */}
          <h1 className="font-semibold gradient-text text-6xl lg:text-9xl text-center h-40 md:text-8xl md-h-20 ">Diverse HQ</h1>
          {/* </ScrollAnimation> */}
          <div className="text-white text-center text-[20px] md:text-[25px] font-sans font-medium py-5" >
          <h1>Build<span className="gradient-text"> Community</span> and <span className="gradient-text">Community Tokens</span> on-chain</h1>
          <h1>
            Create <span className="gradient-text">Art</span> and <span className="gradient-text">Meme</span> as <span className="gradient-text">NFT</span>
          </h1>
          <h1><span className="gradient-text">Appreciate</span> Your Favourite <span className="gradient-text">Art</span> or <span className="gradient-text">Meme</span> with <span className="gradient-text">Super Comment</span></h1>
          <div className="pt-5">
          {/* <Link className="bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full w-36" href="/home">Get Inn</Link> */}
          </div>
          </div>
        </div>
       
        </>
    )
}

export default Header
