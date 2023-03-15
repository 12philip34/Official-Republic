import React from "react";
import style from "./style.module.css";

const WhatWeDo = () => {
  return (
    <div>
      <div className={style.WhatWeDo}>
        <section className={style.leftSection}>
          <h3>Services</h3>
          <h2>What we do</h2>
          <p>
            We have a vision of helping as many budding projects as possible, to
            easily connect with their target audience, by helping narrate and
            express their stories. So what we do basically is
          </p>
        </section>
        <section className={style.rightSection}>
          <span>
            <h3>01</h3>
            <h2>Level Up</h2>
            <p>We take your brand to the next level</p>
          </span>
          <span>
            <h3>02</h3>
            <h2>STORY TELLING</h2>
            <p>
              We communicate your goals, aims and objectives to your ideal
              audience in the language they’d understand and connect with
            </p>
          </span>
          <span>
            <h3>03</h3>
            <h2>ENSURE GREATNESS</h2>
            <p>
              We adopt strategies that ensure your project’s aims are achieved
            </p>
          </span>
          <span>
            <h3>04</h3>
            <h2>ONLINE-OFFLINE CONNECTIONS</h2>
            <p>
              We facilitate a connection between the online and offline space by
              hosting online and offline events for your project
            </p>
          </span>
        </section>
      </div>
    </div>
  );
};
export default WhatWeDo;
