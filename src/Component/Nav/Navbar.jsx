import React, { useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import languageCountryPairs from "./languageCountryPairs";
import currencies from "./Currancy";

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  const [language, setLanguage] = useState(false);
  const [isRight, setIsRight] = useState(true);

  const [searchView, setSearchView] = useState(false);

  const handleClick = () => {
    setIsRight((prevState) => !prevState);
  };
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div
      style={{
        display: "flex",
        paddingTop: "4px",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "1000",
          backgroundColor: "#fff",
        }}
      >
        <div
          className="navbar"
       
        >
          <div>
            <img src="./img/download.png" alt="logo" className="navbar-logo" />
          </div>

          {!searchView ? (
            <div style={{ paddingLeft: "290px", alignContent: "center" }}>
              <div className="search-bar">
                <div className="search-bar-text">Anywhere</div>
                <hr style={{ height: "20px" }} />
                <div className="search-bar-text">Any Week</div>
                <hr style={{ height: "20px" }} />
                <div style={{ opacity: "0.5" }} className="search-bar-text2">
                  Add guests
                </div>
                <div
                  onClick={() => setSearchView(true)}
                  className="search-icon-div"
                >
                  <div className="search-icon" />
                  <img
                    style={{ height: "32px" }}
                    src="./img/magni.png"
                    alt="search"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                paddingLeft: "60px",
                display: "flex",
                padding: "1px",
                justifyContent: "center",
                marginLeft: "145px",
                marginRight: "-54px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap:"60px",
                  justifyContent:"center",
                  paddingBottom:"20px"
                }}
              >
                <span style={{opacity:"0.6",fontWeight:"500"}}>Stays</span>
                <span style={{opacity:"0.6",fontWeight:"500"}}>Experiences</span>
                <span style={{opacity:"0.6",fontWeight:"500"}}>Online Experiences</span>
              </div>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "210px",
                  justifyContent: "center",
                  
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "50px",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50px",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: "400" }}>Where</div>
                    <div style={{ opacity: "0.6" }}>Search Destination</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: "400" }}>Check In</div>
                    <div style={{ opacity: "0.6" }}>Add Date</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: "400" }}>Check Out</div>
                    <div style={{ opacity: "0.6" }}>Add Date</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: "400" }}>Who</div>
                    <div style={{ opacity: "0.6" }}>Add Guest</div>
                  </div>
                  <div
                    onClick={() => setSearchView(false)}
                    style={{
                      display: "flex",
                      backgroundColor: "red",
                      borderRadius: "30px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <img
                        style={{ height: "20px" }}
                        src="./img/ss.png"
                        alt=""
                      />
                    </div>
                    <div style={{ marginLeft: "2px" }}>Search</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            style={{ gap: "20px", alignItems: "center",paddingLeft:"124px" }}
            className="profile-container"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "120px",
              }}
            >
              <div className="search-bar-text">
                <Link
                  to="/setup"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Airbnb Your Home
                </Link>
              </div>

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
                        width: "70%",
                        height: "90%",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            marginLeft: "20px",
                            marginTop: "10px",
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
                        </div>
                      </div>

                      <div
                        style={{
                          marginLeft: "20px",
                          marginRight: "20px",
                          overflowY: "scroll",
                          marginLeft: "20px",
                          marginRight: "10px",
                        }}
                      >
                        <div style={{ paddingTop: "30px" }}>
                          <div style={{ display: "flex", gap: "30px" }}>
                            <div style={{}} onClick={() => setLanguage(false)}>
                              Language and region
                            </div>
                            <div onClick={() => setLanguage(true)}>
                              Currancy
                            </div>
                          </div>
                          <div>
                            <hr style={{ opacity: "0.6" }} />
                          </div>
                        </div>
                        {!language ? (
                          <>
                            <div
                              style={{
                                paddingTop: "30px",
                                paddingBottom: "30px",
                              }}
                            >
                              <div>Translation</div>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "20px",
                                  alignItems: "center",
                                }}
                              >
                                <div>
                                  Automatically translate descriptions and
                                  reviews to English.
                                </div>
                                <div>
                                  <button
                                    onClick={handleClick}
                                    style={{
                                      backgroundColor: isRight
                                        ? "gray"
                                        : "#222222",
                                      borderRadius: "30px",
                                      height: "30px",
                                      border: "none",
                                      position: "relative",
                                      width: "50px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <img
                                      src="./img/checked.png"
                                      alt="arrow"
                                      style={{
                                        position: "absolute",
                                        width: "20px",
                                        height: "20px",
                                        top: "50%",
                                        left: isRight
                                          ? "5px"
                                          : "calc(100% - 25px)",
                                        transform: "translateY(-50%)",
                                        transition: "left 0.5s ease",
                                        cursor: "pointer",
                                        borderRadius: "20px",
                                        backgroundColor: "#fff",
                                      }}
                                      onClick={handleClick}
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "36px",
                              }}
                            >
                              <p
                                style={{ fontSize: "20px", fontWeight: "600" }}
                              >
                                {" "}
                                Suggested languages and regions
                              </p>
                              <div style={{ display: "flex", gap: "80px" }}>
                                <div>
                                  <div>English</div>
                                  <div>United State</div>
                                </div>
                                <div>
                                  <div>English</div>
                                  <div>United Kingdom</div>
                                </div>
                                <div>
                                  <div>English</div>
                                  <div>Austarlia</div>
                                </div>
                                <div>
                                  <div>Hindi</div>
                                  <div>India</div>
                                </div>
                              </div>
                            </div>
                            <p
                              style={{
                                fontSize: "20px",
                                fontWeight: "600",
                                paddingTop: "36px",
                              }}
                            >
                              Choose a language and region
                            </p>

                            <div
                              style={{
                                display: "flex",
                                gap: "20px",
                                flexDirection: "row",
                                flexWrap: "wrap",
                              }}
                            >
                              {languageCountryPairs.map((pair, index) => (
                                <div
                                  key={index}
                                  style={{
                                    width: "18%",
                                  }}
                                >
                                  <p style={{ fontSize: "14px" }}>
                                    {pair.language}
                                  </p>
                                  <p style={{ fontSize: "14px" }}>
                                    {pair.country}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              style={{
                                fontSize: "26px",
                                fontWeight: "500",
                                paddingTop: "30px",
                                paddingBottom: "30px",
                              }}
                            >
                              Choose a currency
                            </div>

                            <div
                              style={{
                                display: "flex",
                                gap: "20px",
                                flexDirection: "row",
                                flexWrap: "wrap",
                              }}
                            >
                              {currencies.map((pair, index) => (
                                <div
                                  key={index}
                                  style={{
                                    width: "18%",
                                  }}
                                >
                                  <p style={{ fontSize: "14px" }}>
                                    {pair.name}
                                  </p>
                                  <p style={{ fontSize: "14px" }}>
                                    {pair.code}-{pair.symbol}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <img
                  style={{
                    height: "18px",
                    cursor: "pointer",
                    paddingTop: "6px",
                  }}
                  src="./img/wo.png"
                  alt="world icon"
                  onClick={() => setModelOpen(true)} // Add this line
                />
              </div>
            </div>
            <div className="btn">
              <button
                style={{
                  paddingBottom: "8px",
                  border: "none",
                  display: "flex",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                onClick={toggleDropdown}
              >
                <img
                  style={{ height: "26px" }}
                  src="./img/three.png"
                  alt="menu"
                />
                <img
                  style={{ height: "26px" }}
                  src="./img/user.png"
                  alt="user"
                />
              </button>
              {dropdownVisible && (
                <div
                  style={{
                    position: "absolute",
                    top: "50px", // Adjust as necessary
                    right: "0", // Adjust as necessary
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "white",
                    zIndex: 1000,
                    padding: "10px",
                  }}
                >
                  <div style={{ marginBottom: "10px" }}>
                    <button style={{ display: "block", width: "100%" }}>
                      Sign Up/ Log In
                    </button>
                  </div>
                  <div>
                    <button style={{ display: "block", width: "100%" }}>
                      Log In
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr
          style={{ marginRight: "-50px", marginLeft: "-50px", opacity: "0.4" }}
        />
      </div>
    </div>
  );
}

export default Header;
