import { combineReducers } from 'redux';
import faqReducer from './faq';

export default combineReducers({
    faqs: faqReducer,
});
