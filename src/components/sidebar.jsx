import React from 'react';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="image" style={{ backgroundImage: "url('/assets/images/garage.png')" }} />
      <span><strong>{props.garageName} Garage</strong></span>
      <p>Best cars in town</p>
      {props.children}
    </div>
  );
};

export default Sidebar;
