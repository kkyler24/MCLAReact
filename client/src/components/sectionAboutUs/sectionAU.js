import React from "react";
import "./sectionAU.css";
import GirlVR from "../../pictures/indexpagepics/girlVR.jpg";
import Believe from "../../pictures/indexpagepics/scrabbleLetters.jpg";
import Oldbook from "../../pictures/indexpagepics/oldSchoolBook.jpg";

const sectionImage2 = {
  backgroundImage: `url(${GirlVR})`,
};

const sectionImage = {
  backgroundImage: `url(${Believe})`,
};

const sectionImage3 = {
  width: "555px",
  height: "355px",
  backgroundImage: `url(${Oldbook})`,
};

// const fontStyle ={
//   fontFamily
// } Need to change Font and size for learningP and hThreeAU

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
                  "Impossible is not a fact. It’s an opinion. Impossible is not
                  a declaration. It’s a dare. Impossible is potential.
                  Impossible is temporary. Impossible is nothing.”
                  <br></br>
                  <small>
                    <strong>- Muhammad Ali</strong>
                  </small>
                </p>
              </div>
              <div class="image-container" style={sectionImage3}>
                <p className="learningP">
                  We threw out the old-school way of learning and thinking when
                  it comes to students with disabilities. We brought in
                  unconventional techniques that focus on the students best
                  learning styles and atmosphere. Our Mission is to to chnage
                  the way the world looks at learning disabilities and
                  education.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div
                className="image-container image-right"
                style={sectionImage2}
              ></div>
              <h4 className="hThreeAU">
                At the MorseCode Learning Academy; we teach differently. We
                teach your child how they would best learn, not how a
                standardized test says they should be learning.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionAU;
