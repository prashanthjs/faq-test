import React, {useState} from 'react'
import PropTypes from 'prop-types';

const Faq = ({faq}) => {
    const [isOpen, setOpen] = useState(false);
    const toggleFaq = () => setOpen(!isOpen);
    return (
        <div id={faq.id} data-test="faq"  onClick={toggleFaq} className="card mt-3">
            <div className="card-header" onClick={toggleFaq} style={{cursor:"pointer"}} data-test="faqQuestion">{faq.question}</div>
            {isOpen && <p className="m-3" data-test="faqAnswer">{faq.answer}</p>}
        </div>
    )
};

Faq.propTypes = {
    faq: PropTypes.shape({
        id: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    }).isRequired,
};

export default React.memo(Faq);
