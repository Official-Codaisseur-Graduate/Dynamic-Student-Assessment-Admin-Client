import React, { Component} from 'react'
import SubNavigation from '../SubNavigation/SubNavigation'
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import picture from '../../constants/icon.png'



export default class Navbar extends Component {
    render() {
     
        return (

          <div>
          <AppBar variant="fixed" className="bg-white" position="static">
            <Toolbar>  
                <Link href="/" >
                <img src="https://vectr.com/tmp/a5Cpw0Nj34/cl8ePfAwW.png?width=62.19&height=91.77&select=aFphC0vP&source=selection" width="50px"></img>
                {/* <img className="logo pt-1" src='https://i1.wp.com/thenextwomen.com/summit/wp-content/uploads/2017/03/codaisseur-logo-long-2e9b7b7b839a33128016eb77b49ff2bb6397b6b3552523ee09273d6a5b427861.png?resize=1200%2C279&ssl=1' alt="codaisseur logo" width="260"/> */}
              </Link>
              <Link href="/signup" color="inherit" >
              <p className="text-dark text-bold-spaced nav-link pt-1">Sign Up</p>
              </Link>
              <Link href="/login"  >
              <p className="text-dark text-bold-spaced nav-link pt-1">Sign In</p>
              </Link>
              <Link href="/logout"  >
              <p className="text-dark text-bold-spaced nav-link pt-1">Log Out</p>
              </Link>
            </Toolbar>
        </AppBar>
    
       <SubNavigation />
          </div>
        )
    }
}
