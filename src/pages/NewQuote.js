import QuoteForm from '../components/quotes/QuoteForm.js'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import useHttp from '../hooks/use-http.js';
import { addQuote } from '../lib/api.js';

const NewQuote = () => {
    const history = useHistory();
    const {sendRequest, status} = useHttp(addQuote);

    useEffect(() => {
      if(status === 'completed'){
        history.push('/quotes');
      }
    }, [status, history]);

    const addQuoteHandler = formData => {
        sendRequest(formData)
    }
    return(
      <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
    )
}

export default NewQuote;