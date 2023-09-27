import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { isFormInvalid } from "../utils/isFormInvalid";
import { findInputError } from "../utils/findInputError";

export const BirthCertificateInput = ({
  span1,
  span2,
  heading1,
  heading2 = "",
  headingWidth = "20%",
  inputWidth = "80%",
  type,
  name,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);
  return (
    <>
      <div className="flex items-center w-full text-sm">
        <div className="normal-case" style={{ width: headingWidth }}>
          <p>
            <b>{heading1.split("-")[0]}</b> {heading1.split("-")[1] ? "-" : ""}
            {heading1.split("-")[1]}:
          </p>
          <p>
            <span>{span1}</span> <span>{span2}</span>
          </p>
          <p>{heading2}</p>
        </div>
        <input
          className="border-b-2 border-dashed outline-none italic"
          style={{ width: inputWidth }}
          type={type}
          {...register(name, {
            required: {
              value: true,
              message: "required",
            },
          })}
        />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.small
      className="flex items-center gap-1 px-2 font-semibold rounded-md text-red"
      {...framer_error}
    >
      {message}
    </motion.small>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

BirthCertificateInput.propTypes = {
  span1: PropTypes.string,
  span2: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  headingWidth: PropTypes.string,
  inputWidth: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};
