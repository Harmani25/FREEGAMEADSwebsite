import * as yup from "yup";



export const ReviewSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  
  
});

export const GameupdatesSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email")
    .required("Required"),
  username: yup
    .string()
    .required("Required")
    ,
  
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});