import React from "react";
import "../sectionAboutUs/sectionAU.css";
import Boyreading from "../../pictures/boyReading.jpg";
import Believe from "../../pictures/katrina-wright-yMg_SMqfoRU-unsplash.jpg";
import Bgthreee from "../../pictures/bg3.jpg";

const sectionImage = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Boyreading})`,
};

const sectionImage2 = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Believe})`,
};

const sectionImage3 = {
  width: "100%",
  height: "400px",
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
          <div className="rowAUTwo">
            <div className="col-md-6">
              <div
                className="image-container image-left"
                style={sectionImage}
              ></div>
              <div className="image-container" style={sectionImage3}></div>
            </div>
            <div
              className="col-md-5"
              className="image-container image-right"
              style={sectionImage2}
            >
              <h3 className="hThreeAU">
                At the MorseCode Learning Academy; we teach differently. We
                teach your child how they would best learn, not how a
                standardized test says they should be learning. We combine
                neuroscience, education and gaming to achieve and do what others
                may find unconventional, but who wants to be conventional? Every
                child learns differently and we try our best to engage them on
                their learning level, excite them in new ways, and have them
                champion at the same levels and rates as their peers. That's The
                MCLA way.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionAU;
