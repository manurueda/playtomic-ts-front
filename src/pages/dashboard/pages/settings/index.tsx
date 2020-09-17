import React, { Fragment, Component } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { paths } from '../../../../paths';

interface SettingsUser {
    id: string;
    title: string;
    thumbnailUrl: string;
}
interface SettingsState {
    photos: SettingsUser[];
    loading: boolean;
}

class Settings extends Component<any, SettingsState> {
    constructor(props: any) {
        super(props);

        this.state = {
            photos: [],
            loading: true,
        };
    }
    componentDidMount() {
        fetch(paths.api.photos)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ photos: data, loading: false });
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
                                        {this.state.photos.map((photo) => (
                                            <div key={photo.id}>
                                                {photo.title} <br />
                                                <img src={photo.thumbnailUrl} alt="IMG_ALT"></img>
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

export default Settings;
