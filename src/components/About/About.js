import React from 'react';

const About = ({ name }) => {
	return (
		<section className="about" id="about">
			<h3>
				Hi! I'm {name} <i className="animated hover-rotate em em-raised_hand_with_fingers_splayed" />
			</h3>
			<div className="details">
				<div className="item text-muted">
					<p>
						I develop Android apps for a living. Fortunately, It’s also something I’m really passionate about. When not working with my overlords, I spend time hiking and taking photos of cool things I find.
					</p>
					<p>
						Some of my previous works: &nbsp; &nbsp;
						<a rel="noopener noreferrer" target="_BLANK" href="https://play.google.com/store/apps/details?id=com.spendy">
							Spendy,
						</a>
						&nbsp;&nbsp;
						<a rel="noopener noreferrer" target="_BLANK" href="https://play.google.com/store/apps/details?id=com.doday">
							DoDay.
						</a>					
					</p>
				</div>
			</div>
		</section>
	);
};

export { About };
