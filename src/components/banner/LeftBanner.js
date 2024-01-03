import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
const LeftBanner = () => {

  const handleButtonClick = (input) => {
    switch (input) {
      case 1:
        return window.open("https://www.linkedin.com/in/thinira-genuka/", "_blank");
      case 2:
        return window.open("https://web.facebook.com/THINIRAXZ", "_blank");
      case 3:
        return window.open("https://github.com/Thiniraxz", "_blank");
      default:
        return;

    }
  };

    const [text] = useTypewriter({
      words: ["SE enthusiast.", "Full Stack Developer.", "Deep Learning enthusiast."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY Portfolio</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Thinira</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a committed and a motivated fast learner who has a keen interest
          in the software world seeking the opportunity to work in the industry.
          I believe my skills and talents would bring value to the organization
          whilst advancing my professional career .
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" onClick={() => handleButtonClick(1)}>
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon" onClick={() => handleButtonClick(3)}>
              <FaGithub />
            </span>
            <span className="bannerIcon" onClick={() => handleButtonClick(2)}>
              <FaFacebookF />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftBanner