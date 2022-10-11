import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from '@material-ui/icons/Star';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

export const Ratings = ({ rate, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index} onClick={() => onClick(index)} style={style}>
          {rate > index ? <AiFillStar />  : <AiOutlineStar /> }
        </span>
      ))}
    </>
  );
};
