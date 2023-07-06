import styles from "../style"
import InputField from "../components/InputField"
import CustomButton from "../components/CustomButton"
import PhoneNumInput from "./PhoneNumInput"

const PasswordComp = ({ verifiedText, heading, listData,btnText,numComp }) => {
    return (
        <>
            {verifiedText && (
                <div className={`${styles.flexCenter} bg-darkBlue shadow-sm p-3`}>
                    <h1 className={`${styles.boldText} text-lightGreen`}>{verifiedText}</h1>
                </div>
            )}

            <div className={`${styles.flexCenter} flex-col px-2`}>
                <div className="pt-16 md:pt-28 md:w-2/3">

                    <h1 className={`${styles.boldText} text-xl md:text-4xl`}>{heading}</h1>

                    <div className="text-gray-600 mb-6">
                    
                    {numComp && (
                        <div className="py-14">
                            <h1 className="pb-5">Please enter your phone number to continue</h1>

                            <PhoneNumInput />
                        </div>
                    )}

                    {listData && (
                        <>
                        <h1 className="pt-12 pb-3 text-xl">Password</h1>
                        <InputField type={'password'} placeholder="Strong-password123#." />

                        
                            <h1 className="p-2">Password should have:</h1>
                            <ul class="list-disc ml-4 md:text-sm text-lg">
                                {/* <li class="">Minimum characters of 8 length</li>
                                <li class="">Atleast one uppercase characters is required</li>
                                <li class="">Atleast one lowercase characters is required</li>
                                <li class="">Number Character(s) is required</li> */}
                                {listData.map((item) => (
                                    <li key={item.id}>{item.text}</li>
                                ))}
                            </ul>
                        </>
                        )}
                    </div>

                    <CustomButton text={btnText} type="submit" />
                </div>
            </div>
        </>
    )
}

export default PasswordComp