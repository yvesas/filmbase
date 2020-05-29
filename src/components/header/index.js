import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../assets/logo.svg';
import Switch from "@material-ui/core/Switch";

export default class Header extends Component {


  render() {
    return (
      <AppBar position="relative" style={{ background: '#032541' }} >
        <Toolbar>
          <img src={logo} alt="Logo" />
          {/* <Switch checked={this.props.mode} onChange={()=> this.props.handleTheme} /> */}
        </Toolbar>
      </AppBar>
    )
  }
}