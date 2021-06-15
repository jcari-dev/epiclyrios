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

		<NavMenu>
		    <NavLink to='/' activeStyle>
				Home
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
