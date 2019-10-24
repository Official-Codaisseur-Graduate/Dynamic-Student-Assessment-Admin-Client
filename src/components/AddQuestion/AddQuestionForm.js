import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
                        id="outlined"
                        label="Question"
                        className="form-control-lg-textfield"
                        multiline
                        rows="4"
                        onChange={onChange}
                        margin="normal"
                        variant="outlined"
                        name="question"
                        value={question}
                    />
                    <Typography variant="subtitle1">Category </Typography>
                    <FormControl variant="outlined">
                        <Select
                        className="form-control"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-simple',
                        }}
                        >
                        <MenuItem value="">
                            <em>No category</em>
                        </MenuItem>
                        <MenuItem value={1}>Variables</MenuItem>
                        <MenuItem value={2}>Functions</MenuItem>
                        <MenuItem value={3}>Global</MenuItem>
                        <MenuItem value={4}>Local</MenuItem>
                        <MenuItem value={5}>Type Coercion</MenuItem>
                        <MenuItem value={6}>Statements</MenuItem>
                        
                        </Select>
                    </FormControl>
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
