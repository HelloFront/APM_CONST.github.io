import React from "react";
import { Quote } from "tabler-icons-react";

import { ITestimonial } from "../../types/testimonial";
import "./styles.css";

interface IProps {
  testimonial: ITestimonial;
}

const TestimonialCard = ({ testimonial }: IProps) => {
  const { message, author, authorStatus } = testimonial;

  return (
    <div className="testimonialCardContainer">
      <div className="testimonialsInnerContainer">
        <div className="testimonialsIconContainer">
          <Quote color="rgb(103, 103, 103)" size={40} />
        </div>

        <div className="testimonialsInfoContainer">
          <p className="testimonialsText">{message}</p>

          <div>
            <p className="testimonialsAuthor">{author}</p>
            <p className="testimonialsAuthorStatus">{authorStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
