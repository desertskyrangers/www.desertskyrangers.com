import React from "react";
import Menu from "./Menu";

export default class Header extends React.Component {

	render() {
		return (
			<div className='header'>

				<div className="row center">
					<div className="column">
						<a href='/'><img width='64' height='64' src='/logo.png' alt="DSR"/></a>
					</div>

					<div className="column">
						<a href='/'><h3 className='no-margin'>Desert Sky Rangers</h3></a>
						<div>UAV Flying Club</div>
					</div>
				</div>

				<Menu/>

			</div>
		)
	}

}
