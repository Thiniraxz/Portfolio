import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import parkinson from "../../assets/ProjectImages/Parkinson/parkinson1.png";
import DataExplorer from "../../assets/ProjectImages/DataExplorer/main.png";
import PulmoSync from "../../assets/ProjectImages/Pulmosync/main.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          // title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 xl:gap-14 max-w-screen-md mx-auto">
        <ProjectsCard
          title="Market Data Explorer Application"
          des="Application that can be used by stock market and crypto currency traders
              to collect, visualize and analyse market data."
          src={DataExplorer}
          link="dataexplorer"
          demo={true}
          github={true}
          id={1}
        />
        <ProjectsCard
          title="Parkison Disease Detection System"
          des="A combination of Machine learning and a web based system to approximately
              detect whether a patient has Parkinson's disease or not."
          src={parkinson}
          link="parkinson"
          demo={false}
          github={true}
          id={2}
        />
        <ProjectsCard
          title="Lung sound classification to detect repiratory diseases (present - RnD project)"
          des="Features dual Convolutional Neural Networks (CNNs) for lung disease
                detection and categorization utilizing lung sounds, complemented by a Java-based mobile app for
                real-time respiratory disease diagnosis from uploaded audio."
          src={PulmoSync}
          link="pulmosync"
          demo={false}
          github={false}
          id={3}
        />
      </div>
    </section>
  );
}

export default Projects