import React from "react";
import "./style.css";
import Caro1 from "../../Images/car01.jpg";
import Caro2 from "../../Images/caro2.jpg";
import Caro3 from "../../Images/car03.jpg";
// import Caro4 from '../../Images/Caro4.jpg'
// import Caro5 from '../../Images/gold.jpg'

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Caro1} class="d-block w-100" alt="carousel.png" />
          </div>
          <div class="carousel-item">
            <img src={Caro2} class="d-block w-100" alt="carousel.png" />
          </div>
          <div class="carousel-item">
            <img src={Caro3} class="d-block w-100" alt="carousel.png" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
