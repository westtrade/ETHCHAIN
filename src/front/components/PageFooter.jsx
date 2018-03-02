import 'style/footer.sass';

import React from 'react';
import { Link } from 'react-router';

export default class PageFooter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="footer">
				<div className="container">
					<span className="text-muted">
						&copy; ETHCHAIN, 2018.
					</span>
				</div>
			</footer>
		);
	}
};
