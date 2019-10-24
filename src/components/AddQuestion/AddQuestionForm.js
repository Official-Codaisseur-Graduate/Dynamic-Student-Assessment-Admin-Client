import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

export default class AddQuestionForm extends Component {
    render() {
        const { onChange, onSubmit } = this.props;
		const { question, rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3 } = this.props.values;
        return (
            <div className="background">
                 
                <Container>
                 <Card className="card-50 component-center">
                <CardContent>
                   
                    <Typography variant="h4">
                        Add a question
                    </Typography>

                <form onSubmit={onSubmit} noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="Question"
                        className="form-control-lg"
                        onChange={onChange}
                        margin="normal"
                        variant="outlined"
                        name="question"
                        value={question}
                    />
                    <TextField
                        id="outlined-name"
                        label="Right Answer"
                        className="form-control-lg"
                        onChange={onChange}
                        margin="normal"
                        variant="outlined"
                        name="rightAnswer"
                        value={rightAnswer}
                    />
                    <TextField
                        id="outlined-name"
                        label="Wrong Answer 1"
                        className="form-control-lg"
                        onChange={onChange}
                        margin="normal"
                        variant="outlined"
                        name="wrongAnswer1"
                        value={wrongAnswer1}
                    />
                    <TextField
                        id="outlined-name"
                        label="Wrong Answer 2"
                        className="form-control-lg"
                        onChange={onChange}
                        margin="normal"
                        variant="outlined"
                        name="wrongAnswer2"
                        value={wrongAnswer2}
                    />
                    <TextField
                        id="outlined-name"
                        label="Wrong Answer 3"
                        className="form-control-lg"
                        onChange={onChange}
                        margin="normal"
                        variant="outlined"
                        name="wrongAnswer3"
                        value={wrongAnswer3}
                    />

                    <CardActions>
                        <Button type="submit" size="large">Add Question</Button>
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
