import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

export default class AddQuestionForm extends Component {
  render() {
    const { onChange, onSubmit } = this.props;
    const { questionContent, level, categories } = this.props.values;
    const currentUrl = window.location.href;
    const currentTitle = currentUrl.includes("edit")
      ? "Edit question"
      : "Add a question";

    return (
      <div className="background">
        <Container>
          <Card className="card-50 component-center">
            <CardContent>
              <Typography variant="h4">
                <b>{currentTitle}</b>
              </Typography>
              <br />
              <form onSubmit={onSubmit} noValidate autoComplete="off">
                <FormControl
                  variant="outlined"
                  label="Categories"
                  placeholder="Categories"
                >
                  <InputLabel
                    htmlFor="outlined-age-native-simple"
                    id="demo-simple-select-outlined-label"
                  >
                    Categories
                  </InputLabel>
                  <Select
                    native
                    id="demo-simple-select-outlined-label"
                    className="form-control"
                    onChange={onChange}
                    value={categories}
                    maxwidth="50%"
                    name="categoryId"
                    labelWidth={145}
                  >
                    <option></option>
                    {this.props.categories.map(categories => {
                      return (
                        <option key={categories.id} value={categories.id}>
                          {categories.topic}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
                <br /> <br />
                <FormControl
                  variant="outlined"
                  label="Level"
                  placeholder="Level"
                >
                  <InputLabel
                    htmlFor="outlined-age-native-simple"
                    id="demo-simple-select-outlined-label"
                  >
                    Difficulty level
                  </InputLabel>
                  <Select
                    native
                    id="demo-simple-select-outlined-label"
                    className="form-control"
                    onChange={onChange}
                    value={level}
                    maxwidth="50%"
                    name="level"
                    labelWidth={145}
                  >
                    <option></option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined"
                  label="Question"
                  className="form-control-lg-textfield"
                  multiline
                  rows="4"
                  onChange={onChange}
                  margin="normal"
                  variant="outlined"
                  name="questionContent"
                  value={questionContent}
                />
                <CardActions style={{ justifyContent: "center" }}>
                  <Button type="submit" variant="contained" color="secondary">
                    {currentTitle}
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.props.onCancel}
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
