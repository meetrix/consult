/**
 * Created by supun on 15/02/18.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {Row,Button,Col} from 'reactstrap';

import CourseVideo from './CourseVideo'
import {BaseShowRow,BaseBox} from '../BaseBox'
import ReactList from 'react-list';


class CourseVideos extends Component{

    constructor(props){
        super(props)
        this.state = {
            availabelVideos:[]
        };

    }
    componentDidMount(){
        this.getAvailableVideos();

    }
    getAvailableVideos(){
        let availabelVideos = []
        if(this.props.videos!= undefined) {
            this.props.videos.map((video, index) =>
                availabelVideos.push(<CourseVideo key={index} video={video}/>)
            )

            this.setState({availabelVideos: availabelVideos});
        }
    }

    render(){
        return(
            <BaseBox>
                <Row>
                    {/*<BaseShowRow  numComponentView={this.props.numOfVideoShouldShow} availabelComponent={this.state.availabelVideos}/>*/}
                    <Col style={{overflow: 'auto'}}>
                        <ReactList
                            itemRenderer={(index,key)=>this.state.availabelVideos[index]}
                            length={this.state.availabelVideos.length}
                            type='uniform'
                            axis='x'
                            useTranslate3d={true}
                        />
                    </Col>
                </Row>
            </BaseBox>
        );
    }
}
CourseVideos.propTypes = {
    videos:PropTypes.array.isRequired,
    numOfVideoShouldShow:PropTypes.number.isRequired

};

export default CourseVideos;
/**
 * Created by supun on 16/02/18.
 */
