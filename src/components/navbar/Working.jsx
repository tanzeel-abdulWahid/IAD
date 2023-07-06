import React from 'react'
import styles from '../../style'

const Working = () => {

    const working = [
        { number: "01", heading: "Browse", desc: "Sign up in less than 3 minutes and browse our collection of properties" },
        { number: "02", heading: "Purchase", desc: "Buy a piece of the ones you love, starting from only AED 500" },
        { number: "03", heading: "Own", desc: "Sit back and track your income and investments online" },
        { number: "04", heading: "Exit", desc: "Hold, exit or resell your stake in a way that suits your financial goals" },
    ]
    return (
        <div className='bg-white mt-16'>
            <div className='text-center p-2 pt-14'>
                <h1 className='textHeading'>How it works</h1>
                <h1 className='textDesc '>Stake is the key to unlocking your dream home</h1>
            </div>


            <div className={`${styles.boxWidth} md:m-auto flex flex-wrap md:flex-nowrap md:justify-evenly pl-9 md:pl-5 p-5 md:p-10 mb-10 bg-white`}>
                {
                    working.map((work, i) => (
                        <div data-aos="zoom-in" key={i} className="cursor-pointer mt-2">
                            <h1 className='text-3xl pb-2 font-bold bg-creamWhite p-2 rounded-lg w-fit'>{work.number}</h1>
                            <h1 className='text-lg md:text-xl pt-2 pb-2 font-bold'>{work.heading}</h1>
                            <h1 className='text-xs  lg:text-sm'>{work.desc}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Working