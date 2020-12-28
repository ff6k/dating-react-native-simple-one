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
            },
            resetData: () => []
        }
    }
)

const { actions, reducer } = preferenceSlice
export const { pushDataAgeAndGender, changeDataAgeAndGender, resetData } = actions
export default reducer