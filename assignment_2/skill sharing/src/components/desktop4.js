import { useCallback } from "react";
import "./desktop4.css";

const Desktop4 = () => {
  const onPasswordInputClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='desktop8']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="desktop-7">
      <div className="professional-skill-development-parent">
        <div className="professional-skill-development-container">
          <p className="professional-skill-development">{`Professional Skill Development `}</p>
          <p className="courses">Courses</p>
        </div>
        <div className="rectangle-parent3">
          <div className="frame-child4" />
          <div className="unlock-your-full-container">
            <p className="unlock-your-full">{`Unlock your full potential with our professional skill `}</p>
            <p className="development-courses-in">{`development courses in Ahmedabad. From project `}</p>
            <p className="management-to-communication">
              management to communication skills.
            </p>
          </div>
        </div>
      </div>
      <div className="desktop-7-inner">
        <div className="frame-container">
          <div className="rectangle-parent4">
            <div className="frame-child5" />
            <div className="we-offer-tailored-container">
              <p className="we-offer-tailored">{`we offer tailored courses to enhance your career `}</p>
              <p className="growth-and-personal">
                growth and personal development.
              </p>
            </div>
            <div className="email-input">
              <img
                className="password-input-icon"
                alt=""
                src="/password-input.svg"
                onClick={onPasswordInputClick}
              />
            </div>
          </div>
          <div className="login-form">
            <img
              className="adobestock-266175541-158384411-icon"
              alt=""
              src="/adobestock-26617554115838441121024x576-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop4;
