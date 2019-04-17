import {call,  put, takeLatest} from 'redux-saga/effects';
import * as FaqActions from '../actions/faq';
import {getFaqs as getFaqsApi} from '../services/faqService';

export function* loadFaqs() {
    try {
        const data = yield call(getFaqsApi);
        yield put(FaqActions.setFaqsSuccess(data));
    } catch (error) {
        yield put(FaqActions.setFaqsFailure(error));
    }
}

export default function* watchChatLog() {
    yield takeLatest(FaqActions.GET_FAQS, loadFaqs);
}
