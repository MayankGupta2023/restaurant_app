import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Cart from './Carticon'
import Image from 'next/image'

const Navbar = () => {

    const user = false;

    return (
        <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-10 xl:px-32'>

            <div className='hidden md:flex gap-4 flex-1'>
                <Link href='/'>Home</Link>
                <Link href='/menu'>Menu</Link>
                <Link href='/'>Contact</Link>
            </div>

            <div className='text-xl md:font-bold flex-1 md:text-center'>
                Massimo
            </div>



            <div className='hidden md:flex gap-4 items-center flex-1 justify-end'>

                <div className='md:absolute top-3 r-2 lg:static flex items-center bg-orange-300 px-1 rounded'>
                    <Image src='/phone.png' alt='logo' width={20} height={20} />
                    <span>123 456 789</span>
                </div>

                {!user ? <Link href='/login'>Login</Link> :
                    <Link href='/orders'>Orders</Link>}

                <Cart />


            </div>

            <div className='md:hidden'>
                <Menu />
            </div>


        </div>
    )
}

export default Navbar
