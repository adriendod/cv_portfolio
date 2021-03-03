import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Projects.scss";
import { PP } from "utils/constants";
import SocialLinks from "components/common/SocialLinks";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="Projects">
      <div className="Projects-intro">
        <p>Here are my personal projects and collaborations.</p>
        <p>
          You can find my clients, missions and skills right{" "}
          <Link to="/career">here.</Link>
        </p>
      </div>
      <div className="challenges-list">
        {PP.map((challenge) => (
          <div key={challenge.name} className="challenge-item">
            <div className="project-image">hi</div>
            <div className="project-content">
              <div className="title">{challenge.name}</div>
              <div className="subtitle">{challenge.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
      <SocialLinks color="#110b44" />
    </div>
  );
};

export default Projects;
