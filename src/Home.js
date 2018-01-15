import React, {Component} from 'react';
import './index.css';
import {Grid, Header} from 'semantic-ui-react';
import Events from './Events';
import Groups from './Groups';
import Users from './Users';
class Home extends Component {
    render() {
        return (
            <div>
                <Grid celled>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Header as="h1">
                                Recommended Events
                            </Header>
                            <Events />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Header as="h1">
                                Recommended Groups
                            </Header>
                            <Groups />
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h1">
                                Users like you
                            </Header>
                            <Users />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }

}

export default Home;
