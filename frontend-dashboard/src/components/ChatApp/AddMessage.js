import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
    let input;

    return (
                    <section id="new-message">
                    <div className="panel-footer">
                        <div className="input-group">
                            <input
                                className="form-control input-sm chat_input"
                                type="text"
                                ref={(node) => {
                                    input = node
                                }}
                            />
                            <span className="input-group-btn">
                                <button className="btn btn-primary btn-sm"
                                        id="btn-chat"
                                        onClick={(e) => {
                                             props.dispatch(input.value, 'Me')
                                             //  this.webrtc.sendToAll('chat', {message: message});
                                             input.value = ''
                                           }
                                        }>
                                Send
                                </button>
                            </span>
                        </div>
                    </div>
                    </section>
    );
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage