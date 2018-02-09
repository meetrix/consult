import React,{Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    path: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

};

const defaultProps = {
    tag: 'img'
};

class ImageWidget extends Component{


    render(){

        let {
            path,
            tag: Tag,

        } = this.props;

        return(
            <Tag type={(Tag === 'img') ? 'img' : undefined} src={path}/>
        );
    }
}

ImageWidget.propTypes = propTypes;
ImageWidget.defaultProps = defaultProps;

export default ImageWidget;