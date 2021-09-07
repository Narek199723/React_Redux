import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  // ^ This useEffect Hook will work when the page is loaded and something is changed on the page, so when application is starting and after every update
  useEffect(() => {
    console.log("asdlfkj");
  });

  // ^  This useEffect will work only when the page is loaded, not after any update
  // useEffect(() => {
  //   console.log('asdlfkj');
  // }, []);

  // ^  This will work only when term state will change , so in case if we don't want it to be loaded without any need we should put a dependency
  // useEffect(() => {
  //   console.log("asdlfkj");
  // }, [term]);

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
