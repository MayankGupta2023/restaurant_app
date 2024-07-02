'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import img from '../../public/slide2.png'


const Slider = () => {

    const data = [
        {
            id: 1,
            title: 'always fresh & always crispy & always hot',
            image: '/slide1.png'
        },
        {
            id: 2,
            title: 'we deliver your order where ever you are in',
            image: img.src
        },
        {
            id: 3,
            title: 'the best pizza to share with your family',
            image: '/slide3.jpg'
        }
    ]

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setCurrent(prevCurrent => ((prevCurrent) === data.length - 1 ? 0 : prevCurrent + 1)),
            3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row '>

            <div className='flex-1 lg:h-full flex items-center justify-center flex-col text-red-500 font-bold gap-4 '>
                <h1 className='text-3xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-6xl'>
                    {data[current].title}
                </h1>

                <button className='bg-red-500 text-white px-8 py-4'>Order Now</button>

            </div >

            <div className='w-full flex-1 lg:h-full relative'>
                <Image src={data[current].image} alt="" fill className='object-cover' />
            </div>
        </div >
    )
}

export default Slider