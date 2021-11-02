import { combineReducers } from '@reduxjs/toolkit';

import verboseReducer from './slice';
import authReducer from '../../controllers/auth/middleware/slice';

const rootReducer = combineReducers({
  verbose: verboseReducer,
  auth: authReducer,
});

export default rootReducer;
