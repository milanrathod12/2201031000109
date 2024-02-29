import { useCallback } from "react";
import Desktop8 from "../components/Desktop8";
import Desktop7 from "../components/Desktop7";
import Desktop6 from "../components/Desktop6";
import Desktop5 from "../components/Desktop5";
import Desktop4 from "../components/Desktop4";
import Desktop3 from "../components/Desktop3";
import Desktop2 from "../components/Desktop2";
import Desktop1 from "../components/Desktop1";
import Desktop from "../components/Desktop";
import "./frame.css";

const Frame = () => {
  const onAOUTUSTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='desktop4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="desktop-frame">
      <div className="desktop-2">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="aout-us" onClick={onAOUTUSTextClick}>
            AOUT US
          </div>
        </div>
        <div className="vector-parent">
          <img className="frame-item" alt="" src="/rectangle-2.svg" />
          <div className="welcome-to-skill-container">
            <p className="welcome-to-skill">{`Welcome to Skill Sharing, located in `}</p>
            <p className="ahmedabad-gujarat-india">
              Ahmedabad, Gujarat, India.
            </p>
            <p className="we-are-dedicated">{`We are dedicated to providing a `}</p>
            <p className="platform-for-individuals">
              platform for individuals to share
            </p>
            <p className="their-skills-and">{` their skills and knowledge with `}</p>
            <p className="others-in-our">others in our community.</p>
          </div>
        </div>
        <img className="images-1-icon" alt="" src="/images-1@2x.png" />
      </div>
      <Desktop8 />
      <Desktop7 />
      <Desktop6 />
      <Desktop5 />
      <Desktop4 />
      <div className="desktop-8" data-scroll-to="desktop8">
        <div className="desktop-8-inner">
          <div className="parent">
            <div className="div">→</div>
            <div className="skill-sharing-is-an-incredible-wrapper">
              <div className="skill-sharing-is-container">
                <p className="skill-sharing-is">
                  Skill Sharing is an incredible platform
                </p>
                <p className="that-connects-people">
                  that connects people with a passion for
                </p>
                <p className="sharing-knowledge-the">
                  sharing knowledge. The variety of skills
                </p>
                <p className="available-is-impressive">
                  available is impressive, and the
                </p>
                <p className="instructors-are-knowledgeable">
                  instructors are knowledgeable and
                </p>
                <p className="patient-i-am">patient. I am grateful for the</p>
                <p className="opportunity-to-learn">
                  opportunity to learn and grow with Skill
                </p>
                <p className="sharing-thank-you">
                  Sharing. Thank you for your amazing
                </p>
                <p className="service">service!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="div1">→</div>
          <div className="skill-sharing-is-a-fantastic-p-wrapper">
            <div className="skill-sharing-is-container1">
              <p className="skill-sharing-is1">
                Skill Sharing is a fantastic platform for
              </p>
              <p className="learning-and-sharing">
                learning and sharing skills. The variety
              </p>
              <p className="of-courses-offered">
                of courses offered is impressive, and
              </p>
              <p className="the-instructors-are">
                the instructors are knowledgeable and
              </p>
              <p className="engaging-thank-you">
                engaging. Thank you, Skill Sharing, for
              </p>
              <p className="providing-such-a">
                providing such a valuable service in
              </p>
              <p className="ahmedabad">Ahmedabad!</p>
            </div>
          </div>
        </div>
      </div>
      <Desktop3 />
      <Desktop2 />
      <Desktop1 />
      <div className="desktop-10">
        <img className="desktop-10-child" alt="" src="/group-1@2x.png" />
      </div>
      <Desktop />
    </div>
  );
};

export default Frame;
