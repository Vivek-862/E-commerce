import React from 'react'
import exclusive_image from '../../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="flex ml-20 mr-20 bg-slate-500 mt-24 mb-10">
        <div className="mt-10 ml-24">
            <h1 className="text-3xl">Exclusive</h1>
            <h1 className="text-3xl py-1">Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button className="border">Check Now</button>
           
        </div>
        <div className="">
            <img className="h-45 w-50" src={exclusive_image} alt="" />
        </div>
      
         
    </div>
  )
}

export default Offers