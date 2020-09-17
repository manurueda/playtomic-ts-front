import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Secret from '../../pages/secret';
import Settings from '../../pages/settings';

class DashboardContent extends Component {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return (
            <Fragment>
                <Route path="/dashboard/secret" component={Secret} />
                <Route path="/dashboard/settings" component={Settings} />
            </Fragment>
        );
    }
}

export default DashboardContent;
