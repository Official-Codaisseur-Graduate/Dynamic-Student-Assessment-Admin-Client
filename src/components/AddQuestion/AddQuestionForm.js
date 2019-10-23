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
            <div>
                 
                <Container>
                 <Card className="card-50 component-center">
                <CardContent>
                   
                    <Typography variant="h4">
                    Add a question
                    </Typography>
                <form noValidate autoComplete="off">
                <TextField
                id="outlined-name"
                label="Question"
                className="form-control-lg"
                onChange={onSubmit}
                margin="normal"
                variant="outlined"
                 />
                  <TextField
                id="outlined-name"
                label="Right Answer"
                className="form-control-lg"
                onChange={onSubmit}
                margin="normal"
                variant="outlined"
                 />
                 <TextField
                id="outlined-name"
                label="Wrong Answer 1"
                className="form-control-lg"
                onChange={onSubmit}
                margin="normal"
                variant="outlined"
                 />
                 <TextField
                id="outlined-name"
                label="Wrong Answer 2"
                className="form-control-lg"
                onChange={onSubmit}
                margin="normal"
                variant="outlined"
                 />
                 <TextField
                id="outlined-name"
                label="Wrong Answer 3"
                className="form-control-lg"
                onChange={onSubmit}
                margin="normal"
                variant="outlined"
                 />
                </form>
                </CardContent>
                <CardActions>
                    <Button size="large">Add Question</Button>
                </CardActions>
                </Card>
            </Container>
            <span className="spacer-lg"></span>
            </div>
        )
    }
}
