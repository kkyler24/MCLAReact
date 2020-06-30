import React from "react";
import "../Teamsection/Teamsection.css";
import image1 from "../../pictures/";
import image2 from "../../pictures/";
import image3 from "../../pictures/";

function Teamsection(params) {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Meet the Team</h1>
        <div className="team">
          <div className="row">
            <div className="col-md-4">
              <div className="team-player">
                <img
                  alt="antonio"
                  className="rounded-circle img-fluid img-raised"
                  src="../../pictures/antonio-lainez-97_u1LDOLx0-unsplash.jpg"
                />
                <h4 className="title">Romina Hadid</h4>
                <p className="category text-info">Model</p>
                <p className="description">
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
            <div className="col-md-4">
              <div className="team-player">
                <img
                  alt="confetti"
                  className="rounded-circle img-fluid img-raised"
                  src="../../pictures/confetti.jpg"
                />
                <h4 className="title">Romina Hadid</h4>
                <p className="category text-info">Model</p>
                <p className="description">
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
            <div className="col-md-4">
              <div className="team-player">
                <img
                  alt="unsplash"
                  className="rounded-circle img-fluid img-raised"
                  src="../../pictures/darren-lee-0kEvX-9hJyQ-unsplash.jpg"
                />
                <h4 className="title">Romina Hadid</h4>
                <p className="category text-info">Model</p>
                <p className="description">
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
