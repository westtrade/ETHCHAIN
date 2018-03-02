import React from 'react';
import { connect } from 'react-redux';
import TopBar from '../components/TopBar';
import PageFooter from '../components/PageFooter';

class AppLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="layout">
                <TopBar />
                
                {this.props.children}

                <PageFooter />
            </div>
        );
    }
};

export default connect()(AppLayout);
