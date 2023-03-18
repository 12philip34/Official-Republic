import React from "react";
import style from "./style.module.css";

const GridProps = (props) => {
  return (
    <div>
      <div className={style.gridBox}>
        <div className={style.gridCard}>
          <div className={style.imgBox}>
            <img src={props.Image} alt="crypto.render" />
            <label>{props.Label}</label>
          </div>
          <div className={style.contentBox}>
            <h3>
                {props.Header}
            </h3>
            <span>
              <p>
                {props.TextBlog}
              </p>
              <p>
                {props.Date}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridProps;
