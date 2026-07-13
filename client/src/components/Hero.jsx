import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import {motion} from 'motion/react'

const Hero = () => {


    const [pickupLocation, setPickupLocation] = useState('')
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.8}}
    
    className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>

        <motion.h1
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}
         className='text-4xl md:text-5x1 font-semibold'>Affordable Furniture & Appliance on Rent</motion.h1>
        <motion.form
        initial={{scale: 0.95, y: 50, opacity: 0}}
        animate={{ scale: 1, y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}
        
        action="" className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-1g md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8">
                <div className='flex flex-col items-start gap-2'>
                    <select required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)} >
                        <option value="">Pickup Location</option>
                        {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
                    </select>
                    <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Please select location'}</p>
                </div>

                <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="pickup-date">Pick-up Date</label>
                    <input type="date" id='pickup-date' min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required />
                </div>

                <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="delivery-date">Delivery Date</label>
                    <input type="date" id='delivery-date' className='text-sm text-gray-500' required />
                </div>

            </div>

            <button className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>
                    <img src={assets.search_icon} alt="search" className='brightness-300'/>
                    Search</button>

        </motion.form>

        <motion.img
        initial={{y: 100, opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.6}}

    src={assets.main}
    alt="Home Appliances"
    className="mt-10 w-68 md:w-85 lg:w-99 object-contain"
  />
      
    </motion.div>
  )
}

export default Hero
