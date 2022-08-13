import { Fragment } from 'react';
import {Outlet } from 'react-router-dom';

function Nav() {
    return (
       < Fragment >
      <div >
      The navigations 
      </div>
      <Outlet />
      </Fragment > )
  }

export default Nav;