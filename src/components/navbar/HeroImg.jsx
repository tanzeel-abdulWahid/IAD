import React from 'react'
import styles from '../../style'
import property from '../../assets/property.jpeg'
import property2 from '../../assets/property2.jpeg'
import CustomButton from '../CustomButton'
import { Link } from 'react-router-dom'
const HeroImg = () => {
    return (
        // <div className="absolute top-[40%] left-1/2 -translate-x-1/2 ">
        //     <h1 className='text-2xl w-screen md:w-fit p-5 md:p-0 md:text-6xl text-white text-center font-bold'>The modern way for anyone to invest in real estate</h1>
        //     <h1 className='text-center text-white p-2 md:text-2xl font-thin mt-3   '>Digitally invest in prime rental properties, no matter where you are in the world!</h1>
        // </div>

        <section className="md:pt-10 lg:pl-0 pl-4  flex flex-col lg:flex-row mt-14">
            <div data-aos="fade-right"  data-aos-duration="1000" className="lg:w-1/2 p-5 md:p-2">
                <div className='md:w-[90%] lg:w-[80%] md:pl-14 lg:pl-0 lg:mt-12'>
                    <h1 className="text-2xl  md:text-5xl font-extrabold text-gradient">The modern way for anyone to invest in real estate </h1>
                    <p className="text-lg font-light pt-5">Digitally invest in prime rental properties, no matter where you are in the world!</p>
                    <Link to="/signUp" className='w-28'>
                        <CustomButton text="SignUp" />
                    </Link>

                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-1/2 relative mt-8">
                <div className='md:w-[90%] lg:w-[80%] p-5 md:p-0 md:pl-14'>
                    <img
                        className="rounded-lg shadow-lg lg:m-8"
                        src={property}
                        alt="Big Image"
                    />
                </div>
                <img
                    className="w-60 object-cover h-32 shadow-md rounded-lg lg:m-8 hidden lg:block md:absolute -top-20 -left-5"
                    src={property2}
                    alt="Small Image 1"
                />
                <img
                    className="w-60 object-cover h-32 shadow-md rounded-lg lg:m-8 hidden lg:block md:absolute -bottom-14 -right-24"
                    src={property2}
                    alt="Small Image 1"
                />
            </div>
        </section>
    )
}

export default HeroImg