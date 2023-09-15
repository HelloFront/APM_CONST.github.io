import React, { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactInformation from "./components/ContactInformation";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContactForm />
    </>
  );
};

export default Contact;
