import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumInput = ({ refs, phone, setPhone }) => {
  const [value, setValue] = useState();

  return (
    <>
      <PhoneInput
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true,
        }}
        containerClass="border-[1px] border-gray-400 rounded-lg placeholder:text-sm "
        inputStyle={{
          border: "none",
        }}
        placeholder="Enter phone number"
        value={phone}
        country={"bd"}
        onChange={setPhone}
      />
      {/* <PhoneInput
        containerClass="border-[1px] border-gray-400 rounded-lg placeholder:text-sm "
        inputStyle={{
          border: "none",
        }}
        country={"us"}
        value={phone}
        onChange={setPhone}
      /> */}
      {/* <h1>{value}</h1> */}
    </>
  );
};

export default PhoneNumInput;
