import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { connect, RootStateOrAny } from 'react-redux';
import { paths } from '../paths';

interface PrivateRouteProps extends RouteProps {
    isAuthenticated: boolean;
}

class PrivateRoute extends Route<PrivateRouteProps> {
    render() {
        return (
            <Route
                render={(props: RouteComponentProps) => {
                    if (!this.props.isAuthenticated) {
                        return <Redirect to={paths.login} />;
                    }

                    if (this.props.component) {
                        return React.createElement(this.props.component);
                    }

                    if (this.props.render) {
                        return this.props.render(props);
                    }
                }}
            />
        );
    }
}

const mapStateToProps = (state: RootStateOrAny) => ({
    isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
