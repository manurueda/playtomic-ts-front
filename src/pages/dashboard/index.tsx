import React, { Component, Fragment } from 'react';
import './dashboard.css';

// We import layout
import Sidebar from './partials/sidebar';
import TopNavbar from './partials/topnavbar';
import DashboardContent from './partials/dashboardcontent';
import { Column } from 'rbx';

// We divide the Dashboard in 3 different sections:
//   1. Sidebar
//   2. Fixed TopNavbar (Name + Logout)
//   3. Middle section (Dynamic Content)
class Dashboard extends Component {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return (
            <Fragment>
                <Column.Group>
                    <Column size={3}>
                        <Sidebar />
                    </Column>
                    <Column size={9}>
                        <TopNavbar />
                        <DashboardContent />
                    </Column>
                </Column.Group>
            </Fragment>
        );
    }
}

export default Dashboard;
