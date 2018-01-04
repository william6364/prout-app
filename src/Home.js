import React, {Component} from 'react';
import './index.css';
import {Grid, Header} from 'semantic-ui-react';
import Events from './Events';
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
                            <Events />
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
