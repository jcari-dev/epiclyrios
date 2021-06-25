import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavBarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		{/* <a class="navbar-brand" href="/">
      		<div class="logo-image">
            <img src="image" class="img-fluid">
      		</div>
       	</a> */}
		<NavMenu>
		    <NavLink to='/' activeStyle>
                <img src="https://i.ibb.co/0jsWS9h/Screen-Shot-2021-06-14-at-10-31-13-PM-removebg-preview.png" class="img-fluid" />
			</NavLink>
			<NavLink to='/session' activeStyle>
			Sign In
			</NavLink>
			<NavLink to='/show' activeStyle>
			View Your Favorite Videos
			</NavLink>
			<NavLink to='/user' activeStyle>
			Sign Up
			</NavLink>
		</NavMenu>
		<NavBtn>
			<NavBtnLink to='/session'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
  );
};

export default Navbar;
