import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import SubNavigation from '../SubNavigation/SubNavigation'



export default class Navbar extends Component {
    render() {
      let s1 = {verticalAlign: 'center'};
      let s2 = {textAlign: 'center'};
        return (

          <div>
          
       <table width="30%">
         <tbody>
           <tr style={s1}>
             <td className="mui--appbar-height" style={s2}>
               <Link to="/" className="mui--text-title">Home</Link>
              </td>
             <td className="mui--appbar-height" style={s2}>
             <Link to="/signup" className="mui--text-title">Sign Up</Link>
             </td>
             <td className="mui--appbar-height" style={s2}>
             <Link to="/login" className="mui--text-title">Log In</Link>
             </td>
             <td className="mui--appbar-height" style={s2}>
             <Link to='/logout' className="logout mui--text-title">Log Out</Link>
             </td>
           </tr>
         </tbody>
       </table>
       <SubNavigation />
          </div>
        )
    }
}
