import React, {useEffect} from 'react';
import Faq from './Faq';
import PropTypes from 'prop-types';

// http://plnkr.co/edit/xBWhbU8aAVywPCrfAmqB?p=info

// http://plnkr.co/edit/xBWhbU8aAVywPCrfAmqB?p=info

// http://plnkr.co/edit/NjJmerFptNd07qLJu1oo?p=info

const FaqListing = ({loading, faqs, error, getFaqs}) => {
    useEffect(() => {getFaqs()}, []);
    return (
        <div className="my-3 p-3 bg-white rounded box-shadow" data-test="faqListing">
            <h6 className="border-bottom border-gray pb-2 mb-3">Frequently asked questions</h6>
            {
                loading &&
                <div className="alert alert-primary" data-test="faqListingLoader">
                    <div className="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div className="spinner-border ml-auto"/>
                    </div>
                </div>
            }
            {
                error &&
                <div className="alert alert-danger" data-test="faqListingError">Error! Cannot load FAQS</div>
            }
            {faqs.map(faq => <Faq key={faq.id} faq={faq}/>)}
        </div>
    );
}

FaqListing.propTypes = {
    loading: PropTypes.bool.isRequired,
    logs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
    })),
    error: PropTypes.any,
    getFaqs: PropTypes.func.isRequired,
}

export default FaqListing;
