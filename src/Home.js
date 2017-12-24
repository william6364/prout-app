import React, {Component} from 'react';
import Events from './Events'
import './index.css';
import {Image, Grid, Header} from 'semantic-ui-react';
class Home extends Component {
    render() {
        return (
            <div>
                <Grid celled>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Header size="large">
                                Recommended Events
                            </Header>
                            {Events}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Header size="large">
                                Recommended Groups
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Header size="large">
                                Users like you
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }

}

export default Home;
