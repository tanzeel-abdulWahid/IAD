import React from 'react'
import styles from '../../style'
import income from '../../assets/income.svg'
import value from '../../assets/value.svg'
import property from "../../assets/property.jpeg"
import { UserOutlined } from '@ant-design/icons';

const Strategy = () => {
    const data = [
        { heading: "9%", text: "gross yield" },
        { heading: "9%", text: "Capital appreciation" },
        { heading: "9%", text: "Total ROI" },

    ]
    return (
        <div>
            <div className='text-center p-2 pt-14'>
                <h1 className='textHeading'>So, how will you make money?</h1>
                <h1 className='textDesc'>Stake was built to empower everyone to own and build wealth through real estate</h1>
            </div>

            <div className={`${styles.boxWidth} m-auto flex justify-evenly flex-col gap-y-4 md:flex-row items-center md:items-start gap-x-7 p-5 md:p-10 mb-10`}>
                <div className=" mt-20 bg-white p-5 h-fit rounded-lg w-full md:w-[30%] text-center md:text-start cursor-pointer hover:shadow-xl shadow-md">
                    <img className='text-3xl pb-2 font-bold bg-creamWhite p-2 rounded-lg w-full h-24 md:h-auto md:w-fit ' src={income} />
                    <h1 className='text-xl pt-2 pb-2 font-bold'>Monthly rental <br /> income</h1>
                    <h1 className='text-xs lg:text-sm text-gray-600'>earn the money and chill</h1>
                </div>

                {/* img card */}
                <div data-aos="zoom-in-up" className="flex flex-col bg-white cursor-pointer rounded-lg hover:shadow-xl shadow-md hover:-translate-y-2 transition-all duration-300">
                    <div class="h-64 overflow-hidden rounded-t-lg">
                        <img alt="content" class="object-cover object-center h-full w-full" src={property} />
                    </div>

                    <div className={`${styles.flexCenter} absolute p-2 bg-white rounded-r-lg gap-x-3 mt-2`}>
                        <UserOutlined />
                        <h1 className='text-2xl pb-1 font-bold'>rented</h1>

                    </div>

                    <div className='p-5'>
                        <h1 className='text-2xl pb-2 font-bold'>1 Bed Room in spain</h1>
                        <div className='flex justify-between items-center bg-creamWhite p-4' >
                            {
                                data.map((d, i) => (
                                    <div>
                                        <h1 className='text-2xl pb-2 font-bold text-center'>{d.heading}</h1>
                                        <h1 className='text-center'>{d.text}</h1>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>


                <div className="text-xl md:mt-20 bg-white p-5 h-fit rounded-lg w-full md:w-[30%] text-center md:text-start cursor-pointer hover:shadow-xl shadow-md">
                    <img className='text-3xl pb-2 font-bold bg-creamWhite p-2 rounded-lg w-full h-24 md:h-auto md:w-fit ' src={value} />
                    <h1 className='text-xl pt-2 pb-2 font-bold'>Monthly rental <br /> income</h1>
                    <h1 className='text-xs lg:text-sm text-gray-600'>earn the money and chill</h1>
                </div>
            </div>



        </div>
    )
}

export default Strategy