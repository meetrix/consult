/**
 * Created by supun on 16/02/18.
 */
import React,{Component} from 'react'
import {Row,Col} from 'reactstrap';
import ReactList from 'react-list';

class BaseScroll extends Component{

    constructor(props){
        super(props)
        this.state = {
            accounts: [
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
                {name:"a"},
            ]
        };
    }

    renderItem(index, key) {
        return <Col key={key} >{this.state.accounts[index].name}</Col>;
    }

    render() {
        return (
            <Col>
                <Row style={{overflow: 'auto'}}>
                    <ReactList
                        itemRenderer={this.renderItem.bind(this)}
                        length={this.state.accounts.length}
                        type='uniform'
                        axis='x'
                        getScrollParent={(paremt)=> console.log(paremt)}
                    />
                </Row>
            </Col>
        );
    }
}

export default BaseScroll;