import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class SubNavigation extends Component {
    render() {
      let s1 = {verticalAlign: 'center'};
      let s2 = {textAlign: 'center'};
        return (
            <div>

<table width="45%">
         <tbody>
           <tr style={s1}>
             <td className="mui--appbar-height" style={s2}>
               <Link to="/add-question" className="mui--text-subhead">Add new questions</Link>
              </td>
             <td className="mui--appbar-height" style={s2}>
             <Link to="/questions" className="mui--text-subhead">All Questions</Link>
             </td>
             <td className="mui--appbar-height" style={s2}>
             <Link to="/students" className="mui--text-subhead">Students</Link>
             </td>
           </tr>
         </tbody>
       </table>
                {/* <nav style={s1}>
                <ul>
                <li>
                  <Link to="/add-question" className="mui--appbar-height">Add Question</Link>
                </li>
                <li>
                  <Link to="/questions">All Questions</Link>
                </li>
                <li>
                  <Link to="/students">Students</Link>
                </li>
              </ul>
                </nav> */}
               
            </div>
        )
    }
}
