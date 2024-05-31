import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./style.css"
const Mid = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://airbnb45.p.rapidapi.com/api/v1/getCurrency",
        headers: {
          "X-RapidAPI-Key":
            "c0ae563f37mshd4b90cc967d0f2bp1071f8jsnae849873a031",
          "X-RapidAPI-Host": "airbnb45.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div >
      <h2>Inspiration for future getaways</h2>
      <div className="Mid"style={{ display: "flex", gap: "24px", marginBottom: "20px" }}>
        <div tabindex="0"  style={{fontSize:"14px"}}>Popular</div>
        <div tabindex="0" style={{fontSize:"14px"}}>Art & Culture</div>
        <div tabindex="0" style={{fontSize:"14px"}}>Outdoors</div>
        <div tabindex="0" style={{fontSize:"14px"}}>Mountains</div>
        <div tabindex="0" style={{fontSize:"14px"}}>Beach</div>
        <div tabindex="0" style={{fontSize:"14px"}}>Unique Stays</div>
        <div tabindex="0" style={{fontSize:"14px"}}>Categories</div>
        <div tabindex="0" style={{fontSize:"14px"}}>Things To Do</div>
      </div>
      <hr style={{ opacity: "0.4" }} />
      {/* <div>
      {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name || item.id}</li>
            ))}
          </ul>
        ) : (
          <div>No data available</div>
        )}
      </div> */}
      <div style={{ cursor:"pointer",display: "flex" ,gap:"84px",paddingTop:"28px",paddingBottom:"38px"}}>
        <div style={{ display: "flex", flexDirection: "column" ,gap:"24px"}}>
          <div>
            <div style={{fontWeight:"500"}}>Canmore</div>
            <div style={{ opacity: "0.7" }}>Flat Rental</div>
          </div>
          <div>
            <div  style={{fontWeight:"500"}}>Tucson</div>
            <div style={{ opacity: "0.7" }}>House Rental</div>
          </div>
          <div>
            <div  style={{fontWeight:"500"}}>Anaheim</div>
            <div style={{ opacity: "0.7" }}>Holiday Rental</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" ,gap:"24px"}}>
          <div>
            <div  style={{fontWeight:"500"}}>Benamal</div>
            <div style={{ opacity: "0.7" }}> Beach House Rental</div>
          </div>
          <div>
            <div  style={{fontWeight:"500"}}>Jaspar</div>
            <div style={{ opacity: "0.7" }}>Cabin Rental</div>
          </div>
          <div>
            <div  style={{fontWeight:"500"}}>Monterny</div>
            <div style={{ opacity: "0.7" }}>Bunglow Rental</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column",gap:"24px" }}>
          <div>
            <div  style={{fontWeight:"500"}}>Marbella</div>
            <div style={{ opacity: "0.7" }}>Holiday Rental</div>
          </div>
          <div>
            <div  style={{fontWeight:"500"}}>Mountain Veiew</div>
            <div style={{ opacity: "0.7" }}>Holiday Rental</div>
          </div>
          <div>
            <div  style={{fontWeight:"500"}}>Paso</div>
            <div style={{ opacity: "0.7" }}>Holiday Rental</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" ,gap:"24px"}}>
          <div>
            <div  style={{fontWeight:"500"}}>Mijas</div>
            <div style={{ opacity: "0.7" }}>Home Rental</div>
          </div>
          <div>
            <div  style={{fontWeight:"500"}}>Devnport</div>
            <div style={{ opacity: "0.7" }}>Holiday Rental</div>
          </div>
          <div>
            <div  style={{fontWeight:"500"}}>Santa Barbra</div>
            <div style={{ opacity: "0.7" }}>Beach Rental</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" ,gap:"24px"}}>
          <div>
            <div  style={{fontWeight:"500"}}>Prescort</div>
            <div style={{ opacity: "0.7" }}>Home Rental</div>
          </div>
          <div>
            <div  style={{fontWeight:"500"}}>Mallacota</div>
            <div style={{ opacity: "0.7" }}>pet-frendly Rental</div>
          </div>
          <div>
            <div  style={{fontWeight:"500"}}>Sonoma</div>
            <div style={{ opacity: "0.7" }}>Holiday Rental</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" ,gap:"24px"}}>
          <div>
            <div  style={{fontWeight:"500"}}>Scotland</div>
            <div style={{ opacity: "0.7" }}>Holiday Rental</div>
          </div>
          <div>
            <div  style={{fontWeight:"500"}}>Ibiza</div>
            <div style={{ opacity: "0.7" }}>Holiday rental</div>
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
            <div  style={{fontWeight:"500"}}>Show More</div>
            <div><img style={{height:"20px"}}src="./img/aa.png" alt="" /></div>
          </div>
        </div>
      </div>
      <hr
        style={{ marginRight: "-50px", marginLeft: "-50px", opacity: "0.3" }}
      />
    </div>
  );
};

export default Mid;
