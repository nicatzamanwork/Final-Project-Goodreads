import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/book/")
  //     .then((response) => response.json())
  //     .then((data) => setCategories(data))
  //     .catch((error) => console.error(error));
  // }, []);

  // console.log(categories);

  return (
    <FormControl variant="outlined">
      <InputLabel id="categories-label">Book Categories</InputLabel>
      <Select
        labelId="categories-label"
        label="Book Categories"
        IconComponent={ArrowDropDown}
      >
        <MenuItem>Fiction</MenuItem>
        <MenuItem>Comedy</MenuItem>
        <MenuItem>Horror</MenuItem>
      </Select>
    </FormControl>
  );
};
