import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'

const Featured = () => {
    return (
        <div className='w-screen overflow-x-scroll text-red-500'>
            <div className='w-max flex'>

                {featuredProducts.map((item) => (
                    <div key={item.id} className='w-screen h-[60vh] xl:h-[80vh] flex flex-col items-center justify-around p-4 xl:py-8 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw]'>

                        <div className='relative flex-1 w-full '>

                            <Image src={item.img}
                                alt=""
                                fill
                                className="object-contain"
                            />

                        </div>

                        <div className='flex-1 flex flex-col item-center justify-center text-center gap-4'>
                            <h1 className='text-xl font-bold uppercase md:pt-2'>{item.title}</h1>
                            <p className='p-4'>{item.desc}</p>
                            <span className='text-xl font-bold'>${item.price}</span>
                            <button className='bg-red-500 text-white p-2 rounded-md '> Add To Cart </button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Featured
