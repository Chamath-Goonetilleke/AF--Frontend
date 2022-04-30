import React from "react";

const SideMenuList = ({ items, currentItem,onChange }) => {
  return (
    <ul className="list-group" style={{ width: "20rem", paddingLeft:"2rem",paddingRight:"2rem" }}>
      {items.map((item) => 
        <li
          key={item}
          className={
            item === currentItem ? "list-group-item active" : "list-group-item"
          }
          onClick={()=>onChange(item)}
        >
          {item}
        </li>
      )}
    </ul>
  );
};

export default SideMenuList;
