import { Box, Typography } from "@mui/material";

export default function RecipeDetails(props) {
  const { title, description, ingredients, directions, image } = props.recipe;

  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body">{description}</Typography>

      <Typography variant="h6">Ingredients</Typography>
      <Typography variant="body">{ingredients}</Typography>

      <Typography variant="h6">Directions</Typography>
      <Typography variant="body">{directions}</Typography>
    </Box>
  );
}
