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
import InputLabel from '@material-ui/core/InputLabel'


export default class AddAnswersForm extends Component {

    render() {
        console.log(this.props.values);

        const { onChange, onSubmit } = this.props
        const { answer1, answer2, answer3, answer4, correct1, correct2, correct3, correct4 } = this.props.values

        return (
            <div className="background">
                <Container>
                    <Card className="card-50 component-center">
                        <CardContent>
                            <Typography variant="h4"><b>Add Answers</b></Typography>

                            <form onSubmit={onSubmit} noValidate autoComplete="off">
                                <TextField
                                    id="outlined-basic"
                                    className="form-control-lg-textfield"
                                    label="Answer 1"
                                    multiline
                                    rows="2"
                                    onChange={onChange}
                                    margin="normal"
                                    name="answer1"
                                    value={answer1}
                                    variant="outlined"
                                />

                                <FormControl variant="outlined" label="Answer1" placeholder="Answer1">
                                    <InputLabel htmlFor="outlined-age-native-simple" id="demo-simple-select-outlined-label">
                                        Incorrect / Correct ?
                                    </InputLabel>
                                    <Select
                                        native
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined-label"
                                        className="form-control"
                                        onChange={onChange}
                                        value={correct1}
                                        maxwidth="50%"
                                        name="correct1"
                                        labelWidth="145"
                                    >
                                        <option></option>
                                        <option value={false}>Incorrect</option>
                                        <option value={true}>Correct</option>
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
                                    name="answer2"
                                    value={answer2}
                                    variant="outlined"
                                />
                                <FormControl
                                    variant="outlined"
                                    label="Answer 2"
                                    placeholder="Answer 2">
                                    <InputLabel htmlFor="outlined-age-native-simple" id="demo-simple-select-outlined-label">
                                        Incorrect / Correct ?
                                    </InputLabel>
                                    <Select
                                        className="form-control"
                                        onChange={onChange}
                                        maxwidth="50%"
                                        value={answer2}
                                        name="correct2"
                                        labelWidth="145"
                                    >
                                        <option>correct?</option>
                                        <option value={false}>Incorrect</option>
                                        <option value={true}>Correct</option>
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
                                    name="answer3"
                                    value={answer3}
                                    variant="outlined"
                                />
                                <FormControl
                                    variant="outlined"
                                    label="Answer 3"
                                    placeholder="Answer 3">
                                    <InputLabel htmlFor="outlined-age-native-simple" id="demo-simple-select-outlined-label">
                                        Incorrect / Correct ?
                                    </InputLabel>
                                    <Select
                                        className="form-control"
                                        maxwidth="50%"
                                        value={answer3}
                                        name="correct3"
                                        labelWidth="145"
                                    >
                                        <option>correct?</option>
                                        <option value={false}>Incorrect</option>
                                        <option value={true}>Correct</option>
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
                                    name="answer4"
                                    value={answer4}
                                    variant="outlined"
                                />
                                <FormControl
                                    variant="outlined"
                                    label="Answer 4"
                                    placeholder="Answer 4">
                                    <InputLabel htmlFor="outlined-age-native-simple" id="demo-simple-select-outlined-label">
                                        Incorrect / Correct ?
                                    </InputLabel>
                                    <Select
                                        className="form-control"
                                        maxwidth="50%"
                                        value={answer4}
                                        name="correct4"
                                        labelWidth="145"
                                    >
                                        <option>correct?</option>
                                        <option value={false}>Incorrect</option>
                                        <option value={true}>Correct</option>
                                    </Select>
                                </FormControl>
                                <CardActions style={{ justifyContent: 'center' }}>
                                    <Button type="submit"
                                        size="large"
                                        color="secondary"
                                        variant="contained">
                                        Add Answer
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


// <Select
// 										className="form-control"
// 										onChange={onChange}
// 										value={categoryId}
// 										name="categoryId"
// 									>
// 										<MenuItem value={0} key="Please pick a category">
// 											{" "}
// 											Please pick a category{" "}
// 										</MenuItem>
// 										<MenuItem value={1} key="Variables">
// 											{" "}
// 											Variables{" "}
// 										</MenuItem>
// 										<MenuItem value={2} key="Functions">
// 											{" "}
// 											Functions{" "}
// 										</MenuItem>
// 										<MenuItem value={3} key="Global">
// 											{" "}
// 											Global{" "}
// 										</MenuItem>
// 										<MenuItem value={4} key="Local">
// 											{" "}
// 											Local{" "}
// 										</MenuItem>
// 										<MenuItem value={5} key="Type Coercion">
// 											{" "}
// 											Type Coercion{" "}
// 										</MenuItem>
// 										<MenuItem value={6} key="Statements">
// 											{" "}
// 											Statements{" "}
// 										</MenuItem>
// 									</Select>