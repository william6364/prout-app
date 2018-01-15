import React, {Component} from 'react';
import './index.css';
import {Grid, Image, Header} from 'semantic-ui-react';
class Groups extends Component {
    render(){
        const groups = [
            {
                name: "Group 1",
                imageSrc:"http://via.placeholder.com/200x200",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
            },
            {
                name: "Group 1",
                imageSrc:"http://via.placeholder.com/200x200",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
            }
        ];
        const groupList = groups.map(function(group){
            return <Grid.Row columns={2}>
                        <Grid.Column>
                            <Image src={group.imageSrc} />
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2'>{group.name}</Header>
                            {group.desc}
                        </Grid.Column>
                    </Grid.Row>;
        });
        return (
            <div>
                <Grid>
                    {groupList}
                </Grid>
            </div>
        );
    }
}

export default Groups;
