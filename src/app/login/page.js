import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LoginPage = () => {
    return (
        <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
            <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[80%] md:w-full lg:w-3/4 2xl:w-2/3'>
                <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
                    <Image src="/loginbg.png" alt="" fill className='object-cover' />

                </div>
                <div className='px-10 py-4 flex flex-col gap-4 h-2/3 md:w-1/2'>
                    <h1 className='font-bold text-xl'>Welcome</h1>
                    <p>Login or create account using social buttons</p>
                    <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
                        <Image src="/google.png" alt="{product.name}" width={20} height={20} className='object-contain' />
                        <span>Signin with Google</span>
                    </button>

                    <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md'>
                        <Image src="/facebook.png" alt="{product.name}" width={20} height={20} className='object-contain' />
                        <span>Signin with Facebook</span>
                    </button>

                    <p className='mt-2'>Have a problem? <Link href="/" className='underline'>Contact Us</Link></p>

                </div>
            </div>
        </div>
    )
}

export default LoginPage
