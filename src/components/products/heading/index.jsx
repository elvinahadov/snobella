import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const Heading = () => {
  return (
    <div className='w-[1128px] flex items-center justify-between'>
        <p className='text-[40px] font-medium text-[#212121]'>Shoulder bags</p>
        <div className='flex items-baseline gap-[26px]'>
            <p className='text-[#212121] opacity-90 text-[16px] font-normal'>320 results</p>
            <div className='py-2 px-4 flex items-center border border-[#D0D0D0] rounded-lg'>
                <p>Featured</p>
                <MdKeyboardArrowDown />
            </div>
            <div>
        <button className="py-2 px-4 rounded-lg border-[1px] border-[#D0D0D0]">Reset Filters</button>
      </div>
        </div>

    </div>
  )
}

export default Heading