import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export default class AddQuestionForm extends Component {
  render() {
    const { onChange, onSubmit, onCancel } = this.props;
    const { email } = this.props.values;

    return (
      <div className="background">
        <Container>
          <Card className="card-50 component-center">
            <CardContent>
              <Typography variant="h4">
                <b>Add a new student</b>
              </Typography>
              <br />
              <form onSubmit={onSubmit} noValidate autoComplete="off">
                <TextField
                  id="outlined"
                  label="E-mail"
                  className="form-control-lg-textfield"
                  multiline
                  rows="4"
                  onChange={onChange}
                  margin="normal"
                  variant="outlined"
                  name="email"
                  value={email}
                />
                <CardActions style={{ justifyContent: "center" }}>
                  <Button type="submit" variant="contained" color="secondary">
                    Add student
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={onCancel}
                  >
                    Cancel
                  </Button>
                </CardActions>
              </form>
            </CardContent>
          </Card>
        </Container>
        <span className="spacer-lg"></span>
      </div>
    );
  }
}
