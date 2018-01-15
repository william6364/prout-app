import React, {Component} from 'react';
import './index.css';
import {Item, Image} from 'semantic-ui-react';
class Groups extends Component {
    render(){
        const groups = [
            {
                name: "Group 1",
                imageSrc:"http://via.placeholder.com/200x200",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
            },
            {
                name: "Group 2",
                imageSrc:"http://via.placeholder.com/200x200",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
            }
        ];
        const groupList = groups.map(function(group){
            return <Item>
                        <Item.Image>
                            <Image src={group.imageSrc} />
                        </Item.Image>
                        <Item.Content>
                            <Item.Header>
                                {group.name}
                            </Item.Header>
                            <Item.Description>
                                {group.desc}
                            </Item.Description>
                        </Item.Content>
                    </Item>;
        });
        return (
            <div>
                <Item.Group>
                    {groupList}
                </Item.Group>
            </div>
        );
    }
}

export default Groups;
