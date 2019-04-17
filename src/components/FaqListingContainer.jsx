import {connect} from 'react-redux';
import FaqListing from './FaqListing';
import {getFaqs} from '../actions/faq';

export const mapStateToProps = (state) => ({
    loading: state.faqs.loading,
    error: state.faqs.error,
    faqs: state.faqs.faqs,
});

export const mapDispatchToProps = {getFaqs};

export default connect(mapStateToProps, mapDispatchToProps)(FaqListing);
