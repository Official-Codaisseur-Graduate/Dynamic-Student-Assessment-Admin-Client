import React, { Component } from 'react'

export default class AddQuestionForm extends Component {
    render() {
        const { onChange, onSubmit } = this.props;
		const { question, rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3 } = this.props.values;
        return (
            <div>
                <form onSubmit={onSubmit}>
                <label>Create a new question</label>
                <br></br>
                 <input
                    type="textarea"
                    placeholder="Enter your question"
                    value={question} 
					onChange={onChange}/>
                <br></br>
                <label>Right Answer</label>
                <br></br>
                <input 
                    type="textarea"
                    placeholder="Right Answer"
                    value={rightAnswer} 
					onChange={onChange}/>
                <br></br>
                 <label>Wrong Answer</label>
                 <br></br>
                <input 
                    type="textarea"
                    placeholder="Wrong Answer"
                    value={wrongAnswer1} 
					onChange={onChange}/>
                <br></br>
                <label>Wrong Answer</label>
                <br></br>
                <input 
                    type="textarea"
                    placeholder="Wrong Answer"
                    value={wrongAnswer2} 
					onChange={onChange}/>
                <br></br>
                <label>Wrong Answer</label>
                <br></br>
                <input 
                    type="textarea"
                    placeholder="Wrong Answer"
                    value={wrongAnswer3} 
					onChange={onChange}/>
              <br></br>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
