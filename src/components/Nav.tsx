import {Tab, Tabs, Theme, withStyles} from "@material-ui/core";
import React, {ChangeEvent} from "react";
import {isMobile} from "../utils";

export interface NavProps {
  classes: Record<"stickToBottom" | "root" | "flexContainer", string>,
  onChange: (e: ChangeEvent<{}>, index: number) => void
  value: number,
}

const styles = (theme: Theme) => ({
  root: {
    color: 'white',
    height: '60px'
  },
  flexContainer: {
    backgroundColor: theme.palette.primary.main
  },
  stickToBottom: {
    bottom: 0,
    position: "fixed" as "sticky",
    width: '100%',
    zIndex: 1000
  }
});

export const Nav = withStyles(styles)(({value, onChange, classes}: NavProps) => (
    <Tabs
      className={`${classes.root} ${classes.flexContainer} ${isMobile() ? classes.stickToBottom : ''}`}
      indicatorColor="secondary"
      onChange={onChange}
      textColor="secondary"
      value={value}
      variant="fullWidth"
    >
      <Tab className={classes.root} label="Diariamente"/>
      <Tab className={classes.root} label="Semanalmente"/>
      <Tab className={classes.root} label="Nunca"/>
    </Tabs>
  )
);