import { useRef } from "react";
import styles from "../../style";
import HeroImgComp from "../../components/HeroImgComp";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../store/authActions";

const listData = [
  { id: 1, text: "Minimum characters of 8 length" },
  { id: 2, text: "Atleast one uppercase characters is required" },
  { id: 3, text: "Atleast one lowercase characters is required" },
  { id: 4, text: "Number Character(s) is required" },
];

const CreatePassword = ({ password, setPassword, apiValues }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setScreen(nextScreen);

    dispatch(
      signup(
        apiValues.email,
        apiValues.password,
        apiValues.name,
        apiValues.phone
      )
    );

    // navigate("/homePage");
  };

  return (
    <>
      <div className="p-0 flex ">
        {/* Left Side confirm email Comp */}
        <div className="w-full lg:w-1/2">
          <div className={`${styles.flexCenter} bg-darkBlue shadow-sm p-3`}>
            <h1 className={`${styles.boldText} text-lightGreen`}>
              Your email has been verified!
            </h1>
          </div>

          <div className={`${styles.flexCenter} flex-col px-2`}>
            <div className="pt-16 md:pt-28 md:w-2/3">
              <h1 className={`${styles.boldText} text-xl md:text-4xl`}>
                Create Password
              </h1>

              <div className="text-gray-600 mb-6">
                <h1 className="pt-12 pb-3 text-xl">Password</h1>
                <form onSubmit={handleSubmit}>
                  <InputField
                    value={password}
                    setvalue={setPassword}
                    type={"password"}
                    placeholder="Strong-password123#."
                  />

                  <h1 className="p-2">Password should have:</h1>
                  <ul class="list-disc ml-4 md:text-sm text-lg">
                    <li class="">Minimum characters of 8 length</li>
                    <li class="">
                      Atleast one uppercase characters is required
                    </li>
                    <li class="">
                      Atleast one lowercase characters is required
                    </li>
                    <li class="">Number Character(s) is required</li>
                  </ul>
                  <CustomButton type={"submit"} text={"Create Account"} />
                  {/* <button type="submit" className={`bg-lightGreen p-2 w-full rounded-lg text-white mt-5 ${styles.flexCenter} ${styles.boldText}`}>
                                        "Create Account"
                                    </button> */}
                </form>
              </div>
            </div>
          </div>

          {/* <PasswordComp 
                    verifiedText="Your email has been verified!"
                    heading="Create Password"
                    listData={listData}
                    btnText="Create Account"
                    
                    /> */}
        </div>
      </div>
      {/*Right side Hero image comp */}
      {/* <div className="hidden w-1/2 lg:flex relative">
          <HeroImgComp />
        </div> */}
    </>
  );
};

export default CreatePassword;
