import React from "react";

const Footer = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"5px",paddingBottom:"5px" ,cursor:"pointer"}}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <dir>
          <img style={{ height: "20px" }} src="./img/right.png" />
        </dir>
        <div>2024 Airbnb, Inc.</div>
        <div></div>
        <ul style={{ display: "flex", gap: "28px" }}>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Sitemap</li>
          <li>Company details</li>
        </ul>
      </div>

      <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
        <div style={{display:"flex",gap:"10px"}}>
            <div><img  style={{ height: "20px" }}src="./img/wo.png" /></div>
            <div>English (IN)</div>
        </div>
        <div style={{display:"flex"}}>
        <div><img style={{ height: "20px" }}src="./img/rupee.png" alt="" /></div>
        <div>INR</div>
        </div>
        <div style={{display:"flex",gap:"20px"}}>
            <div><img style={{ height: "20px" }} src="./img/twitter.png" alt="" /></div>
            <div><img style={{ height: "20px" }} src="./img/instagram.png" alt="" /></div>
            <div><img style={{ height: "20px" }} src="./img/facebook.png" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
