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

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substr(0, maxLength - 1) + "..." : text;
};

const DESCRIPTION_LENGTH = 300;

export default function RecipePreview(props) {
  const { id, title, image, description, url } = props.recipe;
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
          <Typography variant="body2">
            {truncateText(description, DESCRIPTION_LENGTH)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="sm"
          color="primary"
          component={Link}
          href={`/recipe/${id}`}
        >
          Read
        </Button>
        <Button
          size="sm"
          color="primary"
          component={Link}
          href={url}
          target="_blank"
        >
          Visit original site
        </Button>
      </CardActions>
    </Card>
  );
}
