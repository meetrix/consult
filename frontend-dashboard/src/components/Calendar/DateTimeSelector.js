/**
 * Created by supun on 06/03/18.
 */
import React,{Component} from 'react'
import InputMoment from 'input-moment'
import moment from 'moment';
import { Card, Col, CardBody,
    CardTitle,  } from 'reactstrap';

class DateTimeSelector extends Component{



    constructor(props){
        super(props)
        this.state = {
            m: moment()
        };
    }

    handleChange( m ){
        this.setState({ m });
    }

    handleSave() {
        console.log('saved', this.state.m.format('llll'));
    }

    render() {
        return (
            <Col>
            <Card>

                <CardBody  className="text-center">
                    <CardTitle>

                        {this.state.m.format('llll')}

                    </CardTitle>
                    <div className="app">

                        <form>
                            {/*<div className="input">*/}
                            {/*<input type="text" value={this.state.m.format('llll')} readOnly />*/}
                            {/*</div>*/}
                            <InputMoment
                                moment={this.state.m}
                                onChange={this.handleChange.bind(this)}
                                minStep={1}
                            />
                        </form>
                    </div>
                </CardBody>

            </Card>
            </Col>
        );
    }
}


export default DateTimeSelector