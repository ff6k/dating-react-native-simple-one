import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from '/src/slice/loginSlice'
import PreferenceSlice from '/src/slice/preferenceSlice'
const store = configureStore(
    {
        reducer: {
            login: LoginSlice,
            preference: PreferenceSlice
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                immutableCheck: false
            }),
    }
)

export default store;