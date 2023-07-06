import styles from "../../style"
import PropertyCard from "../PropertyCard"
import property from "../../assets/property.jpeg"
import CustomButton from "../CustomButton"
import { Link } from "react-router-dom"
const FundedProperties = () => {
    return (
        <div className={`${styles.boxWidth} m-auto`}>
                <div className='text-center p-2 pt-8 md:w-[70%] m-auto '>
                    <h1 className='textHeading'>Funded properties</h1>
                    <h1 className='textDesc'>With our extensive experience leading top real estate companies in Bangladesh, we use our knowledge and connections to identify properties with exceptional investment potential for our clients.</h1>
                </div>

                <div data-aos="fade-up" className="md:flex md:justify-center lg:justify-start items-center gap-x-5 flex-wrap mt-12">
                    <PropertyCard  name="Studio in Dubai" country="Dubai"
                        type="Holiday" price="$ 736,393" investors="116 investors"
                        annualReturn="11.10%" fundedDate="12 Jan 2023" CurrentValue="$ 760,000" propertyImg={property} />
                    <PropertyCard name="1 Bed room in Burj Khalifa" country="Dubai" type="Holiday"
                        price="$ 736,393" investors="116 investors" annualReturn="11.10%" fundedDate="12 Jan 2023" CurrentValue="$ 760,000"
                        propertyImg={property} />
                    <PropertyCard name="2 Bed room in Jumerah" country="Dubai" type="Holiday"
                        price="$ 736,393" investors="116 investors" annualReturn="11.10%" fundedDate="12 Jan 2023" CurrentValue="$ 760,000"
                        propertyImg={property} />
                </div>
                <div className={`${styles.flexCenter} flex-col pb-8`}>
                    <Link to={"/homePage"}>
                        <CustomButton text="Buy Properties" />
                    </Link>
                </div>
            </div>
    )
}

export default FundedProperties