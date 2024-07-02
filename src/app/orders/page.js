import React from 'react'

const OrderPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40'>
            <table className='w-full border-separate border-spacing-3'>
                <thead>
                    <tr className='text-left'>
                        <th className='hidden md:block'>Order ID</th>
                        <th>Order Date</th>
                        <th>Price</th>
                        <th className='hidden md:block'>Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-sm md:text-base bg-red-50'>
                        <td className='hidden md:block py-6 px-1'>349h134</td>
                        <td className='py-6 px-1'>21/5/6</td>
                        <td className='py-6 px-1'>$$108.89</td>
                        <td className='hidden md:block py-6 px-1'>Big Burger, Pizza, coca cola</td>
                        <td className='py-6 px-1'>Delievred</td>
                    </tr>

                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>349h134</td>
                        <td className='py-6 px-1'>21/5/6</td>
                        <td className='py-6 px-1'>$$108.89</td>
                        <td className='hidden md:block py-6 px-1'>Big Burger, Pizza, coca cola</td>
                        <td className='py-6 px-1'>Delievred</td>
                    </tr>
                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>349h134</td>
                        <td className='py-6 px-1'>21/5/6</td>
                        <td className='py-6 px-1'>$$108.89</td>
                        <td className='hidden md:block py-6 px-1'>Big Burger, Pizza, coca cola</td>
                        <td className='py-6 px-1'>Delievred</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default OrderPage
