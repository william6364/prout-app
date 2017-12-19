import React, {Component} from 'react';
import './index.css';
import {Image} from 'semantic-ui-react';

class Home extends Component {

    render() {
        return (
            <div>
                <Image src='banner.jpg' alt='banner' />
            </div>
        );
    }

}

export default Home;
