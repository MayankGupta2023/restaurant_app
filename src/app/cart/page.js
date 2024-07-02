import React from 'react'
import Image from 'next/image'

const CartPage = () => {
    return (
        <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row-reverse'>
            <div className='h-1/2 p-4 flex flex-col gap-4 overflow-y-scroll lg:h-full lg:w-2/3 '>

                <div className='flex items-center justify-between mb-4 '>

                    <Image src="/temporary/p1.png" alt="{product.name}" width={100} height={100} />
                    <div>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$45.99</h2>
                    <span className='cursor-pointer'>x</span>
                </div>

                <div className='flex items-center justify-between mb-4'>

                    <Image src="/temporary/p1.png" alt="{product.name}" width={100} height={100} />
                    <div>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$45.99</h2>
                    <span className='cursor-pointer'>x</span>
                </div>

                <div className='flex items-center justify-between mb-4 '>

                    <Image src="/temporary/p1.png" alt="{product.name}" width={100} height={100} />
                    <div>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$45.99</h2>
                    <span className='cursor-pointer'>x</span>
                </div>





            </div>

            <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 '>
                <div className='flex justify-between'>
                    <span className=''>Subtotal</span>
                    <span>$45.99</span>
                </div>

                <div className='flex justify-between'>
                    <span className=''>Service Cost</span>
                    <span>$00.00</span>
                </div>

                <div className='flex justify-between'>
                    <span className=''>Delivery Cost</span>
                    <span className='text-green-500'>Free</span>
                </div>

                <div className=''>

                    <hr className='' />

                    <div className='flex justify-between my-2'>
                        <span className=''> Total</span>
                        <span className='font-bold'>$81.99</span>
                    </div>

                </div>

                <button className='bg-red-500 text-white text-sm p-2 rounded-md self- '>Checkout</button>




            </div>
        </div>
    )
}

export default CartPage
