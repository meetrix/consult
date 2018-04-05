/**
 * Created by supun on 08/01/18.
 */

// Core modules

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Consultants from '../../components/Consultants/Consultants';

class ConsultantsView extends Component {
  render() {
    let view = null;
    if (this.props.consultants !== undefined) {
      view = <Consultants consultants={this.props.consultants} actions={this.props.actions} />;
    }
    /* eslint max-len:0 */
    return (
      <div>
        {/* <Row>

            <Col xs="12" md="6">
                <TextSearch label="textsearch" name="textsearch" placeHolder="textsearch"/>
            </Col>

            <Col xs="12" md="6">
                <SortByRadioButtons label="Sort" name="sortBy" radioButtons={this.props.radioButtons}/>
            </Col>
        </Row>

        <Row>
            <DropDownMenuSet dropDownMenus={this.props.dropDownMenus}/>
        </Row> */}
        {view}
      </div>
    );
  }
}

ConsultantsView.propTypes = {
//   dropDownMenus: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string,
//         label: PropTypes.string,
//         options: PropTypes.arrayOf(PropTypes.string),
//       },),),
//   radioButtons: PropTypes.arrayOf(PropTypes.shape({
//         label: PropTypes.string,
//       },),),
  consultants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string.isRequired,
  })).isRequired,
  actions: PropTypes.shape.isRequired,

};

export default ConsultantsView;
