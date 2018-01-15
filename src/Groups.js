import React, {Component} from 'react';
import './index.css';
import {Grid, Image} from 'semantic-ui-react';
class Groups extends Component {
    render(){
        const groups = [
            {
                name: "Group 1",
                imageSrc:"http://via.placeholder.com/150x150",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
            },
            {
                name: "Group 1",
                imageSrc:"http://via.placeholder.com/150x150",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
            }
        ];
        const groupList = groups.map(function(group){
            return <Grid.Row>
                    <Grid>
                        <Grid.Column>
                            <Grid.Row>
                                {group.name}
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column rows={2}>
                            <Grid.Row>
                                <Image src={group.imageSrc} />
                            </Grid.Row>
                            <Grid.Row>
                                {group.desc}
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
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
