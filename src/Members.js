import React from 'react';

export default class Members extends React.Component {

	render() {
		return (
			<div className='content'>
				<h1>Club Members</h1>

				<div className='member'>
					<div className='row'>
						<img className='photo' width='128' height='128' src='/photos/noah-b-2021-08-28.jpg' alt='Noah B'/>

						<div className='column'>
							<h3>Noah B</h3>
							<p>
								Noah has been flying since fall of 2020. He currently flies a Bixler
								1 with flaps he added as well as a home-built Flite Test Scout. He is
								currently in 9th grade and wants to be an astronautical engineer for
								his career. His favorite part of flying is building planes and learning
								how you make them fly well.
							</p>
						</div>
					</div>
				</div>

				<div className='member'>
					<h3>Husdon B</h3>
					<p>
					</p>
				</div>

				<div className='member'>
					<h3>Micah F</h3>
					<p>
					</p>
				</div>

				<div className='member'>
					<h3>Blaine F</h3>
					<p>
						Blaine first developed an interest in model planes in junior high school where
						he took a model airplane design class and built a couple of balsa gliders and
						a model Cessna powered by rubber bands. In 2020 he met Mark and took his interest
						to the next level by purchasing a Bixler v1.1 and learning how to fly it with lots
						of great coaching. Now his interests are in tinkering with flight controllers,
						researching new components and building foamboard models.
					</p>
				</div>

				<div className='member'>
					<h3>Mark S</h3>
					<p>
						Mark has been flying radio control aircraft since 1988. His passion
						is designing his own aircraft or modifying existing aircraft for
						different missions and functionality. Mark also has
						a <a href='https://www.youtube.com/channel/UChlvqrAlulGrYiXqqiaPeZw'>YouTube channel</a> where
						you can find video of many of his flights.
					</p>
				</div>

				<div className='member'>
					<h3>Glen V</h3>
					<p>
						Glen has been flying RC since 2020 (thanks to a generous introduction
						from Mark). Before then, his aviation experience has been in hangars
						with his extended family, helping on their planes, and getting to fly
						with them occasionally. Now building foamboard and 3D printed planes
						is his new adventure.
						His <a href='https://www.youtube.com/channel/UC2C2aXxFCsUwrsreGIAStCA'>YouTube channel</a> is
						sparse but growing with content of the builds and maiden flights.
					</p>
				</div>

			</div>
		)
	}

}
