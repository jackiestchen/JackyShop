import React from "react";

const Rating = ({ product, color }) => {
  return (
    <span>
      <i
        style={{ color }}
        className={
          product.rating >= 1
            ? "fas fa-star"
            : product.rating >= 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
      <i
        style={{ color }}
        className={
          product.rating >= 2
            ? "fas fa-star"
            : product.rating >= 1.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
      <i
        style={{ color }}
        className={
          product.rating >= 3
            ? "fas fa-star"
            : product.rating >= 2.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
      <i
        style={{ color }}
        className={
          product.rating >= 4
            ? "fas fa-star"
            : product.rating >= 3.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
      <i
        style={{ color }}
        className={
          product.rating >= 5
            ? "fas fa-star"
            : product.rating >= 4.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
          <span>{product.numReviews} reviews</span>
    </span>
  );
};

Rating.defaultProps = {
  color: "#FDDA0D",
};

export default Rating;
