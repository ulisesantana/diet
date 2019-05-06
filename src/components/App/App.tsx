import React, {ChangeEvent, useState} from "react";
import {Grid} from "@material-ui/core";
import {Nav} from "../Nav";
import {ingredients, categories} from "./data";
import {IngredientsList} from "../IngredientsList";
import {CategoryID, Frequency} from "../../types";
import {isMobile} from "../../utils";

const getIngredientsByCategoryAndFrequency = (
  id: CategoryID,
  freq: Frequency
) =>
  Object.values(ingredients).filter(
    ({category, frequency}) => category === id && frequency === freq
  );

export const App = () => {
  const [section, setSection] = useState(0);
  const onChangeSection = (e: ChangeEvent<{}>, index: number) => {
    setSection(index);
  };

  return (
    <Grid>
      <Nav value={section} onChange={onChangeSection}/>
      <Grid
        container
        direction={isMobile() ? "column" : "row"}
        justify={isMobile() ? "space-between" : "center"}
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
    </Grid>
  );
};

export default App;
