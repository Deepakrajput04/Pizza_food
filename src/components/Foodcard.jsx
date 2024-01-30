import React from 'react'
import { CiStar } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/slice/Cartslice';

const Foodcard = ({id, name, price, desc, img, rating, handleToast}) => {

  const dispatch = useDispatch();

  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
        <img src={img} alt='' className='w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'/>
        <div className='text-sm flex justify-between'>
            <h2>{name}</h2>
            <span className='text-green-500 '>₹{price}</span>
        </div>
        <p className='text-sm font-normal'>{desc.slice(0,50)}....</p>
        <div className='flex justify-between'>
            <span className='flex justify-center items-center'>
            <CiStar className='mr-1 text-yellow-500' />{rating}
            </span>
            <button onClick={()=> {
              dispatch(addtocart({ id, name, price, rating, img, qty: 1 }));
              handleToast(name);
            } } className='p-1  text-white bg-green-500 hover:bg-green-500 rounded-lg text-sm'>Add to cart</button>
        </div>
    </div>
  )
}

export default Foodcard