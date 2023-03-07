import React from "react";

const Header = ({ toggle, handleToggle }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button onClick={() => handleToggle((prev) => !prev)}>
        {toggle ? (
          <i class="bi bi-sun-fill toggle" title="light mode"></i>
        ) : (
          <i className="bi bi-moon-fill toggle" title="dark mode"></i>
        )}
      </button>
    </div>
  );
};

export default Header;
