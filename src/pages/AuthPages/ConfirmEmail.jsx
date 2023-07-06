import styles from "../../style";
import logo from "../../assets/stake-logo.svg";
import HeroImgComp from "../../components/HeroImgComp";
import email from "../../assets/email.svg";
import CustomButton from "../../components/CustomButton";
import { Link } from "react-router-dom";
const ConfirmEmail = ({ email, setScreen, nextScreen }) => {
  // const useremail = localStorage.getItem('email');

  const handleSubmit = (e) => {
    e.preventDefault();
    setScreen(nextScreen);
  };

  return (
    <>
      {/* Logo for mid screen */}
      {/* <div className={`${styles.flexCenter} p-7 shadow-sm lg:hidden`}>
        <img src={logo} alt="Logo" className="w-20" />
      </div> */}
      <form
        onSubmit={handleSubmit}
        className="flex justify-center h-screen items-center"
      >
        {/* Left Side confirm email Comp */}

        <div
          className={`${styles.flexCenter} lg:mt-0 flex-col justify-evenly h-[30%`}
        >
          <h1 className={`${styles.boldText} text-xl md:text-3xl`}>
            Confirm your email
          </h1>
          <h1 className={`${styles.flexCenter} flex-col md:flex-row`}>
            Confirmation Link was sent to &nbsp;{" "}
            <span className="text-lightGreen cursor-pointer">{email}</span>{" "}
          </h1>
          {/* <img src={email} alt="Email confirmation" /> */}

          <CustomButton text={"Next"} type={"submit"} />
        </div>
      </form>
      {/*Right side Hero image comp */}
      {/* <div className="hidden w-1/2 lg:flex relative">
        <HeroImgComp />
      </div> */}
    </>
  );
};

export default ConfirmEmail;
