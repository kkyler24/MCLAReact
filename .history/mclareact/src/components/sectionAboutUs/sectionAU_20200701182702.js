import React from "react";
import "../sectionAboutUs/sectionAU.css";
import Boyreading from "../../pictures/boyReading.jpg";
import Believe from "../../pictures/eLearning.jpg";
import Bgthree from "../../pictures/bg3.jpg";

const sectionImage = {
  backgroundImage: `url(${Boyreading})`,
};

const sectionImage2 = {
  backgroundImage: `url(${Believe})`,
};

const sectionImage3 = {
  width: "555px",
  height: "355px",
  backgroundImage: `url(${Bgthree})`,
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
          <div className="rowAUTwo flex-container">
            <div className="col-md-6">
              <div className="image-container image-left" style={sectionImage}>
                <p className="blockquote blockquote-info blockparagraph">
                  At the MorseCode Learning Academy; we teach differently. We
                  teach your child how they would best learn, not how a
                  standardized test says they should be learning.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div
                className="image-container image-right"
                style={sectionImage2}
              ></div>
              <h3 className="hThreeAU">
                At the MorseCode Learning Academy; we teach differently. We
                teach your child how they would best learn, not how a
                standardized test says they should be learning.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionAU;
