import React from "react";
import StarRatings from "react-star-ratings";
import { StarsRatingProps } from "./StarsRating.types";

export const StarsRatingComponent: React.FC<StarsRatingProps> = ({
  rating,
  changeRating,
  name,
  starDimension = "30px",
  starSpacing = "1px",
}) => {
  return (
    <StarRatings
      rating={rating}
      changeRating={changeRating}
      name={name}
      starRatedColor='#FFDF00'
      starHoverColor='#FFDF00'
      starDimension={starDimension}
      starSpacing={starSpacing}
    />
  );
};

StarsRatingComponent.displayName = "StarsRating";
