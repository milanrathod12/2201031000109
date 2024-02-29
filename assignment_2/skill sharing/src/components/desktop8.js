import "./desktop8.css";

const Desktop8 = () => {
  return (
    <div className="desktop-4" data-scroll-to="desktop4">
      <div className="desktop-4-inner">
        <div className="rectangle-group">
          <div className="frame-inner" />
          <div className="services">Services</div>
        </div>
      </div>
      <div className="frame-parent">
        <div className="frame-wrapper">
          <div className="container">
            <div className="div2">→</div>
            <div className="services1">
              <div className="div3">→</div>
              <div className="course-list">
                <div className="div4">→</div>
              </div>
              <div className="div5">→</div>
            </div>
          </div>
        </div>
        <div className="mission-frame">
          <img className="mission-frame-child" alt="" src="/rectangle-2.svg" />
          <div className="creative-writing-workshops-container">
            <p className="creative-writing-workshops">
              Creative Writing Workshops
            </p>
          </div>
          <div className="tailored-courses-frame">
            <div className="photography-masterclasses">
              Photography Masterclasses
            </div>
            <div className="digital-marketing-training">
              Digital Marketing Training
            </div>
            <div className="community-eventsmeetup">
              community events/Meetup
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop8;
