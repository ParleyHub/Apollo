import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../../controllers/auth/middleware/slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
