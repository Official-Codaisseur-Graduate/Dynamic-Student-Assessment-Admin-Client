import React, { Component } from 'react'

export default class AddQuestionForm extends Component {
    render() {
        return (
            <div>
                <form>
                <label>Create a new question</label>
                <br></br>
                 <input
                    type="textarea"
                    placeholder="Enter your question"/>
                <br></br>
                <label>Right Answer</label>
                <br></br>
                <input 
                    type="textarea"
                    placeholder="Right Answer"/>
                <br></br>
                 <label>Wrong Answer</label>
                 <br></br>
                <input 
                    type="textarea"
                    placeholder="Wrong Answer"
                    />
                <br></br>
                <label>Wrong Answer</label>
                <br></br>
                <input 
                    type="textarea"
                    placeholder="Wrong Answer"/>
                <br></br>
                <label>Wrong Answer</label>
                <br></br>
                <input 
                    type="textarea"
                    placeholder="Wrong Answer"/>
              <br></br>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
