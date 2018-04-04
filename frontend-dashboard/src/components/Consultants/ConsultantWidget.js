import React, { Component } from 'react';
import ReactStars from 'react-stars';
import ProfTypes from 'prop-types';

class ConsultantWidget extends Component {
  constructor(props) {
    super(props);

    this.ratingChanged = this.ratingChanged.bind(this);
  }
  render() {
    return (

      <div className="consultantWidget">
        <div className="widget-image"> <img alt="Avatar" src="img/avatars/1.jpg" /> </div>

        <div className="widget-detail" >
          <p className="consultant-username" >{this.props.username}</p>
          <ReactStars count={5} onChange={this.ratingChanged} size={24} color2="#ffd700" />
        </div>
        <div className="widget-price" >
          <p className="consultant-widget-price">{this.props.price}</p>
        </div>
      </div>
    );
  }
}
ConsultantWidget.propTypes = {
  username: ProfTypes.string.isRequired,
  price: ProfTypes.string.isRequired,
};
export default ConsultantWidget;
