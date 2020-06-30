import React from "react";
import "../Teamsection/Teamsection.css";
import image1 from "../../pictures/allison-louise-xABgmlX4ABE-unsplash.jpg";
import image2 from "../../pictures/antonio-lainez-97_u1LDOLx0-unsplash.jpg";
import image3 from "../../pictures/john-cameron-qjATQpoeK5Y-unsplash.jpg";

function Teamsection(params) {
  return (
    <div className="sectionTeam section-team text-center">
      <div className="containerTeam">
        <h1 className="titleTeam">Meet the Team</h1>
        <div className="teamTeam">
          <div className="rowTM">
            <div className="col-md-4Team">
              <div className="team-playerTeam">
                <img
                  alt="antonio"
                  className="rounded-circleTeam img-fluid img-raised"
                  src={image1}
                />
                <h4 className="titleTeam">Romina Hadid</h4>
                <p className="category text-info">Model</p>
                <p className="descriptionTeam">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
                <a href="#pablo" className="btn-icon btn-round btn btn-info">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#pablo" className="btn-icon btn-round btn btn-info">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#pablo" className="btn-icon btn-round btn btn-info">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4Team">
              <div className="team-playerTeam">
                <img
                  alt="confetti"
                  className="rounded-circleTeam img-fluid img-raised"
                  src={image2}
                />
                <h4 className="titleTeam">Romina Hadid</h4>
                <p className="category text-info">Model</p>
                <p className="descriptionTeam">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
                <a href="#pablo" className="btn-icon btn-round btn btn-info">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#pablo" className="btn-icon btn-round btn btn-info">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#pablo" className="btn-icon btn-round btn btn-info">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4Team">
              <div className="team-playerTeam">
                <img
                  alt="unsplash"
                  className="rounded-circleTeam img-fluid img-raised"
                  src={image3}
                />
                <h4 className="titleTeam">Romina Hadid</h4>
                <p className="category text-info">Model</p>
                <p className="descriptionTeam">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
                <a href="#pablo" className="btn-icon btn-round btn btn-info">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#pablo" className="btn-icon btn-round btn btn-info">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#pablo" className="btn-icon btn-round btn btn-info">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teamsection;
