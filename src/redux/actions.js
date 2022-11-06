import {
    CHANGE_USERNAME,
} from './actionTypes'

export const handleUsernameChange = (payload) => ({
    type: CHANGE_USERNAME,
    payload
})
