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
            insertDataLoginEmail(state, action) {
                const newState = [...state]
                const obj = Object.assign(action.payload, newState[0]);
                return [{ ...obj }]
            },
            resetData: () => []
        }
    }
)

const { actions, reducer } = loginSlice
export const { pushDataLoginFB, pushDataLoginEmail, resetData, insertDataLoginEmail } = actions
export default reducer