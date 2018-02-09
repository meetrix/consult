/**
 * Created by supun on 07/02/18.
 */
import React,{Component} from 'react';


class Spinner extends Component{

    constructor(props){
        super(props);
        this.state = {
            spinner:this.props.spinner
        }
    }

    render(){
        if(this.state.spinner){
            return(
                <div>spinner</div>

            );
        }


    }


}