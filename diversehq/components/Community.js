import Image from 'next/image'
import {community} from "../utils/data";
export default function Community(){
    return(
        <div className="bg-lightblack text-white">
            <div className="lg:flex lg:flex-row md:flex sm:flex sm:flex-col  justify-center items-center pt-32 items-center">
                <Image className="rounded-[25px]" src="https://academy-public.coinmarketcap.com/optimized-uploads/1c07f13ce8e748f6934a28583cca6f5b.jpg" width={500} height={600}  />
               <div className="justify-center items-center text-justify -tracking-2 lg:pl-20 ">
            {/* <h1 className="text-center text-[30px] font-extrabold gradient-text">You like Subreddits?<br /> You will Love Communities in Village</h1> */}
            <h1 className="text-center font-extrabold text-3xl pt-10 pb-10 gradient-text">You Like SubReddits?<br/> You'll Love Communities in Diversehq.</h1>
                   <div className="p-4 text-lg">
                       {community.map((item, index) =>{
                            return( 
                                      <div className="items-center py-5" key={index}>
                                        <div className="flex flex-row space-x-2">
                                        <div className="bg-[#252525] rounded-full p-2 w-14 h-14">
                                        <Image src={item.icon} width={60} height={60} className='p-2'/>
                                        </div>
                                        <p className='w-[500px] text-2xl '>{item.description}</p>
                                        </div>
                                      </div>
                            )
                          }
                        )}
                   </div>
               </div>
            </div>
        </div>
    )
}