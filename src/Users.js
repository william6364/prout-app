import React, {Component} from 'react';
import './index.css';
import {Grid, Image, Header} from 'semantic-ui-react';
class Users extends Component {
    render(){
        const users = [
            {
                name: "User 1",
                imageSrc:"http://via.placeholder.com/200x200",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
            },
            {
                name: "User 2",
                imageSrc:"http://via.placeholder.com/200x200",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
            }
        ];
        const userList = users.map(function(user){
            return <Grid.Row columns={2}>
                <Grid.Column>
                    <Image src={user.imageSrc} />
                </Grid.Column>
                <Grid.Column>
                    <Header as='h2'>{user.name}</Header>
                    {user.desc}
                </Grid.Column>
            </Grid.Row>;
        });
        return (
            <div>
                <Grid>
                    {userList}
                </Grid>
            </div>
        );
    }
}

export default Users;
