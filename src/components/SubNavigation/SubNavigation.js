import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


export default class SubNavigation extends Component {
    render() {
     
        return (
            <div>
              <AppBar className="bg-dark" position="static">
            <Toolbar>
                
                <Link href="/add-question" >
                <p className="text-white nav-link">Add Questions</p>
              </Link>
              <Link href="/questions" color="inherit" >
              <p className="text-white nav-link">Questions</p>
              </Link>
              <Link href="/students"  >
              <p className="text-white nav-link">Students</p>
              </Link>
            </Toolbar>
           
        </AppBar>
        
                {/* <Typography>
      <Link href="/add-question" >
        <h3>Add Questions</h3>
      </Link>
      <Link href="/questions" color="inherit" >
      <h3>All Questions</h3>
      </Link>
      <Link href="/students"  >
      <h3>Students</h3>
      </Link>
                </Typography> */}
{/* <table width="45%">
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
       </table> */}
              
              </div>
        )
    }
}
