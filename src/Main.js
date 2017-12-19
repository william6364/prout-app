import React, {Component} from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Mailbox from "./Mailbox";
import Resources from "./Resources";
import './index.css';
import {Menu, Image} from 'semantic-ui-react';

class Main extends Component {
    state = {};

    handleItemClick = ({ name }) => this.setState({ activeItem: name });


    render() {
        const { activeItem } = this.state;
        return (
            <HashRouter>
                <div>
                    <Menu size='massive' className="NavBar">
                        <Menu.Item>
                            <Image src='logo.png' size='small' alt='logo' />
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                                <NavLink to="/">Home</NavLink>
                            </Menu.Item>
                            <Menu.Item name='mailbox' active={activeItem === 'mailbox'} onClick={this.handleItemClick}>
                                <NavLink to="/mailbox">Mailbox</NavLink>
                            </Menu.Item>
                            <Menu.Item name='resources' active={activeItem === 'resources'} onClick={this.handleItemClick}>
                                <NavLink to="/resources">Resources</NavLink>
                            </Menu.Item>
                            <Menu.Item name='profile'>
                                Profile Name
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/mailbox" component={Mailbox}/>
                        <Route path="/resources" component={Resources}/>
                    </div>
                </div>
            </HashRouter>
        );
    }

}

export default Main;
