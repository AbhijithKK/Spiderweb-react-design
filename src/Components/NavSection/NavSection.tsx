import { FunctionComponent } from "react";
import "./NavSection.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <header className="frame-header">
      <div className="wrapper-info-circle-parent">
        <div className="wrapper-info-circle">
          <img
            className="info-circle-icon"
            loading="lazy"
            alt=""
            src="/info-circle.svg"
          />
        </div>
        <div className="wrapper-notification">
          <img
            className="notification-icon"
            loading="lazy"
            alt=""
            src="/notification.svg"
          />
        </div>
        <div className="frame-parent21">
          <div className="hi-muhammad-asad-parent">
            <div className="hi-muhammad-asad-container">
              <span>{`Hi, `}</span>
              <span className="muhammad-asad14">Muhammad Asad</span>
            </div>
            <div className="welcome-back">welcome back!</div>
          </div>
          <div className="wrapper-ellipse-1">
            <img
              className="wrapper-ellipse-1-child"
              loading="lazy"
              alt=""
              src="/ellipse-1@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;