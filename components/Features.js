import ScrollAnimation from "react-animate-on-scroll";
import {features} from "../utils/data";
export default function Features(){
    return(
        <div className="text-white text-center bg-lightblack pt-40 p-4 justify-center items-center">
            <ScrollAnimation initiallyVisible={true} animateIn="bounce">
            <h1 className="gradient-text pb-4 text-4xl">Everyone gets a Piece of the Pie.</h1>
            <h2 className="text-center text-3xl mb-32 mt-15">What is there for ... </h2>
            </ScrollAnimation>
            <div className="text-justify  lg:flex lg:flex-row lg:space-x-10 my-6 mx-10 p-3">
                    {features.map((item, index) =>{
                        return(
                            <div key={index} className="justify-center py-6 px-0 items-center ">
                                <h3 className=" font-semibold gradient-text h-20 text-center  mb-10 text-2xl pt-5">{item.feature}</h3>
                                <div>
                                    <p className="text-lg">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}