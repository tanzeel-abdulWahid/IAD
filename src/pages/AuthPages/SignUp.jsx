import styles from "../../style";
import logo from "../../assets/stake-logo.svg";
import HeroImgComp from "../../components/HeroImgComp";
import SignUpForm from "../../components/SignUpForm";

const SignUp = () => {
  return (
    <>
      {/* Logo for mid screen */}
      <div className={`${styles.flexCenter} p-7 shadow-sm lg:hidden`}>
        <img src="/logo.webp" alt="Logo" className="w-20" />
      </div>

      <div className="flex">
        {/* Left Side Form Comp */}
        <div className="w-full h-[calc(100vh-150px)] px-4 flex items-center lg:w-1/2 lg:px-32 lg:h-screen">
          <SignUpForm />
        </div>

        {/*Right side Hero image comp */}
        <div className="hidden w-1/2 lg:flex relative">
          <HeroImgComp />
        </div>
      </div>
    </>
  );
};

export default SignUp;
