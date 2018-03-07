import React,{Component} from 'react';
import Menu, {SubMenu, MenuItem} from 'rc-menu';

class RCMenu extends Component{
    render(){
        return(
            <Menu>
                <MenuItem>1</MenuItem>
                <SubMenu title="2">
                    <MenuItem>2-1</MenuItem>
                </SubMenu>
            </Menu>
        )
    }
}

export default RCMenu;