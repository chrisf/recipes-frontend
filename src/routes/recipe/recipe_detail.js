import { gql, useQuery } from "@apollo/client";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails";

const GET_RECIPE = gql`
  query Query($recipeId: ID) {
    recipe(id: $recipeId) {
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

export default function RecipeDetailPage() {
  const params = useParams();
  const recipeId = Number(params.id);
  const { loading, error, data } = useQuery(GET_RECIPE, {
    variables: { recipeId: recipeId },
  });
  if (loading) {
    return <></>;
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
      <RecipeDetails recipe={data.recipe} />
    </Container>
  );
}
