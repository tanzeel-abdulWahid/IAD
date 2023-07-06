import React from 'react'
import styles from '../style'
const InsightsCard = ({heading, amount, icon}) => {
    return (
        <div className='flex justify-center gap-x-11 md:gap-x-0 md:justify-between md:w-[30%] p-5 md:p-10 bg-white rounded-lg'>
            {/* <HomeOutlined className='text-4xl text-lightGreen' /> */}
            {icon}
            <div className='flex flex-col gap-y-2'>
                <h1 className='font-normal text-sm lg:text-lg pl-7'>{heading}</h1>
                <h1 className={`${styles.boldText} text-center`}>{amount} </h1>
            </div>
        </div>
    )
}

export default InsightsCard