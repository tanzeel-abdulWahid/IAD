import InputField from "../../components/InputField";
import logo from "../../assets/stake-logo.svg";
import CustomButton from "../../components/CustomButton";
import styles from "../../style.js";
import LoginForm from "../../components/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const authState = useSelector((state) => state.authSlice);
  useEffect(() => {
    if (authState.profile !== null) {
      if (authState.profile.role === "user") {
        navigate("/homepage", { replace: true });
      } else {
        navigate("/adminPanel", { replace: true });
      }
    }
  }, [authState]);
  return (
    <div
      className={`h-screen max-w-full relative ${styles.flexCenter} flex-col overflow-hidden bg-creamWhite`}
    >
      <div
        className={`h-full w-[100%] md:w-[80%] lg:w-[35%] md:mt-12 ${styles.flexCenter} flex-col  border-2 rounded-lg  z-50 bg-white`}
      >
        <LoginForm />
      </div>

      <div
        className={`text-white z-50 md:mt-10 hidden md:flex justify-center items-center flex-col`}
      >
        <h1 className={`${styles.boldText}`}>
          Don’t have an account{" "}
          <Link to={"/signup"} className="text-lightGreen cursor-pointer">
            Join us today
          </Link>{" "}
        </h1>
        <h1 className="font-normal text-xs mb-20 pt-3">
          Regulated by the DFSA
        </h1>
      </div>

      {/* <div className="w-full absolute top-[50%] bg-darkBlue left-0  h-full lg:h-[600px] -skew-y-3"/> */}
      <div className="w-full absolute top-[80%] lg:top-[55%] ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#273036"
            fill-opacity="1"
            d="M0,32L40,64C80,96,160,160,240,165.3C320,171,400,117,480,96C560,75,640,85,720,96C800,107,880,117,960,106.7C1040,96,1120,64,1200,48C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Login;
