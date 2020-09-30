import thunk from 'redux-thunk';
import logger from './logger';
import { applyMiddleware, Middleware } from 'redux';

export default applyMiddleware(thunk, logger);
