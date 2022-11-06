import {
    CHANGE_USERNAME,
    CHANGE_SCORE,
    CHANGE_CORRECT_ANSWERS,
    CHANGE_TOPSCORERS
} from './actionTypes'

export const handleUsernameChange = (payload) => ({
    type: CHANGE_USERNAME,
    payload
})

export const handleScoreChange = (payload) => ({
    type: CHANGE_SCORE,
    payload
})

export const handleCorrectAnswers = (payload) => ({
    type: CHANGE_CORRECT_ANSWERS,
    payload
})

export const handleTopScorers = (payload) => ({
    type: CHANGE_TOPSCORERS,
    payload
})