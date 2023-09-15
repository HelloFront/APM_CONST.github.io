import React from "react";

import "../styles.css";

const CustomFormInput = ({
  title,
  className,
  type,
  placeholder,
  name,
  required = false,
  touched,
  error,
  ...props
}) => {
  return (
    <>
      <div className="basicInput">
        <label className={error && touched && "errorLabel"}>{`${title} ${
          required && "*"
        }`}</label>

        <input
          {...props}
          className={`${className} ${error && touched && "errorInput"} `}
          type={type}
          name={name}
          placeholder={placeholder}
        />

        {error && touched && <p className="errorMessage">{error}</p>}
      </div>
    </>
  );
};

export default CustomFormInput;
