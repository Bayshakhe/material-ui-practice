import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";

const RatingPage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Stack direction="row">
        <Rating
          value={value}
          size="large"
          precision={0.5}
          onChange={handleChange}
        />
        <Typography variant="h6">{value}</Typography>
      </Stack>
      <Stack direction="row">
        <Rating
          value={value}
          size="large"
          precision={0.5}
          icon={<Favorite/>}
          emptyIcon={<FavoriteBorder/>}
          onChange={handleChange}
        />
        <Typography variant="h6">{value}</Typography>
      </Stack>
    </>
  );
};

export default RatingPage;
