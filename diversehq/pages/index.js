import Header from "../components/Header.js"
import Nav from "../components/Nav.js"
import Community from "../components/Community.js"
import Features from "../components/Features.js"
import styles from "../styles/Home.module.css"
import { useEffect, useRef, useState } from "react"
import Join from "../components/Join.js"
import ScrollAnimation from "react-animate-on-scroll"


const Home = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [once,setOnce] = useState(true);
  var audioEl = null;
  // setTimeout(() => {
  //   if(typeof window === 'object'){
  //     audioEl = document.getElementById("a1");
  //     audioEl.volume  = 0.2;
  //     console.log("audio playing");
  //     audioEl.play();
  //   }
  //   setOnce(false);
  // }, 5000);

  const playAudioOnce = () => {
    if(typeof window === 'object'){
      audioEl.volume  = 0.2;
      console.log("audio playing");
      audioEl.play();
      setAudioPlaying(true);
      document.removeEventListener("click", playAudioOnce);
    }
  }

  useEffect(() => {
    if(once){
    document.addEventListener('click', playAudioOnce);
    setOnce(false);
    }
    if(typeof window === 'object'){
      audioEl = document.getElementById("a1");
      audioEl.volume  = 0.2;
    }
  })
  

  const onAudioClick = () => {
    audioEl = document.getElementById("a1");
      if(audioPlaying){
        audioEl.pause();
        setAudioPlaying(false);
      }else{
        audioEl.play();
        setAudioPlaying(true);
      }
  }

  return (
    <div>
      <div className="bg-transparent">
      <audio autoPlay loop id='a1' src="/Lofi.mp3">
      </audio>
        <div className="absolute  bottom-10 right-5 rounded-full bg-gradient-to-tr from-amber-500 to-fuchsia-700 p-1 ease-in-out duration-300 hover:cursor-pointer hover:p-2" onClick={onAudioClick} >
          {audioPlaying && <img src="/PlayAudio.png" className="rounded-full bg-transparent w-[40px] h-[40px]" />}
          {!audioPlaying && <img src="/PauseAudio.png" className="rounded-full bg-transparent w-[40px] h-[40px]  " />}
        </div>
      <video autoPlay loop muted playsInline className={styles.bg_vid}>
          <source src="/Black.mp4" type="video/mp4" />
        </video>
      <Nav />
      <Header />
      </div>
      <div className="flex flex-col">
      <Community />
      {/* <Features /> */}
      <Join />
      </div>
    </div>
  )
}

export default Home
