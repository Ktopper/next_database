import React from "react";
import "../css/block.css"

function HeaderBlock({title,text,anchor}){

return(
    <div id={anchor} className="header-block-container">
    <h2>{title}</h2>
    <p>{text}</p>
    
    </div>
)
}
export default HeaderBlock;