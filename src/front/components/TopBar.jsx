import 'style/topbar-dropdown.sass';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class TopBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <i className="fab fa-ethereum"></i> <strong>ETHCHAIN</strong>
                    </Link>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link" to="/" activeClassName="active" onlyActiveOnIndex={true}>
                                Home <span className="sr-only">(current)</span>
                            </Link>

                            <li className="nav-item dropdown topbar-dropdown">
                                <Link className="nav-link dropdown-toggle" to="/blockchain" activeClassName="active">
                                    Blockchain
                                </Link>
                                <div className="dropdown-menu topbar-dropdown__menu">
                                    <Link className="dropdown-item" to="/blockchain/txns" activeClassName="active">Transactions</Link>
                                    <Link className="dropdown-item" to="/blockchain/txns-pending" activeClassName="active">Pending Transactions</Link>
                                    <Link className="dropdown-item" to="/blockchain/txns-internal" activeClassName="active">Something else here</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/blockchain/blocks" activeClassName="active">Blocks</Link>
                                    <Link className="dropdown-item" to="/blockchain/uncles" activeClassName="active">Uncles</Link>
                                </div>
                            </li>

                            <li className="nav-item dropdown topbar-dropdown">
                                <Link className="nav-link dropdown-toggle" to="/account" activeClassName="active">
                                    Account
                                </Link>
                                <div className="dropdown-menu topbar-dropdown__menu">
                                    <Link className="dropdown-item" to="/account/all" activeClassName="active">All accounts</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/account/certified-contracts" activeClassName="active">Verified Contracts</Link>
                                </div>
                            </li>

                            <li className="nav-item dropdown topbar-dropdown">
                                <Link className="nav-link dropdown-toggle" to="/token" activeClassName="active">
                                    Tokens
                                </Link>
                                <div className="dropdown-menu topbar-dropdown__menu">
                                    <Link className="dropdown-item" to="/token/all" activeClassName="active">Tokens list</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/token/transfers" activeClassName="active">Token transfers</Link>
                                </div>
                            </li>


                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default connect()(TopBar);
