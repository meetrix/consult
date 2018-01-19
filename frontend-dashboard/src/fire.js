/**
 * Created by supun on 13/11/17.
 */
import firebase from 'firebase';
import React, {Component} from 'react';
const config = require('./config.json');
class Fire extends Component {
    constructor() {
        firebase.initializeApp(config.firebase_config);
    }
}
export default fire;

