import { useCallback } from "react";
import "./desktop7.css";

const Desktop7 = () => {
  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='desktop5']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="desktop-3">
      <div className="desktop-3-inner">
        <div className="rectangle-container">
          <div className="rectangle-div" />
          <div className="about-us" onClick={onAboutUsTextClick}>
            About us
          </div>
        </div>
      </div>
      <div className="frame-div">
        <div className="frame-child1" />
        <div className="our-mission-is-container">
          <p className="our-mission-is">{`Our mission is to foster a culture of learning and growth by connecting people with diverse expertise,creating opportunities for personal `}</p>
          <p className="and-professional-development">{`and professional development. `}</p>
          <p className="join-us-in">{`Join us in our journey to empower individuals through the exchange `}</p>
          <p className="of-skills-and">of skills and knowledge.</p>
        </div>
      </div>
    </div>
  );
};

export default Desktop7;
