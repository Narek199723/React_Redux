import React from "react";

const Accordion = ({ items }) => {
  const onTitleClick = (index) => {
    console.log("Title clicked", index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        {/* //^ We dont want to execute it immediately that's why we use  () => onTitleClick(index) then it will be executed when we click on that */}
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
