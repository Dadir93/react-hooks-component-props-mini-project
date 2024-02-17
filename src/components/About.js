import React from "react";

function About({ blogImage, aboutText }) {
  return (
    <aside>
      <img src={blogImage} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
