import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice(
    {
        name: 'todo',
        initialState: ["123"],
        reducers: {
            addPost(state, action) {
                state.push(action.payload)
            }
        }
    }
)

const { actions, reducer } = todoSlice
export const { addPost } = actions
export default reducer