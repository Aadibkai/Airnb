import React from "react";

const New = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "174px",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontFamily: "initial" ,fontWeight:"500"}}>Support</div>
          <div style={{cursor:"pointer"}}>Help Centre</div>
          <div style={{cursor:"pointer"}}>AirCover</div>
          <div style={{cursor:"pointer"}}>Anti-discrimination</div>
          <div style={{cursor:"pointer"}}>Disability support</div>
          <div style={{cursor:"pointer"}}>Cancellation options</div>
          <div style={{cursor:"pointer"}}>Report neighbourhood concern</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontFamily: "initial",fontWeight:"500" }}>Hosting</div>
          <div  style={{cursor:"pointer"}}>Airbnb your home</div>
          <div  style={{cursor:"pointer"}}>AirCover for Hosts</div>
          <div  style={{cursor:"pointer"}}>Hosting resources</div>
          <div  style={{cursor:"pointer"}}>Community forum</div>
          <div  style={{cursor:"pointer"}}>Hosting responsibly</div>
          <div  style={{cursor:"pointer"}}>Join a free Hosting class</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontFamily: "initial",fontWeight:"500" }}>Airbnb</div>
          <div  style={{cursor:"pointer"}}>Newsroom</div>
          <div  style={{cursor:"pointer"}}>New features</div>
          <div  style={{cursor:"pointer"}}>Careers</div>
          <div  style={{cursor:"pointer"}}>Investors</div>
          <div  style={{cursor:"pointer"}}>Airbnb.org emergency stays</div>
        </div>
      </div>
      <hr
        style={{ marginRight: "-50px", marginLeft: "-50px", opacity: "0.4" }}
      />
    </>
  );
};

export default New;
