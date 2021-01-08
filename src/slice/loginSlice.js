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
            // changeDataLoginEmail(state, action) {
            //     // const { title, value } = action.payload
            //     const newState = [...state]
            //     newState[0].email = "hello"
            //     // console.log(newState[0].email)
            //     // newState[0].dateOfBirth = '16/09/1999'
            //     // const obj = Object.assign(action.payload, newState[0]);
            //     return newState
            // },
            changeDateOfBirthLoginEmail: (state, action) => void (state[0].dateOfBirth = action.payload.dateOfBirth),
            changeGenderLoginEmail: (state, action) => void (state[0].gender = action.payload.gender),
            changePictureLoginEmail: (state, action) => void (state[0].photos.push(action.payload.picture)),
            changeNameLoginEmail: (state, action) => void (state[0].name = action.payload.name),
            resetData: () => []
        }
    }
)

const { actions, reducer } = loginSlice
export const { pushDataLoginFB, pushDataLoginEmail, resetData, insertDataLoginEmail, changeDateOfBirthLoginEmail,
    changeGenderLoginEmail, changePictureLoginEmail, changeNameLoginEmail } = actions
export default reducer