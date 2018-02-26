import {REDUX_ACTIONS} from "./constant";

let nextMessageId = 0

export const addUser = (name) => ({
    type: REDUX_ACTIONS.ADD_USER,
    name: name
})

export const addMessage = (message, author) => ({
    type: REDUX_ACTIONS.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
})

export const messageReceived = (message, author) => ({
    type: REDUX_ACTIONS.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
});
