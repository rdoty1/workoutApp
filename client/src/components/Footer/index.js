import React from "react";

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    borderColor:"black",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "10px",
    width: "100%",
    marginTop:"30px",
    


}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '30px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div className="foot" style={style}>
                No Style Boys
            </div>
        </div>
    )
}

export default Footer