import React, { useState } from "react";
import { Data } from "./Data";

const Qution = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (id) => {
    setOpenQuestions((prevOpenQuestions) => {
      if (prevOpenQuestions.includes(id)) {
        return prevOpenQuestions.filter((qid) => qid !== id);
      } else {
        return [...prevOpenQuestions, id];
      }
    });
  };

  return (
    <div style={{  width:"100%",display: "flex", paddingBottom: "40px" ,paddingTop:"40px"}}>
      <div style={{ width:"50%"}}>
        <h1 style={{  fontSize: "38px", fontWeight: "600",width:"60%" }}>
          Your questions, answered
        </h1>
      </div>
      <div style={{width:"50%",gap:"20px",display:"flex",flexDirection:"column",paddingTop:"30px"}}>
        {Data.map((item) => (
          <div key={item.id}>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "120px",
                alignItems: "center",
                paddingBottom: "20px",
              }}
            >
              <div style={{ fontSize: "24px" ,width:"80%"}}>
                {item.title}
              </div>
              <img
                style={{ height: "20px" }}
                src="./img/aa.png"
                alt=""
                onClick={() => toggleQuestion(item.id)}
              />
            </div>
            {openQuestions.includes(item.id) && (
              <div style={{ opacity: "0.6", }}>
                {item.desc}
              </div>
            )}
            <hr style={{ opacity: "0.4" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qution;
