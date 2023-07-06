import * as Yup from "yup";

export const AddPropertySchema = Yup.object({
  //   name: Yup.string().min(2).max(25).required("Please Enter the name"),
  //   email: Yup.string()
  //     .email("Enter a valid Email Address")
  //     .required("Please enter the valid email address"),
  //   password: Yup.string().min(6).required("Password not entered"),
  //   confirmPassword: Yup.string()
  //     .required("Required")
  //     .oneOf([Yup.ref("password"), null], "Passwords did not match"),
  propName: Yup.string().min(5).max(25).required("Property Name is required"),
  price: Yup.string().required("Please enter the price"),
  location: Yup.string().min(2).max(25).required("Location is required"),
  city: Yup.string().max(15).required("City is Required"),
  locationDetails: Yup.string()
    .min(5)
    .max(250)
    .required("Enter the location Details"),
  propertyOverview: Yup.string()
    .min(5)
    .max(250)
    .required("Enter the property overview"),
  noOfBeds: Yup.string().required("Enter the number of beds"),
  noOfBaths: Yup.string().required("Enter the number of bath"),
  coveredArea: Yup.string().required("Enter the covered area"),
  transactionCost: Yup.number().required("Transaction Cost is required"),
  stakeFee: Yup.string().required("Stake fee is required"),
  valueAppr: Yup.string().required("Enter the value appreciation"),
  annualReturn: Yup.string().required("Enter the annual return"),
  financialInfo: Yup.string()
    .min(5)
    .max(250)
    .required("Financial Info is required"),
});
