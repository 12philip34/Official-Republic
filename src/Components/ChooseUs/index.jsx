import React from "react";
import "./style.css";
import Accordion from "../../Accordion/accordion";
import { accordionData } from "../../Utils/content";

const ChooseUs = () => {
  return (
    <div className="">
      <div className="chooseUsBox">
        <section className="imageChooseBox">
          <h1 data-aos="fade-up">Why <br /> Choose Us</h1>
          <p data-aos="fade-up">
            We offer the best crypto community moderation, <br /> community engagement,
            content creation, <br /> social media management etc.
          </p>
        </section>
        <section className="accordionChooseUs">
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChooseUs;
