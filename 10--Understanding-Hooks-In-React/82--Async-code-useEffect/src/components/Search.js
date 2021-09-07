import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  // ^  We aren't allowed to mark the useEffect function as async function, we can look at the console log and see the error
  // useEffect(async() => {
  //   const search = async () => {
  //     await axios.get("asldkfj");
  //   };
  // }, [term]);

  // ^  This is the first approach to use async function inside a useEffect, but React.js recommends to use this approach 
  useEffect(() => {
    const search = async () => {
      await axios.get("asldkfj");
    };
    search();
  }, [term]);

  // ^ This is the second approach of using async function inside a useEffect hook
  useEffect(() => {
    // *  This is immediately invoked function so we don't need to use variable and then call it
    (async () => {
      await axios.get("asldkfj");
    })();
  }, [term]);

  // ^  This is the third approach for using async await in useEffect hook
  useEffect(() => {
    axios.get("country").then((response) => {
      console.log(response.data);
    });
  }, [term]);

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
    </div>
  );
};

export default Search;
