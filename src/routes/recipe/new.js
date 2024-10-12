import { gql, useMutation } from "@apollo/client";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CREATE_RECIPE = gql`
  mutation NewRecipe(
    $title: String
    $url: String
    $image: String
    $description: String
    $ingredients: String
    $directions: String
  ) {
    newRecipe(
      title: $title
      url: $url
      image: $image
      description: $description
      ingredients: $ingredients
      directions: $directions
    ) {
      id
    }
  }
`;

export default function NewRecipePage() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");

  const [addRecipe, { data, loading, error }] = useMutation(CREATE_RECIPE);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title === "") {
    }

    const recipe = await addRecipe({
      variables: {
        title,
        url,
        image,
        description,
        ingredients,
        directions,
      },
    });

    navigate(`/recipe/${recipe.data.newRecipe.id}`);
  };

  return (
    <Container maxWidth="lg">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Stack spacing={2}>
          {loading && <p>Loading...</p>}
          <TextField
            required
            label="Recipe Title"
            disabled={loading}
            fullWidth
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <TextField
            required
            label="URL"
            disabled={loading}
            fullWidth
            value={url}
            onChange={(e) => {
              setUrl(event.target.value);
            }}
          />

          <TextField
            required
            label="Image"
            disabled={loading}
            fullWidth
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />

          <TextField
            required
            label="Description"
            disabled={loading}
            fullWidth
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            multiline
            minRows={2}
          />

          <TextField
            required
            label="Ingredients"
            disabled={loading}
            fullWidth
            value={ingredients}
            onChange={(e) => {
              setIngredients(e.target.value);
            }}
            multiline
            minRows={4}
          />

          <TextField
            required
            label="Directions"
            disabled={loading}
            fullWidth
            value={directions}
            onChange={(e) => {
              setDirections(e.target.value);
            }}
            multiline
            minRows={4}
          />
          <Button disabled={loading} type="submit">
            Add recipe
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
