import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // &  when we would look a console.log we would see a warning about react hook useEffect has a missing dependency....
  //  * So here we are using useEffect, so whenever we make use of useEffect we will very frequently want to refer some variables that are declared as props or state inside of our component
  // * So that kind of action we already have on our useEffect, that action is term, we are referring to term, that is peace of state that we are referring to inside of our useEffect function
  // * Specifically eslint would want us to set a dependency every peace of state that might change in our useEffect function as a dependency array
  // * we already added !results.length
  //^ useEffect(() => {
  //^   const search = async () => {
  //^     const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
  //^       params: {
  //^         action: "query",
  //^         list: "search",
  //^         origin: "*",
  //^         format: "json",
  //^         srsearch: term,
  //^       },
  //^     });
  //^     setResults(data.query.search);
  //^   };

  //^   if (term && !results.length) {
  //^     search();
  //^   } else {
  //^     const timeoutId = setTimeout(() => {
  //^       if (term) {
  //^         search();
  //^       }
  //^     }, 1000);
  //^     return () => {
  //^       clearTimeout(timeoutId);
  //^     };
  //^   }
  // & So here we should put results.length
  // * But by putting this the dependency would be two and when our term is changed it will run that tu=ime afterwards it will run when result.length is changed so the problem now is  that when our application is loaded 2request is made at once, and one is not needed
  // * so when we delete results.length only one request would be made, so that is what we want, but in that case there a warning which is a big problem
  // *  So the reason why 2 request is made is this, when our application is loaded our term is programming so one request is made because of that, second request is made after result of term search because initially results.length= 0, then when request is made the length is changing so that's is the problem of requesting twice
  //^ }, [term,results.length]);

  // & Now we are going to do some advance part to solve the warning and not to send the second request
  
  
  
  // * So Here what we do is when our application is starting term is programming and each time we type something new it is going to change and rerun useEffect hook so we are allowed to have more than one useEffect  

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
