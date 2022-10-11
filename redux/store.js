import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counterSlice'
import postsReducer from '../redux/features/postsSlice'
import usersReducer from '../redux/features/usersSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer
    }

})
