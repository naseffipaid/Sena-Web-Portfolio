import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "07 june 2024 - 26 dec 2024",
      title: "Full-Stack Web Development",
      place: "Evangadi Networks",
      desc: "Developed strong problem-solving skills and the ability to build end-to-end web solutions. Gained hands-on experience in collaborating with teams to deliver functional and scalable applications.",
    },
    {
      yearRange: "2015 - 2018",
      title: "Masters in Hydraulic Engineering",
      place: "Hawasa University",
      desc: "Enhanced analytical and critical-thinking skills through complex project work and research. Learned to collaborate with multidisciplinary teams to tackle engineering challenges effectively.",
    },
    {
      yearRange: "2007 - 2010",
      title: "BSc in Hydraulic Engineering",
      place: "Arbaminch University",
      desc: "Developed a solid foundation in quantitative analysis, detailed computations, and comprehensive engineering designs, emphasizing precision and accuracy.",
    },
  ];
  
  const experienceDetails = [
    {
      yearRange: "2024 - Present",
      title: "Full-Stack Web Developer",
      place: "Evangadi Networks",
      desc: "Completed hands-on training and projects in React, Node.js, Express, and databases, applying problem-solving and project management skills to build innovative web solutions.",
    },
    {
      yearRange: "2023 - 2024",
      title: "General Manager",
      place: "ST Net Trading PLC",
      desc: "Led cross-functional teams to achieve business goals through collaboration and communication. Solved operational challenges by implementing strategic and efficient solutions.",
    },
    {
      yearRange: "2016 - 2023",
      title: "Project Manager",
      place: "ASTF General Construction PLC",
      desc: "Managed teams to execute projects seamlessly. Strengthened decision-making skills and problem-solving to meet client expectations and deadlines.",
    },
    {
      yearRange: "2011 - 2016",
      title: "Site Engineer",
      place: "FATS Construction Enterprise",
      desc: "Worked with teams to ensure material quality and availability. Applied problem-solving to enhance project efficiency and address supply challenges.",
    },
  ];
  const skills = [
    {
      name: "React JS",
      percent: 85,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 85,
    },
    {
      name: "Node Js",
      percent: 85,
    },
    {
      name: "Bootstrap",
      percent: 90,
    },
    {
      name: "python",
      percent: 65,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
