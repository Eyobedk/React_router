import { Fragment } from 'react';
import {Link, Outlet } from 'react-router-dom';

function Nav() {
    return (
       < Fragment >
      <div >
      The information about feta 
      <Link to='/play'> play</Link>
      </div>
      {/* <Outlet /> */}
      </Fragment > )
  }

export default Nav;