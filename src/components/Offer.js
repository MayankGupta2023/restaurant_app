import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'

const Offer = () => {
    return (
        <div className="bg-black h-screen md:h-[70vh] flex flex-col md:flex-row md:bg-[url('/offerBg.png')]" >

            <div className="flex-1 text-white flex flex-col justify-center items-center text-center gap-8 p-6 ">
                <h1 className='text-5xl font-bold lg:text-6xl'>Delicious Burger and French Fries</h1>
                <p className='xl:text-xl'>Progressively simplify effective e-toilers and process-centric methods
                    of empowerment. Interactively productize premium technologies whereas interdependent
                </p>

                <CountDown />

                <button className='bg-red-500 text-white rounded-md py-3 px-3'>Order Now</button>

            </div>

            <div className='relative flex-1'>
                <Image src='/offerProduct.png' alt='offer' fill className='object-contain' />
            </div>

        </div >
    )
}

export default Offer
