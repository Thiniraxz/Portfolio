import React from "react";
import pulmosync1 from "../assets/ProjectImages/Pulmosync/main.png";

import ProjDes from "../components/projectDetails/ProjDes";
import Footer from "../components/footer/Footer";
import FooterBottom from "../components/footer/FooterBottom";

function PulmoSync() {
  const style = { maxWidth: "1100px" };
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-4 font-titleFont mb-14 align-items-center">
        <h2 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize mt-5 tracking-wide flex justify-center items-center text-center">
          Lung Sound Classification To Detect Repiratory Diseases
        </h2>
        <h3 className="text-md uppercase font-medium text-designColor tracking-wide mt-5 mb justify-center items-center text-center">
          Research & Development Project (present)
        </h3>
      </div>
      <div className="flex flex-col gap-5 items-center ">
        <div style={{ padding: "1px" }}>
          <div
            className="mb-6"
            style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
          >
            <img style={style} src={pulmosync1} alt="" />
          </div>
        </div>

        <div style={style}>
          <ProjDes
            projectDesc="Developed as an assistant tool for medical practitioners, the deep learning
                        based application classifies patient lung sounds into various respiratory
                        conditions. It features dual Convolutional Neural Networks (CNNs) for disease
                        detection and categorization, complemented by a Java-based mobile app for
                        real-time respiratory disease diagnosis from uploaded audio. Follows a deep learning pipeline 
                        including data collection, data preprocessing, model training, model evaluation and model deployment. The mobile application
                        supports file upload of lung sound audio and will provide the top three diagnosis for abnormal sounds or healthy if the sound is normal."
            contributors={[
              "Thinira Wanasinghe (thiniragenuka@gmail.com)",
              "Sakuni Bandara",
              "Supun Madusanka",
            ]}
            techStack={["Tensorflow", "Flask", "Java", "Docker"]}
          />
        </div>
      </div>
      <div className="border-b-[1px] border-b-black mt-5" />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default PulmoSync;
