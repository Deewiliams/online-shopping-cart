import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Button } from "@material-ui/core";
import { Ratings } from "./Ratings";
import { CartState } from "../Context/Context";

export const Filter = () => {
  const [value, setValue] = useState("female");
  // const [rate, setRate] = useState(0);

  const {
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
    productDispatch,
  } = CartState();

  console.log(byStock, byFastDelivery, sort, byRating, searchQuery);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "start" }}>
      <FormControl component="fieldset">
        <FormLabel
          component="legend"
          style={{ textAlign: "center", fontSize: 30 }}
        >
          Filter Products
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="ascending"
            control={<Radio />}
            label="Ascending"
            onClick={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
            check={sort === "lowToHigh" ? true : false}
          />
          <FormControlLabel
            value="descending"
            control={<Radio />}
            label="Descending"
            onClick={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
            check={sort === "highToLow" ? true : false}
          />
          <FormControlLabel
            value="include"
            control={<Radio />}
            label="Include out of stock"
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
            check={byStock}
          />
          <FormControlLabel
            value="fast"
            control={<Radio />}
            label="Fast delivery only"
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_DELIVERY",
              })
            }
            check={byFastDelivery}
          />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label style={{ paddingRight: 10, fontSize: 18 }}>Rating: </label>
            <Ratings
              rate={byRating}
              onClick={(index) =>
                productDispatch({
                  type: "FILTER_BY_RATING",
                  payload: index + 1,
                })
              }
              style={{ cursor: "pointer" }}
            />
          </span>
        </RadioGroup>
        <br />
        <Button
          size="small"
          variant="contained"
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
            })
          }
          fullWidth
        >
          Clear Filter
        </Button>
      </FormControl>
    </div>
  );
};
