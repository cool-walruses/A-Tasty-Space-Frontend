import React from "react";

function PageSection({ image, title, text }) {
  return (
      <div className="section">
          <div className="section-content">
            <img src={image} />
            <span>
              <h2>{title}</h2>
              {text}
            </span>
          </div>
        </div>
  );
}

export default PageSection;