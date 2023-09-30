import { useState } from "react";
import * as emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";

import { contactValidationSchema } from "./validation";
import CustomFormInput from "./CustomFormInput";
import ContactInformation from "./ContactInformation";
import "../styles.css";


const ContactForm = ({ isContactWithUsVisible = true }) => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      user_name: "", //user name
      user_email: "", // user email
      message: "", // message of email
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setIsLoading(true);
      try {
        emailjs
          .send(
            "service_sl1kd3v",
            "template_d4u945k",
            values,
            "SatGMx9ckxCmghQp0",
          )
          .then(() => {
            setSubmitting(false);
            setIsLoading(false);
            resetForm();
          });
      } catch {
        setSubmitting(false);
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="container_form_contact">
      {isContactWithUsVisible && (
        <p className="contactWithUsText">Contact with us</p>
      )}

      <ContactInformation />

      <form className="custom_form p-5" onSubmit={formik.handleSubmit}>
        <div className="formTopInputsContainer">
          <CustomFormInput
            name="user_name"
            type="text"
            title="Your Name"
            className="custom_input"
            placeholder="Enter your name..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user_name}
            error={formik.errors.user_name}
            touched={formik.touched.user_name}
            required
          />

          <CustomFormInput
            name="user_email"
            type="user_email"
            title="Your Email"
            className="custom_input"
            placeholder="Enter your email..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user_email}
            error={formik.errors.user_email}
            touched={formik.touched.user_email}
            required
          />
        </div>
        {/* <CustomFormInput
          name="subject"
          type="text"
          title="Subject"
          className="custom_input"
          placeholder="Enter subject..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
          error={formik.errors.subject}
          touched={formik.touched.subject}
          required
        /> */}
        <textarea
          name="message"
          className="custom_input custom_input_message"
          placeholder="Message.."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.errors.message && formik.touched.message && (
          <p className="errorMessage">{formik.errors.message}</p>
        )}

        <div className="buttonContainer">
          <button
            className={isLoading ? "submitButtonActive" : "submitButton"}
            type="submit"
            disabled={formik.dirty && formik.isSubmitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
