import React from "react";

const Tag = ({ tags = [] }) => {
  const ListTags = [];
  console.log(tags);
  tags.forEach((element) => {
    ListTags.push(
      <p key={element} className="tag">
        {element}
      </p>
    );
  });
  console.log(ListTags);
  return <div className="listTag">{ListTags}</div>;
};

export default Tag;
