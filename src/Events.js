import React, {Component} from 'react';
import './index.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Grid, Image, Button} from 'semantic-ui-react';
class NextArrow extends Component{
    render() {
        return <button onClick={this.props.onClick} className='slick-next'><Image src='rightarrow.png' alt='Next'/></button>
    }
}
class PrevArrow extends Component{
    render() {
        return <button onClick={this.props.onClick} className='slick-prev'><Image src='leftarrow.png' alt='Previous'/></button>
    }
}
class Events extends Component {
    render(){
        const events = [
            {
                name: "Event 1",
                imageSrc:"http://via.placeholder.com/150x150",
                date: "Friday, 11 Jul 2018",
                time: "5.00pm",
                attendance: "X"
            },
            {
                name: "Event 2",
                imageSrc:"http://via.placeholder.com/150x150",
                date: "Friday, 11 Jul 2018",
                time: "5.00pm",
                attendance: "X"
            },
            {
                name: "Event 3",
                imageSrc: "http://via.placeholder.com/150x150",
                date: "Friday, 11 Jul 2018",
                time: "5.00pm",
                attendance: "X"
            },
            {
                name: "Event 4",
                imageSrc: "http://via.placeholder.com/150x150",
                date: "Friday, 11 Jul 2018",
                time: "5.00pm",
                attendance: "X"
            },
            {
                name: "Event 5",
                imageSrc: "http://via.placeholder.com/150x150",
                date: "Friday, 11 Jul 2018",
                time: "5.00pm",
                attendance: "X"
            },
            {
                name: "Event 6",
                imageSrc: "http://via.placeholder.com/150x150",
                date: "Friday, 11 Jul 2018",
                time: "5.00pm",
                attendance: "X"
            }
        ];
        const eventSlider = events.map(function(event){
            return <div>
                    <Grid padded    >
                        <Grid.Row>
                            <Grid.Column>
                                {event.name}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src={event.imageSrc} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                {event.date}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                {event.time}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                {event.attendance + " attending"}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>;
        });
        const settings = {
            dots: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            className: 'slick-slider'
        };
        return (
            <Slider {...settings}>
                {eventSlider}
            </Slider>
        );
    }
}
export default Events;
