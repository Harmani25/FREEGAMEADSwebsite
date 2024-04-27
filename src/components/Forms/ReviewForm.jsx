import { useFormik } from "formik";
import { ReviewSchema } from "../../schemas";


import BasicModal from "../Modal";

import SliderInput from "../Slider";
import { Textarea } from "@chakra-ui/react";


const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

console.log(onSubmit.values)

const ReviewForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      
    },
    validationSchema: ReviewSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    
    <form method="GET" onSubmit={handleSubmit} autoComplete="on" className="text-white">
        <div>
            Like what you see? Drop a review!!!
        </div>
      <label  htmlFor="name">Name</label>
      <input
        value={values.username}
        onChange={handleChange}
        id="name"
        type="name"
        placeholder="Enter your name"
        onBlur={handleBlur}
        className={errors.username && touched.username ? "input-error" : ""}
      />
      {errors.email && touched.username && <p className="error">{errors.username}</p>}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}

         
        
      />
      <br />
      <div>
        <p > Comment</p>

      <Textarea  placeholder="Write a comment"> </Textarea>
      </div>

      <div className="text-warning">
      <br />
     <SliderInput></SliderInput>
      </div>
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      
      
      <button className="submit-bt" disabled={isSubmitting} type="submit">
         <BasicModal></BasicModal> 
      </button>
    </form>
  );
};
export default ReviewForm;