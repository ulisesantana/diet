import React from "react";
import {Ingredient} from "../entities";
import {Card, CardActionArea, CardContent, CardMedia, Theme, Typography, withStyles} from "@material-ui/core";

interface IItemList {
  category: string,
  classes: Record<"card" | "media" | "root", string>,
  img: string,
  ingredients: Ingredient[]
}

const styles = (theme: Theme) => ({
  root: {
    color: 'white' ,
  },
  card: {
    backgroundColor: theme.palette.primary.main,
    margin: '8px',
    maxHeight: 375,
    width: 300,
  },
  media: {
    objectFit: 'cover' as "scale-down",
    maxHeight: 125
  },
});

export const IngredientsList = withStyles(styles)(({category, classes, ingredients, img}: IItemList) => {
    return !!ingredients.length
      ? (<Card className={`${classes.card} ${classes.root}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent className={`${classes.root}`}>
            <Typography gutterBottom variant="h5" component="h2">
              {category}
            </Typography>
            <Typography component="p">
              {ingredients.map(i => i.label).join(', ').concat('.')}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>)
      : <div></div>;
  }
);