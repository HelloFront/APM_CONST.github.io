import * as yup from "yup";

export const contactValidationSchema = yup.object().shape({
  user_name: yup.string().required("Required fild").min(2, "Fild should be more 2 character"),
  user_email: yup.string().email("Fild is not good").required("Required fild"),
  subject: yup.string().required("Required fild").min(2, "Fild should be more 2 character"),
  message: yup.string(),
});
