import { combineReducers, configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../reducers/jobsSlice';

const rootReducer = combineReducers({
  jobs: jobsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
