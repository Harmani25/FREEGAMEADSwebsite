import { useState } from "react";
import { Form, Formik } from "formik";
import { useFormik } from "formik";
import { GameupdatesSchema } from "../../schemas";
import Checkout from "../Checkout";
import Theinput from "../Theinput";
import Select from "../Select";
import { ReviewSchema } from "../../schemas";
import BasicModal from "../Modal";

const GameUpdateForm = () => {
  const [ setShowModal] = useState(false);

  const onSubmit = async (values, actions) => {
    console.log("Form values:", values); // Log form values to the console
    setShowModal(true); // Show the modal
    actions.resetForm(); // Reset the form
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    
  } = useFormik({
    initialValues: {
      username: "",
      GameType: "",
      email: "",
      age: "",
      favgames: "",
    },
    validationSchema: ReviewSchema,
    onSubmit,
  });

  return (
    <>
      <Formik
        initialValues={{ acceptedTos: false }}
        validationSchema={GameupdatesSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="text-white">
            <div>Receive game updates</div>
            <Theinput
              label="Name"
              name="username"
              type="text"
              placeholder="Enter your Name"
            />
            <Select
              label="Console"
              name="jobType"
              placeholder="What console do you play on"
            >
              <option value="">Please select your console type</option>
              <option value="playstation 3">playstation 3</option>
              <option value="playstation 4">playstation 4</option>
              <option value="playstation 5">Playstation 5</option>
              <option value="xbox 360">xbox 360</option>
              <option value="xbox one">xbox one</option>
              <option value="xbox one s">xbox one s</option>
              <option value="xbox one x">xbox one x</option>
              <option value="xbox series x">xbox series x</option>
              <option value="xbox series s">xbox series s</option>
              <option value="nintendo">nintendo</option>
              <option value="gaming pc">gaming pc</option>
              <option value="other">Other</option>
            </Select>

            <Theinput
              label="Email"
              name="email"
              type="text"
              placeholder="Enter your email"
              className={
                errors.email && touched.email && <p className="error">{errors.email}</p>
              }
            />

            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              placeholder="Enter your age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email && <p className="error">{errors.email}</p>
              }
            />

            <label htmlFor="favgames"> Favorite games</label>
            <input id="favgames" type="text" placeholder="Drop your fav Games" />

            <Checkout type="checkbox" name="acceptedTos" />
            <button className="sub" disabled={isSubmitting} type="submit">
              <BasicModal></BasicModal>
            </button>
          </Form>
        )}
      </Formik>
     
    </>
  );
};

export default GameUpdateForm;
