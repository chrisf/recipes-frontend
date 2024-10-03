import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function RecipePreview(props) {
  const { id, title, image, description } = props.recipe;
  return (
    <Card>
      <CardActionArea component={Link} href={`/recipe/${id}`}>
        <CardMedia
          sx={{ height: "200px" }}
          title="Recipe"
          image={image}
        ></CardMedia>
        <CardContent sx={{ height: "200px" }}>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
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
