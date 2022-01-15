import React from "react";

function PageSection(props) {
  return (
      <div className="section">
          <div className="section-content">
            <img src={props.image} />
            <span>
              <h2>{props.title}</h2>
              {props.text}
            </span>
          </div>
        </div>
  );
}

export default PageSection;