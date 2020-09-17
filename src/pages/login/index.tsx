import React from 'react';
import { connect } from 'react-redux';
import { History, LocationState } from 'history';
import { paths } from '../../paths/index';
import { User } from '../../store/user/types';
import { LoginUser } from '../../store/user/actions';
import { Hero, Container } from 'rbx';
import './login.css';

//import isEmpty from '../../utils/validation/is-empty';

interface LoginState {
    email: string;
    password: string;
    error: string;
}

interface LoginProps {
    user: User;
    error: string;
    history: History<LocationState>;
    LoginUser: typeof LoginUser;
}

type Props = LoginProps;

class Login extends React.Component<Props, LoginState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.user && this.props.user.isAuthenticated) {
            this.props.history.push(paths.dashboard.secret);
        }
    }
    componentDidUpdate(prevProps: LoginProps) {
        if (this.props.user.isAuthenticated !== prevProps.user.isAuthenticated) {
            this.props.history.push(paths.dashboard.secret);
        }

        if (prevProps.error !== this.props.error) {
            this.setState({
                error: this.props.error,
            });
        }
    }

    onChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({ ...this.state, [e.currentTarget.name]: e.currentTarget.value });
    }

    onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const userData: User = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.LoginUser(userData);
    }

    render() {
        return (
            <Hero size="fullheight">
                <Hero.Body>
                    <Container className="has-text-centered">
                        <div className="columns is-centered">
                            <div className="column login-container is-half">
                                <div className="box is-vcentered">
                                    <figure className="avatar">
                                        <h1 className="login-header">Sign in</h1>
                                    </figure>
                                    <br />
                                    <div className="login-form">
                                        <form onSubmit={this.onSubmit}>
                                            <p className="help is-danger">{this.props.error}</p>
                                            <input
                                                className="input login-input"
                                                type="text"
                                                name="email"
                                                placeholder="Please type your email"
                                                onChange={this.onChange}
                                            />

                                            <input
                                                className="input login-input"
                                                type="password"
                                                name="password"
                                                placeholder="Please type your password"
                                                onChange={this.onChange}
                                                autoComplete="on"
                                            />
                                            <button
                                                type="submit"
                                                className="button login-button is-medium is-info  is-fullwidth"
                                            >
                                                &nbsp; Sign In
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Hero.Body>
            </Hero>
        );
    }
}

const mapStateToProps = (state: LoginProps) => ({
    user: state.user,
    error: state.error,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        LoginUser: (user: User) => dispatch(LoginUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
