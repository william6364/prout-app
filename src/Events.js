import React, {Component} from 'react';
import './index.css';
import {Table} from 'semantic-ui-react';
class Events extends Component {
    render(){
        const events = [
            {
                name: "Event Name",
                imageSrc:"http://via.placeholder.com/150x150",
                date: "Friday, 11 Jul 2018",
                time: "5.00pm",
                attendance: "X"
            },
            {
                name: "Event Name",
                imageSrc:"http://via.placeholder.com/150x150",
                date: "Friday, 11 Jul 2018",
                time: "5.00pm",
                attendance: "X"
            },
            {
                name: "Event Name",
                imageSrc: "http://via.placeholder.com/150x150",
                date: "Friday, 11 Jul 2018",
                time: "5.00pm",
                attendance: "X"
            }
        ];
        const table = Object.keys(events[0]).map(function(key){
            return <Table.Row>
                <Table.Cell>
                    Key: {key}, Value: {events[0][key]}
                </Table.Cell>
            </Table.Row>;
        });
        return (
            <div>
                <Table>
                    <Table.body>
                        {table}
                    </Table.body>
                </Table>
            </div>
        );
    }
}

export default Events;
