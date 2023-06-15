import React from "react";

const Section = (props) => {
  const classes = `card ${props.className}`;
  return (
    <section className={classes}>
      <div className="card-body">{props.children}</div>
    </section>
  );
};

export default Section;
