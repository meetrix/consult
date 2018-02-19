import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {

    let input;

    return <section id="new-message">
        <input
            // onKeyPress={(e) => {
            //     if (e.key === 'Enter') {
            //         props.dispatch(input.value, 'Me')
            //         input.value = ''
            //     }
            // }}
            type="text"
            ref={(node) => {
                input = node
            }}
        />
        <span className="input-group-btn">
                <button className="btn btn-primary btn-sm"
                        id="btn-chat"
                        onClick={(e)=> {
                            props.dispatch(input.value, 'Me')
                            // console.log('ENTERED: ' + input.value)
                            input.value = ''
                           }
                        }>
                    Send
                </button>
        </span>
    </section>
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage