import React from 'react'
import { FaTools, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";

function ProjDes(props) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-white mb-8 mt-3">
        Project Description
      </h3>
      <p className="text-base font-bodyFont leading-6 tracking-wide mb-8">
        {props.projectDesc}
      </p>
      <div className="flex flex-row gap-5 ">
        <div style={{ marginRight: "20%" }}>
          <h3 className="text-3xl font-bold text-white mb-8 mt-3">
            Project Contributors
          </h3>

          {props.contributors.map((contributor) => {
            return (
              <p className="text-base font-bodyFont leading-6 tracking-wide">
                {contributor}
              </p>
            );
          })}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 mt-3">
            Tech Stack
          </h3>
          {props.techStack.map((tech) => {
            return (
              <p className="text-base font-bodyFont leading-6 flex items-center gap-3">
                <span>
                  <FaTools />
                </span>{" "}
                {tech}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjDes
