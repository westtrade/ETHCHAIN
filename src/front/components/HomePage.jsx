import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ScrollArea from 'react-scrollbar';

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const Label = styled.span`
	display: inline-block;
	line-height: 31px;
`;

const BlockHeader = styled.h5`
	margin-bottom: -10px;
`;

const TopBlock = styled.div`
	height: 100%;
	box-sizing: border-box;
	margin-bottom: 20px;
`;

export default connect()(class HomePage extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			data: [
				{name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
				{name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
				{name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
				{name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
				{name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
				{name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
				{name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
			]
		};
	}

	render() {
		return (
			<div className="container">
				<br />
				<div className="row">
					<div className="col-md-6">
						<TopBlock className="card text-white bg-info mb-3">
							<div className="card-header">
								<i className="fa fa-globe fa-2x"></i> MARKET CAP OF $84.340 Billion
							</div>
							<div className="card-body">
								<p className="card-text">

								<strong>Last Block: </strong>
								5182545 (14.5s)
								</p>

								<p className="card-text">
								<strong>Transactions: </strong>
								174.41 M (10.5 TPS)
								</p>

								<p className="card-text">
								<strong>Hash Rate: </strong>
								Network Difficulty
								249,666.56 GH/s  3,054.80 TH

								</p>
							</div>
						</TopBlock>
					</div>
					<div className="col-md-6">
						<TopBlock className="card bg-light mb-3">
							<div className="card-header">
								<i className="fab fa-ethereum fa-2x"></i> 14 day Etherium chart history
							</div>
							<div className="card-body">
							<LineChart width={510} height={150} data={this.state.data}>
								{ /* }<XAxis dataKey="name"/>
								<YAxis/>
								*/ }
								<CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
								<Line type="monotone" dataKey="uv" stroke="#8884d8" />
								{ /*<Line type="monotone" dataKey="pv" stroke="#82ca9d" /> */ }
							</LineChart>
							</div>
						</TopBlock>
					</div>
				</div>

				<br />
				<br />
				<br />
				<div className="row">
					<div className="col">
						<BlockHeader><Label>Blocks</Label> <Link to="/blockchain/blocks" className="btn btn-primary btn-sm float-right">View All</Link></BlockHeader>
						<br />

						<ScrollArea
							speed={0.8}
							contentClassName="content"
							horizontal={false}
							style={ ({maxHeight: 350}) }
							>
								<div className="list-group">
									<Link to="/blockchain/tx/1" className="list-group-item list-group-item-action flex-column align-items-start">
										<div className="d-flex w-100 justify-content-between">
											<h5 className="mb-1">List group item heading</h5>
											<small>3 days ago</small>
										</div>
										<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
										<small>Donec id elit non mi porta.</small>
									</Link>
								</div>
						</ScrollArea>
					</div>
					<div className="col">
						<BlockHeader><Label>Transactions</Label> <Link to="/blockchain/txns" className="btn btn-primary btn-sm float-right">View All</Link></BlockHeader>
						<br />
						<ScrollArea
							speed={0.8}
							contentClassName="content"
							horizontal={false}
							style={ ({maxHeight: 350}) }
							>
								<div className="list-group">
									<Link to="/blockchain/tx/1" className="list-group-item list-group-item-action flex-column align-items-start">
										<div className="d-flex w-100 justify-content-between">
											<h5 className="mb-1">List group item heading</h5>
											<small>3 days ago</small>
										</div>
										<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
										<small>Donec id elit non mi porta.</small>
									</Link>
								</div>
						</ScrollArea>
					</div>
				</div>
			</div>
		);
	}
});
