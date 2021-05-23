import React from "react";
import PropTypes from "prop-types";

export const IconVote = ({ color = "#ff6600" }) => {
  return (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0L15.7942 13.5H0.205771L8 0Z" fill={color} />
    </svg>
  );
};

IconVote.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
