import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './sidebar.css';

class Sidebar extends Component {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return (
            <Fragment>
                <nav className="nav sidebar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand nav-right nav-menu sidebar-header">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="navbar-menu nav-right">
                        <ul className="list-unstyled components is-size-5">
                            <li className="navbar-item">
                                <Link
                                    to="/dashboard/secret"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    className="sidebar-link dropdown-toggle sidebar-dropdown-toggle"
                                >
                                    Secret Dashboard
                                </Link>
                            </li>
                            <li className="navbar-item sidebar-strategy">
                                <Link
                                    to="/dashboard/settings"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    className="sidebar-link dropdown-toggle sidebar-dropdown-toggle"
                                >
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        );
    }
}

export default Sidebar;
