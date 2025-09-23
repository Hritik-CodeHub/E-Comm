import NikeXPro from "../../assets/products/NikeAir5.png";
import type { FC } from 'react'
const Carousel:FC = () => {
  return (
    <div className='bg-[#40BFFF] h-90 text-white flex flex-row justify-between md:pt-26 relative'>
        <div className='p-15'>
            <h1 className='text-3xl font-medium'>Adidas Men Running</h1>
            <h1 className='text-3xl font-medium'>Sneakers</h1>
            <p className='text-[12px] font-normal'>Performance and design. Taken right to the edge</p>
        <div>
            <p className='text-[12px] font-semibold'>SHOP NOW</p>
            <hr className='w-10 border border-white'/>
        </div>
        </div>
            <div className="flex  " >
                <img className='m-auto h-50 md:h-[221] w-[442]' src={NikeXPro} alt="" />
            </div>
        
    </div>
  )
}

export default Carousel