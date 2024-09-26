import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import courseReducer from './slices/courseSlice';
import authReducer from './slices/authSlice';
import { combineReducers } from 'redux';
import teacherReducer from './slices/teacherSlice';
import studentReducer from './slices/studentSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  courses: courseReducer,
  teachers: teacherReducer,
  students: studentReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
