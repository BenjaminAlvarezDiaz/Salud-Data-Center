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
            {/* Icono de menú */}
        </span>
        <div className="app-bar-content">
          {content}
        </div>
      <div className="contentRightStyle">
        {contentRight? contentRight : (<div className="itemRight"></div>)}
        <div className="iconRight">
          { iconRight? iconRight : (<span className="material-icons , iconRightStyle">person</span>)}
        </div>
      </div>
      <div className="endBox"></div>
      <div className="container-buttons">
        <button className="button-App"><span>E-commerce</span></button>
        <button className="button-App image-button"><img src="" alt="" /><a href="#"></a></button>
        <button className="button-App image-shop"><img src="" alt="" /><a href="#"></a></button>
      </div>
      <input className="input-App" type="seach" />
    </div>
    );
}

export default AppBar;