import { Box, Typography } from "@mui/material";

export default function RecipeDetails(props) {
  //   const { name, description, ingredients, directions } = props;
  const name = "Easy Authentic Falafel Recipe";
  const description = `Falafel is a popular Middle Eastern “fast food” made of a mixture of
        chickpeas (or fava beans), fresh herbs, and spices that are formed into
        a small patties or balls. It's thought that falafel originated in Egypt
        as Coptic Christians looked for a hearty replacement for meat during
        long seasons of fasting or lent. It has also become a popular vegan food
        in Egypt and throughout the Middle East.`;

  const ingredients = "Ingredients...";
  const directions = "Directions...";

  return (
    <Box>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body">{description}</Typography>

      <Typography variant="h6">Ingredients</Typography>
      <Typography variant="body">{ingredients}</Typography>

      <Typography variant="h6">Directions</Typography>
      <Typography variant="body">{directions}</Typography>
    </Box>
  );
}
