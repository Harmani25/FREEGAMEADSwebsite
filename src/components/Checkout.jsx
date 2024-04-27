import { useField } from "formik";
import GameupdatetosModal from "./Modaltwo";

const Checkout = ({  ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span> <GameupdatetosModal></GameupdatetosModal> I accept the terms of service  </span>
      </div>

      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default Checkout;