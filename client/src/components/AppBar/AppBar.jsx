import React from "react";
import "./AppBar.css"

function AppBar({ toggleSidebar, content, contentRight, iconRight }){
    function onClick(){
        alert('¡Me hiciste click!');
      }
    return (
    <div className="appBarStyle">
        <span className="material-icons , menuButtonStyle" onClick={toggleSidebar}>
            menu
            {/* Icono de menú de hamburguesa */}
        </span>
        {content}
      <div className="contentRightStyle">
        {contentRight? contentRight : (<div className="itemRight"></div>)}
        <div className="iconRight">
          { iconRight? iconRight : (<span className="material-icons , iconRightStyle">person</span>)}
        </div>
      </div>
      <div className="endBox"></div>
    </div>
    );
}

export default AppBar;