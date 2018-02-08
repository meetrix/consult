import React, { Component } from 'react';
import {Input, Label, FormGroup} from 'reactstrap';
import DropDownMenu from './DropDownMenu';
import PropTypes from 'prop-types';

class DropDownMenuSet extends Component {
    render() {
        let menuSet = this.props.dropDownMenus.map((dropDownMenu)=>
            <DropDownMenu key={"drop_down_menu_set_"+dropDownMenu.name} name={dropDownMenu.name} label={dropDownMenu.label} options={dropDownMenu.options}/>
        );

        return (
            <div>
                {menuSet}
            </div>
        )
    }
}

DropDownMenuSet.propTypes = {
    dropDownMenus : PropTypes.arrayOf(
        PropTypes.shape(
            {
                name: PropTypes.string,
                label: PropTypes.string,
                options: PropTypes.arrayOf(PropTypes.string)
            }
        )
    )
}

export default DropDownMenuSet;