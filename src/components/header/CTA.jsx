import React from "react";
import CV from "../../assets/Programmer.pdf";
import Transcript from "../../assets/transcript.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href={Transcript} download className="btn">
        Download Academic Transcript
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  );
};

export default CTA;
