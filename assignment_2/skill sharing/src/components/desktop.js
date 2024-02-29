import { useCallback } from "react";
import "./desktop.css";

const Desktop = () => {
  const onLoginText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='desktop12']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText6Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='desktop12']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSignUpTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='desktop11']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTryItForClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='desktop9']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="desktop-13">
      <div className="desktop-13-inner">
        <div className="frame-parent6">
          <div className="rectangle-parent9">
            <div className="frame-child10" />
            <div className="login1" onClick={onLoginText1Click}>
              Login
            </div>
          </div>
          <div className="text" onClick={onText6Click} />
          <div className="vector-group">
            <img className="rectangle-icon" alt="" src="/rectangle-14.svg" />
            <div className="sign-up" onClick={onSignUpTextClick}>
              Sign up
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent7">
        <div className="frame-parent8">
          <div className="skill-sharing-wrapper">
            <div className="skill-sharing1">SKILL SHARING</div>
          </div>
          <div className="join-our-vibrant-container">
            <p className="join-our-vibrant">
              Join our vibrant community of learners and teachers today,
            </p>
            <p className="and-lets-embark">{`and let’s embark on a journey of continuous learning and `}</p>
            <p className="skill-development-together">
              skill development together.
            </p>
            <p className="blank-line">&nbsp;</p>
          </div>
        </div>
        <div className="frame-wrapper3">
          <div className="rectangle-parent10">
            <div className="frame-child11" />
            <div className="try-it-for" onClick={onTryItForClick}>
              Try it for free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
