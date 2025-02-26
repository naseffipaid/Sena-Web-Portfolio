// export default Portfolio;
import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const projectsData = [
    {
      title: "Abe Gerage",
      projectInfo: "A comprehensive garage management system that enables users to manage garage operations efficiently while allowing customers to track their vehicle repair status online. The platform emphasizes seamless user experience and real-time updates.",
      client: "Personal Project",
      technologies: "React, Node.js, Express, MySQL, CSS3, JavaScript, Bootstrap, JSON Web Token, Amazon Web Services",
      industry: "Automotive Services",
      date: "February 19, 2025",
      url: {
        name: "https://abegerages.uk/",
        link: "https://abegerages.uk/"
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com"
      },
      thumbImage: "images/projects/abegerage.png", // Use a relevant thumbnail
      sliderImages: [
        "images/projects/abegerage.png",
        "images/projects/abegerage-slider.png"
      ],
      categories: ["All"]
    },
    {
      title: "Evangadi Forum",
  projectInfo: 
       "An engaging platform where users interact by posting questions and providing answers, fostering collaborative problem-solving and knowledge sharing. It features robust user authentication, organized discussion threads, and a seamless responsive design.",
        client: "Collaborative Project",
        technologies: "React, Node.js, Mysql, CSS3, JSON Web Token",
        industry: "Social Networking",
        date: "December 2024",
        url: {
           name: "https://evangadiforum-g3.netlify.app/",
           link: "https://evangadiforum-g3.netlify.app/"
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/evangadi.png", // Use a relevant thumbnail
      sliderImages: [
        "images/projects/evangadi.png",
        "images/projects/evangadi-slider.png",
      ],
      categories: ["All"],
    },
    {
      title: "Netflix Clone",
      projectInfo:
        "A Netflix-inspired web app that allows users to browse movies, view details, and watch trailers. Includes integration with the TMDb API.",
      client: "Personal Project",
      technologies: "React, CSS3, TMDb API",
      industry: "Entertainment",
      date: "November 2024",
      url: {
        name: "https://naseffipaid.github.io/Netflix-Clone-2024-/",
        link: "https://naseffipaid.github.io/Netflix-Clone-2024-/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/netflix.webp", 
      sliderImages: [
        "images/projects/netflix.webp",
        "images/projects/netflix-slider.webp",
      ],
      categories: ["All"],
    },
    {
      title: "Amazon Clone",
      projectInfo:
        "An e-commerce platform replicating Amazon features like product listings, user authentication, and a shopping cart.",
      client: "Personal Project",
      technologies: "React, Node.js,Firebse, Stripe API, CSS3",
      industry: "E-Commerce",
      date: "August 2024",
      url: {
        name: "https://amazone-new-clone.netlify.app/",
        link: "https://amazone-new-clone.netlify.app/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/amazone.webp", 
      sliderImages: [
        "images/projects/amazone.webp",
        "images/projects/amazone-slider.webp",
      ],
      categories: ["All"],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // re-arrange items on image load
  useEffect(() => {
    if (imagesLoaded) {
      isotope.current.arrange({ filter: "*" });
    }
  }, [imagesLoaded]);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24 text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link active"}
                onClick={() => isotope.current.arrange({ filter: "*" })}
              >
                All
              </button>
            </li>
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.map((project, index) => (
                <div
                  className={"col-sm-6 col-lg-4 filter-item All"}
                  key={index}
                >
                  <div className="portfolio-box rounded">
                    <div className="portfolio-img rounded ratio ratio-4x3">
                      <img
                        onLoad={() => {
                          setImagesLoaded(imagesLoaded + 1);
                        }}
                        className="img-fluid d-block w-100 portfolio-image"
                        src={project.thumbImage}
                        alt=""
                      />
                      <div className="portfolio-overlay">
                        <a
                          className="popup-ajax stretched-link"
                          href=""
                          onClick={() => {
                            setSelectedProjectDetails(projectsData[index]);
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        <div className="portfolio-overlay-details">
                          <h5 className="text-white fw-400">{project.title}</h5>
                          <span className="text-light">All</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
