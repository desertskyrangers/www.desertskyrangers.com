import './App.css';
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {

	render() {
		return (
			<div className='content'>
				<div className="row">
					<div className="column menu">
					</div>
					<div className="column">

						<h2>Jan 2022 Ranger Rally</h2>
						<p>
							We will be holding a Ranger Rally at 10am on Saturday, Jan 29th
							at <a href="https://goo.gl/maps/WfuVVZqe4Qv32PX27"><FontAwesomeIcon icon={faMapMarkerAlt}/> Wardle Fields Regional Park</a> on
							the west side field. This will be a small event with open flying.
							The temperatures will still be in the 30s so come bundled up.
						</p>

						<h2>Announcing FlightDeck!</h2>
						<p>
							Welcome to the <a href='/flightdeck'>FlightDeck</a>, your personal destination for UAV management,
							flight logging and pilot data.
						</p>

						<h2>Where We Fly</h2>
						<p>
							If you're wondering what's up in the sky, it might just be us hanging
							out at some of our favorite locations:
						</p>
						<h5><a href="https://goo.gl/maps/i3NkAMGppHkqknxw6"><FontAwesomeIcon
							icon={faMapMarkerAlt}/></a> Morning Cloak Park (Thursdays before sunset)</h5>
						<p>
							A small, bowl shaped park surrounded by small trees. This location
							is a bit challenging due to the small field and surrounding trees
							but is popular with the group due to the proximity of several members.
							Mark has a <a href="http://mark.soderquist.net/weather/">weather
							station</a> nearby that gives realtime flight conditions for the
							area.
						</p>
						<h5><a href="https://goo.gl/maps/oLuZKi1qZzowQPj58"><FontAwesomeIcon
							icon={faMapMarkerAlt}/></a> Pony Express Elementary (some Saturday mornings)</h5>
						<p>
							A large rectangular field with only a few trees next to the school. This
							field provides a long and wide field perfect for beginner pilots and
							experts alike. Due to the open space to the northeast there are no houses
							in the immediate area. However, please do not fly during school hours.
						</p>
						<h5><a href="https://goo.gl/maps/WfuVVZqe4Qv32PX27"><FontAwesomeIcon
							icon={faMapMarkerAlt}/></a> Wardle Fields Regional Park (some Saturday mornings)</h5>
						<p>
							<a href='https://slco.org/parks/wardle-fields-regional-park/'>Wardle Fields Regional
								Park</a> has
							large open fields including a large, bowl shaped field not marked for
							sports. There are only a few small trees near the field and a gently
							sloping hill on the edge of the bowl.
						</p>
					</div>
					<div className="column news">
						<div>
							<div className='title'>Weather Humor</div>
							<p>Why was the storm so dark and gloomy?<br/>- Because it was "mis-thunder-stood".</p>
							<p>Why do clouds feel overlooked?<br/>- Because they're in "di-skies".</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
