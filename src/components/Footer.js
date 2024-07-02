import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='h-12 md:h-24 p-4 lg:px-10 xl:px-32 text-red-500 flex items-center justify-between'>
            <Link href="/" className='font-bold text-xl'>MASSIMO</Link>
            <p className='uppercase'> (c) All Rights REserved</p>
        </div>
    )
}

export default Footer
