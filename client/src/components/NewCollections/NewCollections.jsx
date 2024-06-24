import React from 'react'
import new_collection from '../../Assets/new_collections'
import Items from '../Items/Items'

const NewCollections = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center mt-5 mb-4 underline underline-offset-4">NEW COLLECTIONS</h1>
        <hr/>
        <div className=" flex gap-2 ml-20 mr-20 text-center">
            {new_collection.map((item, i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

            })}

        </div>
    </div>
  )
}

export default NewCollections