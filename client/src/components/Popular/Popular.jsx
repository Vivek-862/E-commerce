import React from 'react'
import data_product from '../../Assets/data'
import Items from '../Items/Items'
 
const Popular = () => {
  return (
    <div className="">
        <h1 className="text-3xl font-bold text-center mt-5 mb-4 underline underline-offset-4">POPULAR IN WOMEN</h1>
        <hr/>
        
        <div className=" flex gap-2 ml-20 mr-20 text-center">
           {data_product.map((item, i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
           })} 
        </div>

    </div>
  )
}

export default Popular