import {connect} from 'react-redux';

import AdminPanelView from '../../components/AdminPanel/AdminPanel';

function mapStateToProps(state){
  return{
    user : state.auth.user,
  }
}

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(AdminPanelView)
