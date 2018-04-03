/**
 * Created by supun on 24/02/18.
 */
/**
 * Created by supun on 23/02/18.
 */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import { ACTION_KEY as KEYS, ACTION_ATTR as ATTRS } from "../../constants/apiSagaConstant";

import { actionCreatorFactory } from "../../actions/actionCreator";

import UserAccountView from "./UserAccountView";

function mapStateToProps(state) {
	return {
		account: {
			records: [
				{
					id: "1", date: "2011/02/23", amount: "1000.00", status: "verified",
				},
				{
					id: "2", date: "2011/02/25", amount: "1000.00", status: "verified",
				},
				{
					id: "3", date: "2011/02/27", amount: "1000.00", status: "verified",
				},
				{
					id: "4", date: "2011/02/30", amount: "1000.00", status: "verified",
				},
			],

		},
	};
}
const mapDispatchToProps = dispatch => ({
	actions: { signup: bindActionCreators(actionCreatorFactory(KEYS.SIGNUP, ATTRS.PAYLOAD), dispatch) },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccountView);
