import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function RecipePreview() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia sx={{ height: "200px" }} title="Recipe" image=""></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Recipe Name
          </Typography>
          <Typography variant="body2">Description</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="sm" color="primary">
          Open
        </Button>
      </CardActions>
    </Card>
  );
}
