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
        const { onChange, onSubmit} = this.props;
        const { questionContent, categoryId } = this.props.values;   

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
                        name="questionContent"
                        value={questionContent}
                    />
                    <Typography variant="subtitle1">Category </Typography>
                    <FormControl variant="outlined" label = "Category" placeholder = "Category">
                        <Select
                        className="form-control"
                        onChange={onChange}
                        value = {categoryId}
                        name='categoryId'
                        >
                        
                        <MenuItem value={0} key='Please pick a category'> Please pick a category </MenuItem>
                        <MenuItem value={1} key='Variables'> Variables </MenuItem>
                        <MenuItem value={2} key='Functions'> Functions </MenuItem>
                        <MenuItem value={3} key='Global'> Global </MenuItem>
                        <MenuItem value={4} key='Local'> Local </MenuItem>
                        <MenuItem value={5} key='Type Coercion'> Type Coercion </MenuItem>
                        <MenuItem value={6} key='Statements'> Statements </MenuItem>
                        
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
