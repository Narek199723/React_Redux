import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  // &  We don't want a user to make a request for every keystroke so we need to fix it

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    // & so here we are waiting user to do the search as much as he needs and then after not doing anything for 1 second we want to send a request
    // % we we store setTimeOut in a variable we get back a number which identifies a timer
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 1000);

    // &  Clearing setTimeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  // & This is the useEffect's cleanup function
  // * with this configuration we are going to invoke this function on to the screen when the first time this application is rendered on to the screen, and also when every time the term is get updated,
  // *  inside a useEffect there is only one possible value that we are allow to return, and that value is another function
  // *  So this function that is called inside a useEffect is going to be called by react in some time in the future
  // * in the beginning there won't be any cleanup function, as soon as we make a change cleanup function get's called automatically
  // *  First will be executed cleanup function and then only will be executed Initial render console.log
  // *  whenever our component first renders on to the screen, overall => function is called, and the code above cleanup function will be executed but cleanup function won't,
  // * And then right after that when we change something on term our cleanup function will be called first then the code above it
  // *  so we can use this feature of useEffect to cleanup the setTimeout function because it is a perfect place for it
  // useEffect(() => {
  //   console.log('Initial render on term was changed ');

  //   return () => {
  //     console.log("CLEANUP");
  //   };
  // }, [term]);

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
