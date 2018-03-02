import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const stateToProps = state => {
    return {
        page: '',
        title: '',
        breadcrumbs: [
            ['Home', '/'],
            ['Home', '/'],
            ['Current'],
        ],

        data: {
            head: [],
            list: [],
            footer: [],
        },

        pager: {

        },
    }
};


const rows = {

};

export default connect(stateToProps)(class PageDataTable extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTable() {
        return (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
        );
    }

    renderPagination() {
        return (
            <nav aria-label="Page navigation example">
             <ul className="pagination justify-content-center">
               <li className="page-item">
                 <a className="page-link" href="#" aria-label="Previous">
                   <span aria-hidden="true">&laquo;</span>
                   <span className="sr-only">Previous</span>
                 </a>
               </li>
               <li className="page-item"><a className="page-link" href="#">1</a></li>
               <li className="page-item"><a className="page-link" href="#">2</a></li>
               <li className="page-item"><a className="page-link" href="#">3</a></li>
               <li className="page-item">
                 <a className="page-link" href="#" aria-label="Next">
                   <span aria-hidden="true">&raquo;</span>
                   <span className="sr-only">Next</span>
                 </a>
               </li>
             </ul>
            </nav>
        );
    }

    renderBreadcrumbItem(data, idx) {
        const [title, href] = data || ['Home', '/'];

        if (!href) {
            return (
                <li key={idx} className="breadcrumb-item active" aria-current="page">{title}</li>
            );
        }

        return (
            <li key={idx} className="breadcrumb-item">
                <Link to={href}>{title}</Link>
            </li>
        );
    }

    renderBreadcrumb() {
        const { breadcrumbs = [['Home', '/']] } = this.props;

        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {breadcrumbs.map(this.renderBreadcrumbItem)}
                </ol>
            </nav>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <br />
                        <br />
                        <h1>{ this.props.title || 'Test' }</h1>
                        { this.renderBreadcrumb() }
                        { this.renderTable() }
                        { this.renderPagination() }
                    </div>
                </div>
            </div>
        );
    }
});
