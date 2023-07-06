import styles from "../../style"
import HeroImgComp from "../../components/HeroImgComp"
import InputField from "../../components/InputField"
import CustomButton from "../../components/CustomButton"
import Timer from "../../components/Timer"
import { Link, useNavigate } from "react-router-dom"


const VerfiyPhone = () => {

    const navigate = useNavigate();

    const num = localStorage.getItem('num');
    
    
    let enable;
    const handleTimeEnd = () => {
        console.log('Time is up!');
        enable = true
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("verified")
        navigate("/homePage")
      }

    return (
        <>
            <div className="p-0 flex ">
                {/* Left Side confirm email Comp */}
                <div className="w-full lg:w-1/2">

                    <div className={`${styles.flexCenter} flex-col px-2`}>
                        <div className="pt-16 md:pt-28 md:w-2/3">

                            <h1 className={`${styles.boldText} text-xl md:text-4xl`}>Verify Phone Number</h1>

                            <div className="py-20">
                                
                                <h1 className="pb-5 text-gray-600">Please enter the one time password (OTP) sent to you {num}</h1>
                                <h1 className="pb-5 text-gray-600">The Otp will expire in {<Timer time="180"/>}</h1>


                                <form action="" onSubmit={handleSubmit}>

                                    <InputField
                                        type="number"
                                        />
                                
                            <div className="text-sm">
                                <h1 className="pb-5 text-gray-600 flex items-center justify-end"> ({<Timer time="10" onTimeEnd={handleTimeEnd} />})&nbsp; <span className={`text-lightGreen cursor-pointer font-semibold ${enable ? 'opacity-100' : 'opacity-40'}`}>Resend Otp</span></h1>
                                <h1 className="flex justify-end items-center">Didn't recieve OTP? &nbsp; <Link to={"/homePage"} className={`text-lightGreen cursor-pointer ${styles.boldText}`}> Skip this step</Link></h1>
                            </div>
                            
                            <CustomButton type="submit" text="Next" />
                            
                            </form>

                            </div>




                        
                        </div>
                    </div>

                </div>

                {/*Right side Hero image comp */}
                <div className="hidden w-1/2 lg:flex relative">
                    <HeroImgComp />
                </div>


            </div>



        </>
    )
}



export default VerfiyPhone