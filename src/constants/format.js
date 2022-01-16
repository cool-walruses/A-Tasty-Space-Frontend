export const FORMAT_RATING = (rating) => {
  if (rating < 1000) {
    return rating;
  } else {
    return Math.floor(rating / 100) / 10 + "k";
  }
};
