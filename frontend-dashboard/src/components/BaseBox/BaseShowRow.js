/**
 * Created by supun on 15/02/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

class BaseShowRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFirstComponentIndex: 0,
      numComponentView: this.props.numComponentView,
      showComponents: [],
    };
    this.previousComponent = this.previousComponent.bind(this);
    this.nextComponent = this.nextComponent.bind(this);
  }

  componentDidMount() {
    this.showComponent();
  }

  showComponent() {
    this.setState(prev => (
      {
        showComponents: prev.availabelComponent.slice(
          prev.showFirstComponentIndex,
          prev.showFirstComponentIndex + prev.numComponentView,
        ),
      }
    ));
  }
  previousComponent() {
    if (this.state.showFirstComponentIndex > 0) {
      this.setState(prev => (
        {
          showFirstComponentIndex: prev.showFirstComponentIndex - 1,
        }
      ));
      this.showComponent();
      console.log(this.state.showFirstComponentIndex);
    }
  }
  nextComponent() {
    if (this.props.availabelComponent.length > (
      this.state.showFirstComponentIndex + this.state.numComponentView
    )) {
      this.setState(prev => (
        {
          showFirstComponentIndex: prev.showFirstComponentIndex + 1,
        }
      ));
      this.showComponent();
      console.log(this.state.showFirstComponentIndex);
    }
  }

  render() {
    return (
      <Row>
        <i className="icon-arrow-left icons font-2xl d-block mt-4" onClick={() => {}} onKeyUp={this.previousComponent} tabIndex={0} role="button" />
        {this.state.showComponents}
        <i className="icon-arrow-right font-2xl d-block mt-4" onClick={() => {}} onKeyUp={this.nextComponent} tabIndex={0} role="button" />
      </Row>
    );
  }
}
BaseShowRow.propTypes = {
  numComponentView: PropTypes.number.isRequired,
  availabelComponent: PropTypes.arrayOf.isRequired,

};
export default BaseShowRow;
