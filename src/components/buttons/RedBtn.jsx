import React from 'react'

const RedBtn = ({ text }) => {
    return (
        <div>
            <button className='bg-[#EA1B22] text-sm center font-medium px-6 py-2 rounded-lg'>
                <p className='text-white'>{text}</p>
            </button>
        </div>
    )
}

export default RedBtn