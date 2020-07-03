import React from "react";
import "../MessageUS/messageUs.css";

function MessageUs() {
  return (
    <div className="sectionMU text-center">
      <div className="ContainerMU">
        <h2 className="titleMU"> We woudl love to hear from You!</h2>
        <p className="descriptionMU">Your voice is important</p>
        <div className="rowMU">
          <div className="text-center ml-auto mr-auto col-8 col-lg-6">
            <div className="input-lg input-groupMU">
              <div className="input-group-prependMU">
                <span className="input-group-textMU">
                  <i className="now-ui-icons users_circle-08"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MessageUs;
