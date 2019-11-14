import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

export default class AddAnswersForm extends Component {
    render() {
        const { onChange, onSubmit } = this.props
        const { answer1, answer2, answer3, answer4 } = this.props.values

        return (
            <div className="background">
                <Container>
                    <Card className="card-50 component-center">
                        <CardContent>
                            <Typography variant="h4">Add Answers</Typography>

                            <form onSubmit={onSubmit} noValidate autoComplete="off">
                                <TextField
                                    id="outlined-basic"
                                    className="form-control-lg-textfield"
                                    label="Answer 1"
                                    multiline
                                    rows="2"
                                    onChange={onChange}
                                    margin="normal"
                                    name="Answer1"
                                    value={answer1}
                                    variant="outlined"
                                />

                                <FormControl variant="outlined" label="Answer" placeholder="Answer1">
                                    <Select
                                        native
                                        className="form-control"
                                        onChange={onChange}
                                        maxwidth="50%"
                                        value="answer1"
                                        name="correct1"
                                    >
                                        <option>correct?</option>
                                        <option value={true}>Incorrect</option>
                                        <option value={false}>Correct</option>
                                    </Select>
                                </FormControl>

                                <TextField
                                    id="outlined-basic"
                                    className="form-control-lg-textfield"
                                    label="Answer 2"
                                    multiline
                                    rows="2"
                                    onChange={onChange}
                                    margin="normal"
                                    name="Answer2"
                                    value={answer2}
                                    variant="outlined"
                                />
                                <FormControl variant="outlined" label="Answer" placeholder="Answer2">
                                    <Select
                                        native
                                        className="form-control"
                                        onChange={onChange}
                                        maxwidth="50%"
                                        value="answer2"
                                        name="correct2"
                                    >
                                        <option>correct?</option>
                                        <option value={true}>Incorrect</option>
                                        <option value={false}>Correct</option>
                                    </Select>
                                </FormControl>
                                <TextField
                                    id="outlined-basic"
                                    className="form-control-lg-textfield"
                                    label="Answer 3"
                                    multiline
                                    rows="2"
                                    onChange={onChange}
                                    margin="normal"
                                    name="Answer3"
                                    value={answer3}
                                    variant="outlined"
                                />
                                <FormControl variant="outlined" label="Answer" placeholder="Answer3">
                                    <Select
                                        native
                                        className="form-control"
                                        onChange={onChange}
                                        maxwidth="50%"
                                        value="answer3"
                                        name="correct3"
                                    >
                                        <option>correct?</option>
                                        <option value={true}>Incorrect</option>
                                        <option value={false}>Correct</option>
                                    </Select>
                                </FormControl>
                                <TextField
                                    id="outlined-basic"
                                    className="form-control-lg-textfield"
                                    label="Answer 4"
                                    multiline
                                    rows="2"
                                    onChange={onChange}
                                    margin="normal"
                                    name="Answer4"
                                    value={answer4}
                                    variant="outlined"
                                />
                                <FormControl variant="outlined" label="Answer" placeholder="Answer4">
                                    <Select
                                        native
                                        className="form-control"
                                        onChange={onChange}
                                        maxwidth="50%"
                                        value="answer4"
                                        name="correct4"
                                    >
                                        <option>correct?</option>
                                        <option value={true}>Incorrect</option>
                                        <option value={false}>Correct</option>
                                    </Select>
                                </FormControl>
                                <CardActions>
                                    <Button type="submit" size="large">
                                        Add Question
									</Button>
                                </CardActions>
                            </form>
                        </CardContent>
                    </Card>
                </Container>
                <span className="spacer-lg"></span>
            </div>
        )
    }
}
