import React from 'react'
import styles from '../../style'
import investing1 from "../../assets/investing1.svg"
import investing2 from "../../assets/investing2.svg"
import investing3 from "../../assets/investing3.svg"
import investing4 from "../../assets/investing4.svg"
const Investment = () => {
    const investing = [
        { icon: investing1, heading: "Invest in real estate from only AED 500", desc: "With fractionalised properties there is no mortgage or large down payments required" },
        { icon: investing2, heading: "Digital and diversified real estate investing", desc: "Buy shares in prime rental properties and manage your diversified portfolio online through our mobile app and web platform" },
        { icon: investing3, heading: "Hassle-free ownership", desc: "We handle the entire sales process, screen tenants and manage the property, saving you time and money!" },
        { icon: investing4, heading: "Trusted entity with real estate expertise", desc: "Stake is regulated by the DFSA and our team has held leadership positions at the biggest developers in Dubai for over 20 years" }
    ]
    return (
        <div className='bg-white mt-16'>
        <div className='text-center p-2 pt-14 md:w-[70%] m-auto '>
            <h1 className='textHeading'>Real estate investing made easy</h1>
            <h1 className='textDesc'>90% of the worlds millionaires made their fortunes through real estate, but it’s highly inaccessible, illiquid, and complicated - that’s where we come in!</h1>
        </div>

        <div className={`${styles.boxWidth} m-auto flex flex-wrap justify-evenly p-5 md:p-10 mb-10 gap-x-6`}>
            {
                investing.map((invest, i) => (
                    <div data-aos="zoom-in" key={i} className="shadow-lg p-5 md:w-64 rounded-lg cursor-pointer">
                        <img src={invest.icon} alt="icon" className='w-14' />
                        <h1 className='text-xl pt-2 pb-2 font-bold'>{invest.heading}</h1>
                        <h1 className='text-xs lg:text-sm text-gray-600 pt-3'>{invest.desc}</h1>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default Investment