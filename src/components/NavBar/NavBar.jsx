import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
   return ( 
      <div className="NavBar">
         <nav className="NavMain">
            <ul>
               <li>
                  <Link
                     to="/"
                     className={props.activeLink === 'paintings' ? 'nav-link active' : 'nav-link'}
                     name="paintings"
                     onClick={props.handleLink}
                  >PAINTINGS</Link>
               </li>
               <li>
                  <Link
                     to="/murals"
                     className={props.activeLink === 'murals' ? 'nav-link active' : 'nav-link'}
                     name="murals"
                     onClick={props.handleLink}
                  >MURALS</Link>
               </li>
            </ul>
         </nav>

      </div>
    );
}
 
export default NavBar;