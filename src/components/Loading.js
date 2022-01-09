import React from 'react'

export const Loading = () => {
    return (
        <div className='flex h-screen'>
            <p className='m-auto font-bold text-5xl'>
                <i className='fas fa-circle-notch fa-spin text-yellow-600'></i>
            </p>
        </div> 
    )
}
