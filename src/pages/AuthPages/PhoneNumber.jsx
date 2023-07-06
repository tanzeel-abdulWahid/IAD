import { useRef } from "react";
import styles from "../../style";
import HeroImgComp from "../../components/HeroImgComp";
import CustomButton from "../../components/CustomButton";
import PhoneNumInput from "../../components/PhoneNumInput";
import { useNavigate } from "react-router-dom";

const PhoneNumber = ({ phone, setPhone, setScreen, nextScreen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setScreen(nextScreen);
  };
  return (
    <>
      <div className="w-full">
        {/* Left Side confirm email Comp */}
        <div>
          <div className={`${styles.flexCenter} flex-col px-2`}>
            <div>
              <div>
                <form onSubmit={handleSubmit}>
                  <h1 className={`${styles.boldText} text-xl md:text-4xl`}>
                    Enter Phone Number
                  </h1>

                  <div className="py-8">
                    <h1 className="pb-2">
                      Please enter your phone number to continue
                    </h1>
                    <PhoneNumInput phone={phone} setPhone={setPhone} />
                  </div>
                  <CustomButton type={"submit"} text="Next" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Right side Hero image comp */}
      {/* <div className="hidden w-1/2 lg:flex relative">
          <HeroImgComp />
        </div> */}
    </>
  );
};

export default PhoneNumber;
