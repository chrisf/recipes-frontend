import RecipePreview from "@/components/RecipePreview";
import { Container, Grid2 as Grid } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" component="main">
      <Grid container spacing={2}>
        <Grid size={6}>
          <RecipePreview />
        </Grid>
        <Grid size={6}>
          <RecipePreview />
        </Grid>
      </Grid>
    </Container>
  );
}
