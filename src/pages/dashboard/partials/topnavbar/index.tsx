import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { History, LocationState } from 'history';
import { LogoutUser } from '../../../../store/user/actions';
import { User } from '../../../../store/user/types';
import { FaSignOutAlt } from 'react-icons/fa';

interface LoginProps {
    user: User;
    history: History<LocationState>;
    LogoutUser: typeof LogoutUser;
}

type Props = LoginProps;

class TopNavbar extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    onLogoutClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        this.props.LogoutUser();
    }

    render() {
        return (
            <Fragment>
                <section className="section">
                    <div className="c">
                        <nav className="level ">
                            <div className="level-left">
                                <div className="level-item dashboard-text left">
                                    <h1 className="is-size-2">Welcome {this.props.user.name}</h1>
                                </div>
                            </div>

                            <div className="level-right is-hidden-mobile">
                                <div className="level-item">
                                    <span className="Path" onClick={this.onLogoutClick}>
                                        LOG OUT <FaSignOutAlt />
                                    </span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </section>
            </Fragment>
        );
    }
}

const mapStateToProps = (state: LoginProps) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        LogoutUser: () => dispatch(LogoutUser()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopNavbar));
