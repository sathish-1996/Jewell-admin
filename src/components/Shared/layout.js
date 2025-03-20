import React, { Component } from 'react';
import Menu from './menu';
const Layout = (props) => {
	
	return (
		<div id="main_content">
			<Menu {...props} />
		</div>
	)
}
export default Layout

