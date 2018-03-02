import React from 'react';
import { Link } from 'react-router';


export default class NotFound extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="jumbotron">
				<div className="container">
					<div className="col-md-12">
						<h1 className="display-3">Oops. Something wrong! </h1>
						<h2 className="display-4">It's 404 page. </h2>

						<p className="my-4">404. Page not found!</p>

						<p className="lead">
							<Link className="btn btn-primary btn-lg" to='/'>
							Go to home.
							</Link>
						</p>
					</div>
				</div>
			</div>
		);
	}
};
