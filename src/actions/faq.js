export const GET_FAQS = 'GET_FAQS'
export const GET_FAQS_SUCCESS = 'GET_FAQS_SUCCESS'
export const GET_FAQS_FAILURE = 'GET_FAQS_FAILURE'

export const getFaqs = () => ({type: GET_FAQS});
export const setFaqsSuccess = (data) => ({type: GET_FAQS_SUCCESS, payload: {data}});
export const setFaqsFailure = (error) => ({type: GET_FAQS_FAILURE, payload: {error}});
