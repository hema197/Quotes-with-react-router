import { Route, useParams, Link } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Comments from '../components/comments/Comments.js';
import HighlightedQuote from '../components/quotes/HighlightedQuote.js';
import useHttp from "../hooks/use-http.js";
import { getSingleQuote } from "../lib/api.js";
import LoadingSpinner from "../components/UI/LoadingSpinner.js";

// const DUMMY_QUOTES = [
//   {id: 'q1', author: 'Max', text: 'Learning React'},
//   {id: 'q2', author: 'Maksim', text: 'Learning React is fun!'},
// ]


const QuoteDetails = () => {
    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);
    const params = useParams();
    const id = params.quoteId;
    
    useEffect(() => {
     sendRequest(id)
    }, [sendRequest, id])
    
    if(status=== 'pending'){
      return(
        <LoadingSpinner/>
      )
    }

    if(error){
      return(
          <p className="centered">{error}</p>
      )
    }

    if(status === 'completed' && !loadedQuote.text){
      return(
        <p>No quote found!</p>
      )
    }
    return(
      <Fragment>
          <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text}/>
           <Route path={`/quotes/${params.quoteId}`} exact>
            <div className="centered">
              <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
            </div>
            </Route>
         
         <Route path={`/quotes/${params.quoteId}/comments`}>
           <Comments />
         </Route>
      </Fragment>
   
    )
}

export default QuoteDetails;