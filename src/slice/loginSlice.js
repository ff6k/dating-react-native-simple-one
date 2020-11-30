import { createSlice } from '@reduxjs/toolkit'
const intialState = []
const loginSlice = createSlice(
    {
        name: 'login',
        initialState: intialState,
        reducers: {
            pushDataLoginFB(state, action) {
                state.push(action.payload)
            },
            pushDataLoginEmail(state, action) {
                state.push(action.payload)
            },
            resetData: (state) => []
        }
    }
)

const { actions, reducer } = loginSlice
export const { pushDataLoginFB, pushDataLoginEmail, resetData } = actions
export default reducer