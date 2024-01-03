import React from 'react'

const Items = (props) => {
  return (
    <div className="bg-gray-200 ">
        <img className="hover:shadow-2xl hover:rounded-xl hover:cursor-pointer" src={props.image} alt="" />
        <p className="px-6">{props.name}</p>
        <div>
          <div className="text-green-900 text-xl font-bold hover:cursor-pointer">
            Rs.{props.new_price} /-
          </div>
          <div className="text-red-600 line-through ">
            Rs.{props.old_price} /-
          </div>
        </div>
    </div>
  )
}

export default Items