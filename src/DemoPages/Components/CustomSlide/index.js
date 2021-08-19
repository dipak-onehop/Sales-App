import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

const CustomSlide = ({ isOpen, title, children }) => {
  return (
    <div className={"ui-theme-settings " + (isOpen ? "settings-open" : "")}>
      <div className="theme-settings__inner">
        <PerfectScrollbar>
          <div className="slider-content">
            <h3 className="themeoptions-heading">{title}</h3>
            <div className="p-3">{children}</div>
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default CustomSlide;
