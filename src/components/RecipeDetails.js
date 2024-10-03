import { Box, Divider, Typography } from "@mui/material";

export default function RecipeDetails(props) {
  if (props.recipe === null) {
    return (
      <Box>
        <Typography variant="h5">Recipe not found</Typography>
      </Box>
    );
  }
  const { title, description, ingredients, directions, image } = props.recipe;

  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body">{description}</Typography>

      <Divider />
      <Box component="img" src={image} sx={{ maxHeight: "600px" }} />
      <Divider />

      <Typography variant="h6">Ingredients</Typography>
      <Typography variant="body">{ingredients}</Typography>

      <Typography variant="h6">Directions</Typography>
      <Typography variant="body">{directions}</Typography>
    </Box>
  );
}
