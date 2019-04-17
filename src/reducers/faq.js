import * as FaqsActions from '../actions/faq';

export default (state = {loading: false, faqs: [], error: null}, action) => {
    switch (action.type) {
        case FaqsActions.GET_FAQS:
            return {...state, loading: true, error: null}
        case FaqsActions.GET_FAQS_SUCCESS:
            return {...state, loading: false, faqs: action.payload.data, error: null}
        case FaqsActions.GET_FAQS_FAILURE:
            return {...state, loading: false, error: action.payload.error}
        default:
            return state
    }
}
