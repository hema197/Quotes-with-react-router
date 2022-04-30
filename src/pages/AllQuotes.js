import QuoteList from '../components/quotes/QuoteList.js'
import useHttp from '../hooks/use-http.js'
import { getAllQuotes } from '../lib/api.js'
import { useEffect } from 'react'
import LoadingSpinner from '../components/UI/LoadingSpinner.js'
import NoQuotesFound from '../components/quotes/NoQuotesFound.js'


const AllQuotes = () => {
    const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true);
    
    useEffect(() => {
      sendRequest();  
    }, [sendRequest])

    if(status==='pending'){
        return(
          <div className='centered'>
              <LoadingSpinner/>
          </div>
        )
    }

    if(error){
        return(
            <div className='centered focused'>
              <p>{error}</p>
            </div>
        )
    }

    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
        return(
          <NoQuotesFound/>
        )
    }

    return(
     <QuoteList quotes={loadedQuotes}/>
    )
}



export default AllQuotes;