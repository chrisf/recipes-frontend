import { gql, useQuery } from "@apollo/client";
import { Container, Grid2 as Grid } from "@mui/material";
import RecipePreview from "/src/components/RecipePreview";

const GET_RECIPES = gql`
  query Query {
    recipes {
      id
      title
      url
      image
      description
      directions
      ingredients
      author {
        name
      }
    }
  }
`;

export default function RecipeListPage() {
  const { loading, error, data } = useQuery(GET_RECIPES);
  if (loading) {
    return (
      <Container maxWidth="lg" component="main">
        Loading...
      </Container>
    );
  }
  if (error) {
    return (
      <Container maxWidth="lg" component="main">
        Error!
      </Container>
    );
  }
  return (
    <Container maxWidth="lg" component="main">
      <Grid container spacing={2}>
        {data.recipes.map((recipe) => (
          <Grid size={6} key={recipe.id}>
            <RecipePreview recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
