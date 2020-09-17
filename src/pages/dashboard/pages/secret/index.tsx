import React, { Fragment, Component } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { paths } from '../../../../paths';

interface SecretUser {
    id: string;
    name: string;
    username: string;
    email: string;
    address: string;
    phone: string;
    website: string;
    company: string;
}
interface SecretState {
    users: SecretUser[];
    loading: boolean;
}

class Secret extends Component<any, SecretState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
            loading: true,
        };
    }
    componentDidMount() {
        fetch(paths.api.users)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ users: data, loading: false });
            })
            .catch(console.log);
    }

    render() {
        return (
            <Fragment>
                {this.state.loading ? (
                    <BarLoader />
                ) : (
                    <section className="section">
                        <div className="columns">
                            <div className="column is-narrow">
                                <div className="payment-box">
                                    <div className="info ">
                                        {this.state.users.map((user) => (
                                            <div key={user.id}>
                                                {user.name} <br />
                                                (website): {user.website}
                                                <br />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </Fragment>
        );
    }
}

export default Secret;
