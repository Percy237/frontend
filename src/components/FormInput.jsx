import { useFormContext } from "react-hook-form";
// import { AnimatePresence, motion } from "framer-motion";

import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { findInputError } from "../utils/findInputError";
import { isFormInvalid } from "../utils/isFormInvalid";

export const FormInput = ({
  id,
  label,
  type,
  placeholder,
  name,
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);
  return (
    <div className="flex flex-col w-full gap-2 mt-3">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full p-3 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
        {...register(name, validation)}
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

FormInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  validation: PropTypes.object,
  name: PropTypes.string,
};

InputError.prototype = {
  message: PropTypes.string,
};
