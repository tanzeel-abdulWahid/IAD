import React, { useEffect, useRef, useState } from "react";
import styles from "../style";
import InputField from "./InputField";
import CustomButton from "./CustomButton";
import { Link, useNavigate } from "react-router-dom";
import ConfirmEmail from "../pages/AuthPages/ConfirmEmail";
import PhoneNumber from "../pages/AuthPages/PhoneNumber";
import CreatePassword from "../pages/AuthPages/CreatePassword";
import { useDispatch, useSelector } from "react-redux";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.authSlice);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [phone, setphone] = useState("");
  const [screen, setscreen] = useState("1");

  useEffect(() => {
    if (authState.profile !== null) {
      navigate("/homepage", { replace: true });
    }
  }, [authState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setscreen("2");
  };

  return (
    <>
      {screen === "1" && (
        <div className="w-full">
          <h2 className={`${styles.boldText} text-2xl`}>Join Upstake</h2>

          <form onSubmit={handleSubmit}>
            <div className="mt-10">
              <h1 className={`${styles.boldText}  mb-2`}>Name</h1>
              <InputField type="text" value={name} setvalue={setname} />
            </div>

            <div className="mt-10">
              <h1 className={`${styles.boldText}  mb-2`}>Email Address</h1>
              <InputField type="email" value={email} setvalue={setemail} />
            </div>

            <h1 className="text-sm font-normal text-gray-600 pt-3">
              We'll never share your email.
            </h1>

            <div className="mt-7">
              <CustomButton type={"submit"} text="Let's go" />
              {/* <button type="submit" className={`bg-lightGreen p-2 w-full rounded-lg text-white mt-5 ${styles.flexCenter} ${styles.boldText}`}>
                        Let's go
                    </button> */}
            </div>
          </form>

          <h1 className={`${styles.boldText} pt-5`}>
            Already a member?{" "}
            <Link to={"/login"} className="text-lightGreen cursor-pointer">
              {" "}
              Sign In
            </Link>{" "}
          </h1>
        </div>
      )}
      {screen === "2" && (
        <div className="w-full">
          <ConfirmEmail setScreen={setscreen} nextScreen={"3"} email={email} />
        </div>
      )}
      {screen === "3" && (
        <div className="w-full">
          <PhoneNumber
            phone={phone}
            setPhone={setphone}
            setScreen={setscreen}
            nextScreen={"4"}
          />
        </div>
      )}
      {screen === "4" && (
        <div className="w-full">
          <CreatePassword
            password={password}
            setPassword={setpassword}
            setScreen={setscreen}
            nextScreen={"done"}
            apiValues={{ email, name, password, phone }}
          />
        </div>
      )}
    </>
  );
};

export default SignUpForm;
