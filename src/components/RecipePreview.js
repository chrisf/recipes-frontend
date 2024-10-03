import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function RecipePreview(props) {
  const { title } = props.recipe;
  return (
    <Card>
      <CardActionArea>
        <CardMedia sx={{ height: "200px" }} title="Recipe" image=""></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">Description</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="sm" color="primary">
          Read
        </Button>
        <Button size="sm" color="primary">
          Visit original site
        </Button>
      </CardActions>
    </Card>
  );
}
