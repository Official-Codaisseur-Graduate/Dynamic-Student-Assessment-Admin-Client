import React, { Component } from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

export default class AddQuestionForm extends Component {
    render() {
        const { onChange, onSubmit } = this.props;
		const { question, rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3 } = this.props.values;
        return (
            <div>
                <Container>
                <Form onSubmit={onSubmit}>
                <legend 
                className="mui--text-headline">
                Create a new question</legend>
                <Textarea 
                className="Required" 
                placeholder="Enter a new question" 
                name="question"
                value={question} 
				onChange={onChange}
                required={true}/>
                <Input
                className="Required" 
                placeholder="Right Answer" 
                name="rightAnswer"
                value={rightAnswer} 
				onChange={onChange}
                required={true}/>
                <Input 
                className="Required" 
                placeholder="Wrong Answer 1" 
                name="wrongAnswer1"
                value={wrongAnswer1} 
				onChange={onChange}
                required={true} />
                <Input 
                className="Required" 
                placeholder="Wrong Answer 2" 
                name="wrongAnswer2"
                value={wrongAnswer2} 
				onChange={onChange}
                required={true} />
                <Input 
                className="Required" 
                placeholder="Wrong Answer 3"
                name="wrongAnswer3"
                value={wrongAnswer3} 
				onChange={onChange}
                required={true} />
                <Button variant="raised">Submit</Button>
                </Form>
                </Container>
            </div>
        )
    }
}
