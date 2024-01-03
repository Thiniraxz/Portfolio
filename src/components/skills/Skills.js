import React,{useEffect} from 'react'
import Title from "../layouts/Title";
import js from "../../assets/Icons/js.png";
import react from "../../assets/Icons/react.png";
import html from "../../assets/Icons/html.png";
import python from "../../assets/Icons/python.png";
import java from "../../assets/Icons/java.png";
import node from "../../assets/Icons/node.png";
import flask from "../../assets/Icons/flask.png";
import php from "../../assets/Icons/php.png";
import mysql from "../../assets/Icons/mysql.png";
import mongodb from "../../assets/Icons/mongodb.png";
import firestore from "../../assets/Icons/firestore.png";
import github from "../../assets/Icons/github.png";
import bitbucket from "../../assets/Icons/bitbucket.png";
import docker from "../../assets/Icons/docker.png";
import tensorflow from "../../assets/Icons/tensorflow.png";
import { useLocation } from "react-router-dom";


function Skills() {
  // const location = useLocation();
  // console.log(location)

  // useEffect(() => {
  //   if (location.hash) {
  //     console.log(location.hash);
  //     let elem = document.getElementById(location.hash.slice(1));
  //     if (elem) {
  //       elem.scrollIntoView({ behavior: "smooth" });
  //     }
  //   } else {
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   }
  // }, [location]);

  const style = { height:"90px", width: "90px", marginRight: "50px", marginBottom:"10px" };
  return (
    <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="Skills" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center" }}>
        <h3 className="text-sm uppercase font-light text-designColor tracking-wide mb-8">
          Programming Languages
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
          }}
        >
          <img style={style} src={python} alt="" />
          <img style={style} src={java} alt="" />
          <img style={style} src={js} alt="" />
        </div>

        <h3 className="text-sm uppercase font-light text-designColor tracking-wide mb-8 mt-12">
          Databases
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
          }}
        >
          <img style={style} src={mysql} alt="" />
          <img style={style} src={mongodb} alt="" />
          <img style={style} src={firestore} alt="" />
        </div>

        <h3 className="text-sm uppercase font-light text-designColor tracking-wide mb-8 mt-12">
          Web development Tools / Frameworks / Languages
        </h3>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <img style={style} src={github} alt="" />
          <img style={style} src={bitbucket} alt="" />
          <img style={style} src={docker} alt="" />
          <img style={style} src={html} alt="" />
          <img style={style} src={react} alt="" />
          <img style={style} src={node} alt="" />
          <img style={style} src={flask} alt="" />
          <img style={style} src={php} alt="" />
        </div>

        <h3 className="text-sm uppercase font-light text-designColor tracking-wide mb-8 mt-12">
          Deep Learning Frameworks
        </h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img style={style} src={tensorflow} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Skills
