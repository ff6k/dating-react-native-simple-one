import { createSlice } from '@reduxjs/toolkit'
const intialState = []
const preferenceSlice = createSlice(
    {
        name: 'preference',
        initialState: intialState,
        reducers: {
            pushDataAgeAndGender(state, action) {
                state.push(action.payload)
            },
            changeDataAgeAndGender(state, action) {
                return [{ ...action.payload }]
            }
        }
    }
)

const { actions, reducer } = preferenceSlice
export const { pushDataAgeAndGender, changeDataAgeAndGender } = actions
export default reducer