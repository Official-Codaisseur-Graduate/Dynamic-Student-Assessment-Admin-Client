import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class SubNavigation extends Component {
    render() {
        return (
            <div>
                <nav>
                <ul>
                <li>
                  <Link to="/add-question">Add Question</Link>
                </li>
                <li>
                  <Link to="/questions">All Questions</Link>
                </li>
                <li>
                  <Link to="/students">Students</Link>
                </li>
              </ul>
                </nav>
            </div>
        )
    }
}
