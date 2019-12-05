import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: 200,
      margin: theme.spacing(1)
    }
  }
}));

export default function CodeForm(props) {
  const classes = useStyles();
  return (
    <div>
      <form
        style={{ justifyContent: "center" }}
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={props.onSubmit}
      >
        <TextField
          id="outlined-secondary"
          label="Student Id"
          name="intervieweeId"
          variant="outlined"
          color="secondary"
          value={props.values.intervieweeId}
          onChange={props.onChange}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          className={classes.button}
        >
          Generate Code
        </Button>
      </form>
      <h2 style={{ textAlign: "center" }}>{props.code}</h2>
    </div>
  );
}
