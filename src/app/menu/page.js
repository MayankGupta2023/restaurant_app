import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'

const MenuPage = () => {
    return (
        <div className='p-4 xl:px-32 lg:px-20 md:h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center  '>
            {menu.map(category => (
                <Link href={`/menu/${category.slug}`} key={category.id} style={{ backgroundImage: `url(${category.img})` }} className='w-full h-1/2 bg-cover p-8 md:h-2/5'>
                    <div className={`text-${category.color} w-1/2`}>
                        <h1 className='uppecase font-bolt text-3xl'>  {category.title}  </h1>
                        <p className='text-sm my-8'>{category.desc}</p>
                        {/* <button className={`hidden 2xl:block bg-${category.color === "white" ? "white" : category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded`}>Explore</button> */}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuPage
