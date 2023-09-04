import React from 'react'
import Image from 'next/image'
import img from '../../assets/images/4 (2).jpg'
import img1 from '../../assets/images/4 (3).jpg'
import img2 from '../../assets/images/18.jpg'

export default function Textanimation() {
    return (
        <div className='main-section1'>
            <div className='image'>
                <Image alt='img-data' src={img2} className='img' />
            </div>
            <div className='image1'>
                <Image alt='img-data' src={img1} className='img1' />
            </div>
            <div className='test-data'></div>
            <h1>Dummy Text</h1>
           <h3>Test Test Test test</h3>
        </div>
    )
}
