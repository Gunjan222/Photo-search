import React from "react";

const Image = ({ urls, handleClick, ...reactDOMAttributes }) => {
  return (
    <li
      className="img"
      {...reactDOMAttributes}
      onClick={() => handleClick(urls.regular)}
    >
      <img src={urls.small} alt="Picsum photo" width="250" />
    </li>
  );
};

export default Image;
