import React, { useEffect } from "react";
import ContactForm from "../Contact/components/ContactForm";

import {
  BannerShowProjects,
  GreetingBlock,
  OurLastProjects,
  OurNewPlans,
  Testimonials,
} from "./components";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <GreetingBlock />
      <OurNewPlans />
      {/* <OurLastProjects /> */}
      <BannerShowProjects />
      {/* <Testimonials /> */}
      <ContactForm isContactWithUsVisible={false} />
    </div>
  );
};

export default Home;
