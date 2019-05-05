import React, { ChangeEvent, useState } from "react";
import { Grid, withStyles } from "@material-ui/core";
import { Nav } from "../Nav";
import { ingredients, categories } from "./data";
import { IngredientsList } from "../IngredientsList";
import { CategoryID, Frequency } from "../../types";
import { isMobile } from "../../utils";

const style = {
  root: {
    padding: "8px 16px 50px 16px"
  }
};

const getIngredientsByCategoryAndFrequency = (
  id: CategoryID,
  freq: Frequency
) =>
  Object.values(ingredients).filter(
    ({ category, frequency }) => category === id && frequency === freq
  );

export const App = withStyles(style)(
  ({ classes }: { classes: Record<"root", string> }) => {
    const [section, setSection] = useState(0);
    const onChangeSection = (e: ChangeEvent<{}>, index: number) => {
      setSection(index);
    };

    return (
      <Grid>
        <Nav value={section} onChange={onChangeSection} />
        <Grid
          container
          className={`${isMobile() ? classes.root : ""}`}
          direction={isMobile() ? "column" : "row"}
          justify={"space-between"}
          alignItems="center"
          spacing={8}
        >
          {section === 0 &&
            categories.map(({ id, label }) => (
              <IngredientsList
                key={id}
                category={label}
                img={"http://placekitten.com/300/100"}
                ingredients={getIngredientsByCategoryAndFrequency(
                  id,
                  Frequency.daily
                )}
              />
            ))}
          {section === 1 &&
            categories.map(({ id, label }) => (
              <IngredientsList
                key={id}
                category={label}
                img={"http://placekitten.com/300/100"}
                ingredients={getIngredientsByCategoryAndFrequency(
                  id,
                  Frequency.weekly
                )}
              />
            ))}
          {section === 2 &&
            categories.map(({ id, label }) => (
              <IngredientsList
                key={id}
                category={label}
                img={"http://placekitten.com/300/100"}
                ingredients={getIngredientsByCategoryAndFrequency(
                  id,
                  Frequency.never
                )}
              />
            ))}
        </Grid>
      </Grid>
    );
  }
);

export default App;
