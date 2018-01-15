import React, {Component} from 'react';
import './index.css';
import {Grid, Header, Container} from 'semantic-ui-react';
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
                            <Container textAlign='right' fluid>
                                Explore More Events >
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Header as="h1">
                                Recommended Groups
                            </Header>
                            <Groups />
                            <Container textAlign='right' fluid>
                                Explore More Groups >
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h1">
                                Users like you
                            </Header>
                            <Users />
                            <Container textAlign='right' fluid>
                                Find Other Users Like Yourself >
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }

}

export default Home;
