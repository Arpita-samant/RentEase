import React, { use } from 'react'
import Title from './Title'
import { assets, dummyProductData } from '../assets/assets'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'
import {motion} from 'motion/react'

const FeaturedSection = () => {

  const navigate = useNavigate()
  return (
    <motion.div
    initial={{opacity: 0, y: 40}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1, ease: "easeOut"}}
    className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
      <motion.div
      initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1, delay: 0.5}}
      >
        <Title title='Our Top Categories' subTitle=''/>
      </motion.div>

      <motion.div
      initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.5, duration: 0.8}}
      className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
         {
        dummyProductData.slice(0,6).map((products)=> (
          <motion.div
          initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.4, ease: "easeOut"}}
          
          key={products._id}>
            

            <ProductCard products={products} />

          </motion.div>
        ))
      }
      </motion.div>

      <button onClick={()=> {
        navigate('/products'); scrollTo(0,0)
      }}
       className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 :bg-gray-50 rounded-md mt-18 cursor-pointer'>
        Explore all Products <img src={assets.arrow_icon} alt="arrow" />
      </button>
     
    </motion.div>
  )
}

export default FeaturedSection
