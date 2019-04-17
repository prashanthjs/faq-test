const faqsData =  require('../faqs.json');
export function getFaqs() {
    return Promise.resolve(faqsData.faqs);
}
