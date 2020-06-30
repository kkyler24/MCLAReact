import React from "react";
import "../sectionAboutUs/sectionAU.css";
import Boyreading from "../../pictures/boyReading.jpg";

var sectionImage = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Background})`,
};

function SectionAU(params) {
  return (
    <div className="sectionAU">
      <div className="containerAU">
        <div class="rowAU">
          <div className="ml-auto mr-auto text-centerAU col-md-8">
            <h2 className="titleAU">Our Motto </h2>
            <h5 className="descriptionAU">
              So you are unconventional, so is our teaching style. We believe
              the sky is the limit with the right technology; good thing we have
              that.
            </h5>
          </div>
        </div>
        <div className="seperator seperator-primary"></div>
        <div className="section-story-overview">
          <div className="rowAUTwo">
            <div className="col-md-6">
              <div
                className="image-container image-left"
                style={sectionImage}
              ></div>
            </div>
            <div className="col-md-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionAU;
