import React from 'react'
import parkinson1 from "../assets/ProjectImages/Parkinson/parkinson1.png";
import parkinson2 from "../assets/ProjectImages/Parkinson/parkinson2.png";
import parkinson3 from "../assets/ProjectImages/Parkinson/parkinson3.png";
import parkinson4 from "../assets/ProjectImages/Parkinson/parkinson4.png";
import parkinson5 from "../assets/ProjectImages/Parkinson/parkinson5.png";
import parkinson6 from "../assets/ProjectImages/Parkinson/parkinson6.png";
import parkinson7 from "../assets/ProjectImages/Parkinson/parkinson7.png";
import parkinson8 from "../assets/ProjectImages/Parkinson/parkinson8.png";
import parkinson9 from "../assets/ProjectImages/Parkinson/parkinson9.png";
import ProjDes from '../components/projectDetails/ProjDes';
import Footer from '../components/footer/Footer';
import FooterBottom from '../components/footer/FooterBottom';



function Parkinson() {
  const style={maxWidth:"1100px"}
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-4 font-titleFont mb-14 align-items-center">
        <h2 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize mt-5 tracking-wide flex justify-center items-center text-center">
          Parkinson Disease Detection System
        </h2>
      </div>
      <div className="flex flex-col gap-5 items-center ">
        <h3 className="text-sm uppercase font-medium text-designColor tracking-wide mb-5">
          Project Implementation Images
        </h3>
        <img style={style} src={parkinson1} alt="" />
        <img style={style} src={parkinson2} alt="" />
        <img style={style} src={parkinson3} alt="" />
        <img style={style} src={parkinson4} alt="" />
        <img style={style} src={parkinson5} alt="" />
        <img style={style} src={parkinson6} alt="" />
        <img style={style} src={parkinson7} alt="" />
        <img style={style} src={parkinson8} alt="" />
        <img style={style} src={parkinson9} alt="" />
        <div style={style}>
          <ProjDes
            projectDesc="A combination of Machine learning and a web based system to
                        approximately detect whether a patient has Parkinson's disease or not.
                        The system consists of 3 user types as doctor, examiner and the admin
                        user. Examiners can register and perform tests for patients and generate
                        test reports. A doctor can view the test records of a registered patient
                        having completed his/her testing. In the system, a patient is subjected
                        to two types of tests as spiral and wave. For each test, a hand drawn
                        scanned image is required as input which then sends through the machine
                        learning model and generate the result mentioning whether the patient is
                        having the disease or not."
            contributors={[
              "Thinira Wanasinghe (thiniragenuka@gmail.com)",
              "Ayesh Vininda",
              "Nipun Pramuditha",
              "Thushalya Weerasuriya",
              "Deshan Lakshitha",
              "VINOJITH .G",
            ]}
            techStack={["React JS", "Node JS", "Python", "MySQL", "Prisma"]}
          />
        </div>
      </div>
      <div className="border-b-[1px] border-b-black mt-5" />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default Parkinson
