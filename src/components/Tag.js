import React from "react";

const Tag = ({ tags = [] }) => {
  const ListTags = [];
  
  tags.forEach((element) => {
    ListTags.push(
      <p key={element} className="tag">
        {element}
      </p>
    );
  });
  
  return <div className="listTag">{ListTags}</div>;
};

export default Tag;
