import React from 'react'
import hand_icon from '../../Assets/hand_icon.png';
import arrow_icon from '../../Assets/arrow.png';
import hero_image from '../../Assets/hero_image.png';
const Hero = () => {
  return (
    <div className="flex justify-around w-full h-auto bg-gradient-to-r from-orange-400 to-orange-300 ">
        <div className="pt-20 font-semibold text-xl">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
            <div className="pt-14 flex  text-6xl">
                 <p className="">new</p>

                <img className="h-[80px] w-[78px] ml-6  " src={hand_icon} alt=""/>
               

            </div>
            <p className="text-6xl">collections</p>
            <p className="text-6xl">for everyone</p>

            </div>
            <div className="flex justify-center text-white bg-sky-600 py-2 mt-8 px-4 border rounded-lg">
              <div>Latest Collection</div>
              <img className="h-[20px] w-[50px] ml-4 pt-2" src={arrow_icon} alt="" />  
            </div>
        </div>
        <div className="">
          <img className="h-[550px] w-[400px]" src={hero_image} alt="" />  
          #img
        </div>
    </div>
  )
}

export default Hero