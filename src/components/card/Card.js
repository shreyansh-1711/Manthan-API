

import React from "react";
import "./Card.css";

const Card = ({ title,body}) => {

    return (
      <>
        <div className="Card-container">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h3>{title}</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <textarea  style={{border:"none",overflow:"hidden"}} rows="3" cols="25" >
                  {body}
                </textarea>
                <button  >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Card;
