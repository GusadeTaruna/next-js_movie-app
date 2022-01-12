import { memo } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { noImageUrl } from "../../../tmdb/constant";
import { CardProps } from "./Card.interface";

export const MovieCard = memo((props: CardProps) => {
  const { title, url, imageUrl, description } = props;
  return (
    <Card>
      <a href={url} target="_blank">
        <CardMedia
          component="img"
          image={
            imageUrl !== noImageUrl ? imageUrl : "static/images/pankod-logo.png"
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description.length > 250
              ? `${description.substring(0, 250)}...`
              : description}
          </Typography>
        </CardContent>
      </a>
    </Card>
  );
});
