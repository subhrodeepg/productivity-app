import { Container, Button, Typography, TextField } from "@material-ui/core";
import KeyBoardIconRight from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    diplay: "block",
  },
  field_bottom: {
      marginBottom: 20,
      display: "block",
  }
});

function NewTodoPage() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {e.preventDefault()

  if (title && time) {
    console.log(title, time);
  }}
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Todo
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Todo Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        ></TextField>

        <TextField
          onChange={(e) => setTime(e.target.value)}
          className={classes.field_bottom}
          label="Todo Time"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        ></TextField>

        <Button
          onClick={() => console.log("button has been clicked")}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyBoardIconRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default NewTodoPage;
