import React, {Component} from 'react';
import './index.css';
import {Menu, Image} from 'semantic-ui-react';

class Public extends Component {
    handleLogin(){
        alert("login")
    }

    render() {
        return (
            <div>
                <Menu>
                    <Menu.Item>
                        <Image src='logo.png' size='small' alt='logo' />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item name='login' onClick={this.handleLogin}>
                            Login
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Image src='banner.jpg' alt='banner' />
            </div>
        );
    }

}

export default Public;
