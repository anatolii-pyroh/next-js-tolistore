export type StarsRatingProps = {
  rating: number;
  numberOfStars?: number;
  changeRating?: (rating: number) => void;
  starRatedColor?: string;
  starEmptyColor?: string;
  starHoverColor?: string;
  starDimension?: string;
  starSpacing?: string;
  gradientPathName?: string;
  ignoreInlineStyles?: boolean;
  svgIconPath?: string;
  svgIconViewBox?: string;
  name?: string;
};
