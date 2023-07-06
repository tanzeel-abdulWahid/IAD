import React from 'react'
import Navbar from '../../components/Navbar'
import styles from '../../style';
import Footer from '../../components/Footer';

import PropertyCard from "../../components/PropertyCard"
import CustomButton from "../../components/CustomButton"
import { Link } from 'react-router-dom';
import HeroImg from '../../components/navbar/HeroImg';
import Working from '../../components/navbar/Working';
import Strategy from '../../components/navbar/Strategy';
import Investment from '../../components/navbar/Investment';
import FundedProperties from '../../components/navbar/FundedProperties';



const data = [
    { number: "101K+", heading: "registered users" },
    { number: "100M+", heading: "in properties funded" },
    { number: "14", heading: "user nationalities" },
    { number: "2.8M+", heading: "rental income paid" },
]






const LandingPage = () => {
    return (

        <div className='w-full overflow-hidden bg-creamWhite'>

            {/* Navbar */}
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-white`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            {/* hero component */}
            {/* <div className='bg-hero-image w-full h-screen object-contain'>
                <HeroImg />
            </div> */}
            <div className={`${styles.boxWidth} object-contain m-auto`}>
                <HeroImg />
            </div>

            {/* website figures component */}
            <div  data-aos="fade-up" className="flex justify-evenly flex-wrap gap-y-9 m-auto p-5 md:p-10 w-[90%] lg:w-[75%] mb-10 mt-14 md:mt-36 shadow-xl rounded-lg bg-white">
                {
                    data?.map((d, i) => (
                        <div key={i} className="text-center font-medium text-xl cursor-pointer">
                            <h1 className='text-3xl pb-2 font-bold'>{d.number}</h1>
                            <h1 className='text-sm'>{d.heading}</h1>
                        </div>
                    ))
                }

            </div>


            {/* How it works */}
            <Working />

            {/* How will you make money */}
            <Strategy />


            {/* Investing made easy */}
            <Investment />

            {/* Funded Properties */}
            <FundedProperties />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default LandingPage