import {
    CHANGE_USERNAME,
    CHANGE_SCORE,
} from './actionTypes'

export const handleUsernameChange = (payload) => ({
    type: CHANGE_USERNAME,
    payload
})

export const handleScoreChange = (payload) => ({
    type: CHANGE_SCORE,
    payload
})