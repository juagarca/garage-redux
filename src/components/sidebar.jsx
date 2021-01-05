import React from 'react';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="image" style={{ backgroundImage: "url('/assets/images/garage.png')" }} />
      <span><strong>{props.name} Garage</strong></span>
      <p>Best online garage</p>
    </div>
  );
};

export default Sidebar;
