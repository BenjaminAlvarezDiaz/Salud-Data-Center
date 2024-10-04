import React from "react";
import "./AppBar.css"

function AppBar({ toggleSidebar, content, contentRight, iconRight }){
    function onClick(){
        alert('¡Me hiciste click!');
      }
    return (
    <div className="appBarStyle">
        <div className="menuButtonStyle" onClick={toggleSidebar}>
            &#9776;
            {/* Icono de menú de hamburguesa */}
        </div>
        {content}
      <div className="contentRightStyle">
        {contentRight? contentRight : (<div className="itemRight"></div>)}
        <div className="iconRightStyle">
          { iconRight? iconRight : (<span className="material-icons">person</span>)}
        </div>
      </div>
      <div className="endBox"></div>
    </div>
    );
}

export default AppBar;