import React from "react";
import { EmailIcon, PhoneIcon } from "../../../assets/svg";
import {
  BrandInstagram,
  BrandFacebook,
  BrandTwitter,
} from "tabler-icons-react";
import { SimpleButton } from "../../../components/Buttons";

const ContactInformation = () => {
  return (
    <div className="contactInformationContainer">
      <div className="contactInformationInnerContainer">
        <div>
          <div className="contactInformationPhoneNumber informationItem">
            <div>
              <PhoneIcon color={"#f1d89f"} />
            </div>
            <div>
              <a className="informationText" href="tel:+14256832024">
                (425) 112-3233
              </a>
            </div>
          </div>
          <div className="contactInformationEmailAddress informationItem">
            <div>
              <EmailIcon color={"#f1d89f"} />
            </div>
            <div>
              <a className="informationText" href="mailto:savchik.vl@gmail.com">
                forexample@gmail.com
              </a>
            </div>
          </div>
          <div className="contactInformationAddress informationItem"></div>
        </div>

        <div className="buttonsContainer">
          <SimpleButton onClick={() => null} className="socialButton">
            <BrandInstagram color="#fdc723" size={20} />
          </SimpleButton>

          <SimpleButton onClick={() => null} className="socialButton">
            <BrandFacebook color="#fdc723" size={20} />
          </SimpleButton>

          <SimpleButton onClick={() => null} className="socialButton">
            <BrandTwitter color="#fdc723" size={20} />
          </SimpleButton>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
