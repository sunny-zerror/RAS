import React from 'react'

const RedBtn = ({ text }) => {
    return (
        <div>
            <button className='bg-[#EA1B22] text-sm center font-medium px-6 py-2 rounded-lg'>
                <h2 className=' text-xs md:text-base text-white'>{text}</h2>
            </button>
        </div>
    )
}

export default RedBtn