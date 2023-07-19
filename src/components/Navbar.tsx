import React from 'react'

export default function Navbar() {
    return (
        <div className='flex flex-row items-center justify-between'>
            <div>
                <img src="freeskout.png" alt="internStock" className="w-[41] h-[50] resize" style={{
                    width: '41px',
                    height: '50px'
                }} />
            </div>
            <div>
                <a href="#brand"
                    className='text-gray-500 hover:text-white p-4 uppercase font-light transition-all ease-in-out duration-200'>Brand</a>
                <a href="#brand"
                    className='text-gray-500 hover:text-white p-4 uppercase font-light transition-all ease-in-out duration-200'>Influencers</a>
                <a href="#brand"
                    className='text-gray-500 hover:text-white p-4 uppercase font-light transition-all ease-in-out duration-200'>Pricing</a>
                <a href="#brand"
                    className='text-gray-500 hover:text-white p-4 uppercase font-light transition-all ease-in-out duration-200'>Blogs</a>
                <a href="#brand"
                    className='text-gray-500 hover:text-white p-4 uppercase font-light transition-all ease-in-out duration-200'>Contact</a>
            </div>
        </div>
    )
}
