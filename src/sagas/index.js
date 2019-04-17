import {all} from 'redux-saga/effects';
import watchFaq from './faq';

export default function* root() {
    yield all([watchFaq()]);
}
