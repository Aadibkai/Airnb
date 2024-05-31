import React from "react";

const Poster = () => {
  return (
    <div style={{paddingBottom:"40px"}}>
      <div
        style={{ fontWeight: "600", fontSize: "40px", paddingLeft: "260px" }}
      >
        Airbnb it easily with Airbnb Setup
      </div>
      <div style={{paddingTop:"30px"}}> 
        <img style={{ width: "100%" }} src="./img/Poster.png" alt="" />
      </div>
      <div style={{display:"flex",gap:"50px",paddingTop:"30px",paddingLeft:"80px"}}>
        <div style={{display:"flex ",flexDirection:"column" ,width:"30%",gap:"10px"}}>
          <div style={{fontWeight:"700"}}>One-to-one guidance from a Superhost</div>
          <div style={{opacity:"0.8"}}>
            We’ll match you with a Superhost in your area, who’ll guide you from
            your first question to your first guest – by phone, video call or
            chat.
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",width:"20%",gap:"10px"}}>
            <div  style={{fontWeight:"700"}}>An experienced guest for your first booking</div>
            <div style={{opacity:"0.8"}}>For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",width:"30%",gap:"10px"}}>
            <div  style={{fontWeight:"700"}}>Specialised support from Airbnb</div>
            <div style={{opacity:"0.8"}}>New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.</div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
