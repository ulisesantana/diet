import React, {ChangeEvent, useState} from "react";
import {Grid, withStyles} from "@material-ui/core";
import {Nav} from "../Nav";
import {ingredients, categories} from "./data";
import {IngredientsList} from "../IngredientsList";
import {CategoryID, Frequency} from "../../types";
import {isMobile} from "../../utils";
import {defineSwipe, Swipeable} from "react-touch";

const getIngredientsByCategoryAndFrequency = (
  id: CategoryID,
  freq: Frequency
) =>
  Object.values(ingredients).filter(
    ({category, frequency}) => category === id && frequency === freq
  );

const swipe = defineSwipe({swipeDistance: 20});
function swipeHandler(direction: string, section: number, setSection: Function){
  return () => {
    console.log('Swiping to ', direction);
    if (direction === 'right') {
      section > 0 && setSection(section - 1);
    } else {
      section < 2 && setSection(section + 1);
    }
  }
}

const style = {
  root: {
    padding: '16px 0 76px 0'
  }
};

export const App = withStyles(style)(({classes}: {classes: Record<'root', string>}) => {
  const [section, setSection] = useState(0);
  const onSwipeLeft = swipeHandler('left', section, setSection);
  const onSwipeRight = swipeHandler('right', section, setSection);
  const onChangeSection = (e: ChangeEvent<{}>, index: number) => {
    setSection(index);
  };

  return (
    <Grid>
      <Nav value={section} onChange={onChangeSection}/>
      <Swipeable
          config={swipe}
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}>
        <Grid
          container
          className={isMobile() ? classes.root : ''}
          direction={isMobile() ? "column" : "row"}
          justify={isMobile() ? "space-between" : "flex-start"}
          alignItems={isMobile() ? "center" : "flex-start"}
          spacing={8}
        >
          {section === 0 &&
          categories.map(({id, label, image}) => (
            <IngredientsList
              key={id}
              category={label}
              img={image}
              ingredients={getIngredientsByCategoryAndFrequency(
                id,
                Frequency.daily
              )}
            />
          ))}
          {section === 1 &&
          categories.map(({id, label, image}) => (
            <IngredientsList
              key={id}
              category={label}
              img={image}
              ingredients={getIngredientsByCategoryAndFrequency(
                id,
                Frequency.weekly
              )}
            />
          ))}
          {section === 2 &&
          categories.map(({id, label, image}) => (
            <IngredientsList
              key={id}
              category={label}
              img={image}
              ingredients={getIngredientsByCategoryAndFrequency(
                id,
                Frequency.never
              )}
            />
          ))}
        </Grid>
      </Swipeable>
    </Grid>
  );
});

export default App;
