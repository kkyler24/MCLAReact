import React from "react";
import "./Teamsection.css";
import image1 from "../../pictures/dart.jpg";
import image2 from "../../pictures/antonio-lainez-97_u1LDOLx0-unsplash.jpg";
import image3 from "../../pictures/darren-lee-0kEvX-9hJyQ-unsplash.jpg";

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
                <h4 className="titleTeam">Shaminder Singh</h4>
                <p className="category text-info">----</p>
                <p className="descriptionTeam">
        
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
                <h4 className="titleTeam">Bea House</h4>
                <p className="category text-info">----</p>
                <p className="descriptionTeam">
                  
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
                <h4 className="titleTeam">Ky Kyler</h4>
                <p className="category text-info">----</p>
                <p className="descriptionTeam">
                  
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
