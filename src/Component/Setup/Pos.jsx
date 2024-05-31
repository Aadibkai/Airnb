import React from "react";

const Pos = () => {
  return (
    <>
    <div
      style={{
        width: "100%",
        paddingTop: "40px",
        paddingBottom: "40px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div style={{ width: "50%", display: "flex" }}>
        <img style={{ width: "100%" }} src="./img/p.png" alt="" />
      </div>
      <div style={{gap:"20px",display:"flex",flexDirection:"column"}}>
        <div style={{fontSize:"34px",fontWeight:"600"}}>Still have questions?</div>
        <div style={{fontWeight:"400",fontSize:"20px",opacity:"0.6"}}>Get answers from an experienced Superhost near you.</div>
        <div>
          <button style={{padding:"10px",borderRadius:"10px",cursor:"pointer"}}>Match With a Superhost</button>
        </div>
        
      </div>
    
    </div>
    <hr
    style={{ marginRight: "-50px", marginLeft: "-50px", opacity: "0.4" }}
  />
  </>
  );
};

export default Pos;
