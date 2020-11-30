import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from '/src/slice/loginSlice'

const store = configureStore(
    {
        reducer: {
            login: LoginSlice
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                immutableCheck: false
            }),
    }
)

export default store;