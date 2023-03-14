import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/book/:category")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <FormControl variant="outlined">
      <InputLabel id="categories-label">Book Categories</InputLabel>
      <Select
        labelId="categories-label"
        label="Book Categories"
        IconComponent={ArrowDropDown}
      >
        {categories.map((category) => (
          <MenuItem key={category._id} value={category.name}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
