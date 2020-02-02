import React, { Component } from 'react';
import { Drawer } from 'native-base';


export default class SideDrawer extends Component {
  closeDrawer() {
    this.drawer._root.close()
  }

    render() { 
        return ( 
        <Drawer ref={(ref) => 
            { this.drawer = ref; }} 
            content={
            <SideBar navigator={this.navigator} 
            />
            } 
            onClose={() => this.closeDrawer()} > 
            
        </Drawer> 
        ); 
    } 
  };