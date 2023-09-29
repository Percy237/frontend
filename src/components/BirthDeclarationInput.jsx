import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { isFormInvalid } from "../utils/isFormInvalid";
import { findInputError } from "../utils/findInputError";

export const BirthDeclarationInput = ({
  type,
  label,
  labelwidth,
  inputWidth,
  name,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);
  return (
    <div>
      <label
        htmlFor={label}
        className=" mr-1 normal-case"
        style={{ width: labelwidth }}
      >
        {label}:
      </label>
      <input
        type={type}
        style={{ width: inputWidth }}
        className="border-b-2 border-dashed outline-none italic"
        {...register(name, {
          required: {
            value: true,
            message: "required",
          },
        })}
      />
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
    </div>
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

BirthDeclarationInput.propTypes = {
  label: PropTypes.string,
  labelwidth: PropTypes.string,
  inputWidth: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};
