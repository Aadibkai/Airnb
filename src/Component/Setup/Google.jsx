import React from "react";
import { useState } from "react";
const Google = () => {
  const [priceValue, setPriceValue] = React.useState(30);
  const [modelOpen, setModelOpen] = React.useState(false);
  const [open, setOpen] = React.useState("Entire");

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div
      style={{
        paddingTop: "60px",
        paddingBottom: "120px",
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
      }}
    >
      {modelOpen && (
        <div>
          <div
            style={{
              position: "fixed",
              zIndex: "2000",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              backgroundColor: "black",
              opacity: "0.6",
            }}
          ></div>
          <div
            style={{
              position: "fixed",
              zIndex: "2000",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "0",
              marginRight: "auto",
              marginBottom: "0",
              marginLeft: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                borderRadius: "16px",
                width: "36%",
                height: "90%",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    paddingTop: "14px",
                    paddingRight: "80px",
                  }}
                >
                  <div>
                    <img
                      style={{ height: "12px", cursor: "pointer" }}
                      src="./img/close.png"
                      alt=""
                      onClick={() => setModelOpen(false)}
                    />
                  </div>
                  <div style={{ fontWeight: "600", paddingBottom: "14px" }}>
                    Tell us about your place
                  </div>
                </div>
                <hr style={{ opacity: "0.4" }} />
              </div>
              <div
                style={{
                  paddingTop: "20px",
                  marginLeft: "30px",
                  marginRight: "30px",
                }}
              >
                <div>Address or area</div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "12px",
                      borderRadius: "40px",
                      border: "1px solid #ccc",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#fff",
                      width: "100%",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <div>
                      <img
                        style={{ height: "20px" }}
                        src="./img/pin.png"
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "400",
                        opacity: "0.6",
                      }}
                    >
                      Pune
                    </div>
                  </div>
                </div>
                <hr style={{ opacity: "0.4" }} />
              </div>
              <div
                style={{
                  paddingTop: "20px",
                  marginLeft: "30px",
                  marginRight: "30px",
                }}
              >
                <div>Type of space</div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "30px",
                    paddingBottom: "30px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "10px",
                      borderRadius: "40px",
                      border: "1px solid #ccc",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "gray",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "40px",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      onClick={() => setOpen("Entire")}
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        background: open === "Entire" ? "white" : "gray",
                        borderRadius: "18px",
                        width: "50%",
                        padding: "8px",
                      }}
                    >
                      Entire place
                    </div>
                    <div
                      onClick={() => setOpen("Private")}
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        background: open === "Private" ? "white" : "gray",
                        borderRadius: "18px",
                        width: "50%",
                        padding: "8px",
                      }}
                    >
                      Privet Room
                    </div>
                  </div>
                </div>
                <hr style={{ opacity: "0.4" }} />
                {open === "Entire" ? (
                  <div
                    style={{
                      paddingBottom: "20px",
                      display: "flex",
                      gap: "280px",
                    }}
                  >
                    <p style={{ fontSize: "18px", fontWeight: "600" }}>
                      Bedroom
                    </p>
                    <div style={{ display: "flex", gap: "16px" }}>
                      <button
                        style={{ borderRadius: "140px", border: "none" }}
                        onClick={decrement}
                      >
                        -
                      </button>
                      <p>{count}</p>
                      <button
                        style={{ borderRadius: "140px", border: "none" }}
                        onClick={increment}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      gap: "280px",
                      opacity: "0.1",
                      paddingBottom: "20px",
                    }}
                  >
                    <p style={{ fontSize: "18px", fontWeight: "600" }}>
                      Bedroom
                    </p>
                    <button
                      style={{ borderRadius: "140px", border: "none" }}
                      onClick={decrement}
                    >
                      -
                    </button>
                    <p>{count}</p>
                    <button
                      style={{ borderRadius: "140px", border: "none" }}
                      onClick={increment}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={() => setModelOpen(false)}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#fff",
                    borderRadius: "10px",
                    width: "90%",
                    alignItems: "center",
                    padding: "10px",
                    backgroundColor: "Black",
                    fontSize: "18px",
                    fontWeight: "400",
                    cursor: "pointer",
                  }}
                >
                  Update your estimate{" "}
                </button>
              </div>
            </div>
          </div>
                  
        </div>
      )}

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{
            fontSize: "50px",
            width: "50%",
            fontWeight: "600",
            paddingLeft: "80px",
          }}
        >
          <span style={{ color: "red" }}>Airbnb it.</span>
        </div>
        <div style={{ fontSize: "50px", fontWeight: "600" }}>
          You could earn
        </div>
        <div
          style={{
            fontWeight: "600",
            fontSize: "60px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          ${priceValue}{" "}
          <p style={{ fontSize: "20px" }}>
            {" "}
            {10} nights at an estimated ₹3,581 a night
          </p>
        </div>
        <div>
          <input
            type="range"
            name="destination"
            id="destination"
            min="150"
            max="1000"
            value={priceValue}
            step="10"
            onChange={(e) => setPriceValue(e.target.value)}
            style={{ width: "360px" }}
          />
        </div>
        <div style={{ paddingBottom: "20px" }}>
          Learn how we estimate your earnings
        </div>

        <div
          onClick={() => setModelOpen(true)}
          className="l"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div>
            <img style={{ height: "24px" }} src="./img/s.png" alt="" />
          </div>
          <div>
            <div style={{ fontWeight: "500" }}>Pune</div>
            <div style={{ opacity: "0.6" }}>Entair Place .2 Bedrooms</div>
          </div>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906659198!2d73.69815111553402!3d18.524870612981903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716360540118!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Google;
