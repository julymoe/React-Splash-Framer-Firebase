import React from 'react'
import { Images } from '../components/Images'

export default function Gallery() {
    return(
        <section className="flex justify-center">
            <div className='w-10/12'>
                <Images />
            </div>
        </section>
    )
}
