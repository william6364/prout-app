import React, {Component} from 'react';
import './index.css';
import {Image, Item} from 'semantic-ui-react';

class Users extends Component {
    render() {
        const users = [
            {
                name: "User 1",
                imageSrc: "http://via.placeholder.com/200x200",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
            },
            {
                name: "User 2",
                imageSrc: "http://via.placeholder.com/200x200",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
            }
        ];
        const userList = users.map(function(user) {
            return <Item>
                        <Item.Image>
                            <Image src={user.imageSrc}/>
                        </Item.Image>
                        <Item.Content>
                            <Item.Header>
                                {user.name}
                            </Item.Header>
                            <Item.Description>
                                {user.desc}
                            </Item.Description>
                        </Item.Content>
                    </Item>;
        });
        return (
            <div>
                <Item.Group>
                    {userList}
                </Item.Group>
            </div>
        );
    }
}

export default Users;
