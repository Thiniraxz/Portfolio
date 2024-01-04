import React from 'react'
import Title from '../layouts/Title';

const Resume = () => {

    const handleButtonClick = () => {
       return window.open(
         "https://drive.google.com/file/d/1mrXXzBtL-AR9aq8bzM6kZNRVIWLy02jF/view?usp=sharing",
         "_blank"
       );
    }
   

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="Computer Science and Engineering Undergraduate"
          des="My Resume"
        />
      </div>
      <div>
        <ul
          className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          onClick={handleButtonClick}
        >
          <li
            style={{
              maxWidth: "300px",
  
            }}
            className="border-designColor rounded-lg resumeLi"
          >
            See my resume
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Resume