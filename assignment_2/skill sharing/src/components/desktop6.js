import "./desktop6.css";

const Desktop6 = () => {
  return (
    <div className="desktop-5" data-scroll-to="desktop5">
      <div className="desktop">
        <div className="workshop-rectangle">
          <img
            className="join-creative-writing-workshop"
            alt=""
            src="/join-creative-writing-workshop@2x.png"
          />
          <div className="creative-writing-workshop-join-wrapper">
            <div className="creative-writing-workshop-container">
              <p className="creative-writing-workshop">
                Creative Writing Workshop
              </p>
              <p className="join-our-workshops">{`Join our workshops to enhance `}</p>
              <p className="your-writing-skills">
                your writing skills and ignite your
              </p>
              <p className="creativity">creativity.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="workshop-join-button">
        <div className="photography-masterclasses-head">
          <img
            className="complete-the-photography-maste-icon"
            alt=""
            src="/completethephotographymasterclass-1@2x.png"
          />
          <div className="parent-frame-photo-classes">
            <div className="learn-photographywith-us">
              <div className="rectangle-groupfor-photography" />
              <div className="photo-masterclass" />
              <div className="photography-masterclasses-lear-container">
                <p className="photography-masterclasses1">
                  Photography Masterclasses
                </p>
                <p className="learn-the-art">{`Learn the art of photography from `}</p>
                <p className="experts-and-capture">{`experts and capture stunning `}</p>
                <p className="moments">moments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop6;
