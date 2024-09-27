import React from 'react'
import { BsTruck } from "react-icons/bs";
import Entrance from "../../../assets/icons/entrance.svg"
import Card from "../../../assets/icons/credit-card.svg"
import { CiLock } from "react-icons/ci";

const GraySec = () => {
  return (
    <section className='bg-[#F7F7F7]'>
        <div className='container max-w-[1128px] mx-auto flex items-center justify-center gap-[47px] py-12'>
            <div className='flex gap-2 items-center'>
                <BsTruck className='text-[#007878] text-[48px]'/>
                <p className='text-black font-medium'>Guaranteed delivery</p>
            </div>
            <div className='flex gap-2 items-center'>
                <img src={Entrance}/>
                <p className='text-black font-medium'>Do not come back</p>
            </div>
            <div className='flex gap-2 items-center'>
                <CiLock className='text-[#007878] text-[48px]'/>
                <p className='text-black font-medium'>Guaranteed delivery</p>
            </div>
            <div className='flex gap-2 items-center'>
                <img src={Card}/>
                <p className='text-black font-medium'>Guaranteed delivery</p>
            </div>
        </div>
    </section>
  )
}

export default GraySec
