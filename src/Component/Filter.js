import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export const Filter = () => {
  const [value, setValue] = React.useState("female");

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
          />
          <FormControlLabel
            value="descending"
            control={<Radio />}
            label="Descending"
          />
          <FormControlLabel
            value="include"
            control={<Radio />}
            label="Include out of stock"
          />
          <FormControlLabel
            value="fast"
            control={<Radio />}
            label="Fast delivery only"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
