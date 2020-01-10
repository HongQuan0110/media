import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import classNames from 'classnames';

class DefaultHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            color: "transparent"
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.resize);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.resize);
    }

    handleScroll = (event) => {
        // console.log(document.documentElement.scrollTop)
        // console.log(window.scrollY)
        // console.log(event.srcElement.body.scrollTop)
        // console.log(window.innerWidth)
        if(window.pageYOffset > 0 || window.innerWidth < 992){
            this.setState({
                color: "dark"
            })
        }
        else{
            this.setState({
                color: "transparent"
            })
        }
    }

    resize = () => {
        // if (window.innerWidth < 992){
        //     this.setState({
        //         color: "dark"
        //     })
        // }
    }

    render() {
        const { isOpen, color } = this.state;
        return (
            <Navbar className="header" color={color} light expand="md">
                <NavbarBrand className="linkNav" href="/">reactstrap</NavbarBrand>
                <NavbarToggler className="bg-white" onClick={this.toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="linkNav" href="/components/">ABOUT US</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="linkNav" href="https://github.com/reactstrap/reactstrap">CONTACT US</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="linkNav" href="/components/">TECHNOLOGY</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="linkNav" href="/components/">LOGIN</NavLink>
                        </NavItem>
                         <NavItem>
                            <NavLink className="linkNav" href="/components/">ENGLISH</NavLink>
                        </NavItem>
                    </Nav>
                    {/* <NavbarText className="linkNav">Simple Text</NavbarText> */}
                </Collapse>
            </Navbar>
            // <div className="header">
            //     <div className="header-left"></div>
            // </div>
        );
    }
}

export default DefaultHeader;
