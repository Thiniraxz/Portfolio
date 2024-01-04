import React from "react";
import dataexplorer1 from "../assets/ProjectImages/DataExplorer/dataexplorer1.png";
import dataexplorer2 from "../assets/ProjectImages/DataExplorer/dataexplorer2.png";
import dataexplorer3 from "../assets/ProjectImages/DataExplorer/dataexplorer3.png";
import dataexplorer4 from "../assets/ProjectImages/DataExplorer/dataexplorer4.png";
import dataexplorer5 from "../assets/ProjectImages/DataExplorer/dataexplorer5.png";
import dataexplorer6 from "../assets/ProjectImages/DataExplorer/dataexplorer6.png";
import dataexplorer7 from "../assets/ProjectImages/DataExplorer/dataexplorer7.png";
import dataexplorer8 from "../assets/ProjectImages/DataExplorer/dataexplorer8.png";
import dataexplorer9 from "../assets/ProjectImages/DataExplorer/dataexplorer9.png";
import ProjDes from "../components/projectDetails/ProjDes";
import Footer from "../components/footer/Footer";
import FooterBottom from "../components/footer/FooterBottom";

function DataExplorer() {
  const style = { maxWidth: "1100px" };
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
        <div style={{ padding: "1px" }}>
          <div
            className="mb-6"
            style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
          >
            <img style={style} src={dataexplorer1} alt="" />
            <img style={style} src={dataexplorer2} alt="" />
            <img style={style} src={dataexplorer3} alt="" />
          </div>

          <img
            className="mb-6"
            style={{ ...style, boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
            src={dataexplorer4}
            alt=""
          />
          <img
            className="mb-6"
            style={{ ...style, boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
            src={dataexplorer5}
            alt=""
          />
          <img
            className="mb-6"
            style={{ ...style, boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
            src={dataexplorer6}
            alt=""
          />

          <div
            className="mb-6"
            style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
          >
            <img style={style} src={dataexplorer7} alt="" />
            <img style={style} src={dataexplorer8} alt="" />
          </div>
        </div>
        <img style={{maxWidth:"900px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"}} src={dataexplorer9} alt="" />

        <div style={style}>
          <ProjDes
            projectDesc="Application that can be used by stock market and crypto currency traders
                        to collect, visualize and analyse market data. Cyrptocurrency variations can be visualized real time
                        by the real time updates fetched from the binance web socket. Stock market data were fetched from the 
                        a kaggle repository. Default chart type is candlestick chart. But users can change the chart type to line 
                        chart and bar chart. Users can also change the time interval of the chart. Users can also add technical technical
                        indicators to visualize the data, five internal indicators wcan be drawn in the chart itself and five other indicators 
                        can be visualized in a seperate chart. Users can also view the history of the market data by dragging and it was 
                        implemented with lazy loading. A logged in user has the facility to add a watchlist and get customized alerts."
            contributors={[
              "Thinira Wanasinghe (thiniragenuka@gmail.com)",
              "Nipun Pramuditha",
              "Thushalya Weerasuriya",
            ]}
            techStack={["React JS", "Flask", "MongoDB", "Firebase", "PWA"]}
          />
        </div>
      </div>
      <div className="border-b-[1px] border-b-black mt-5" />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default DataExplorer;
