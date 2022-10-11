import React from "react";
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

export const Ratings = ({ rate, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index} onClick={() => onClick(index)} style={style}>
          {rate > index ? <AiFillStar  />  : <AiOutlineStar /> }
        </span>
      ))}
    </>
  );
};
