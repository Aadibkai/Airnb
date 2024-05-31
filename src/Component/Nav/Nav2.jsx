import React, { useRef, useState, useEffect } from "react";
import "../style.css";
import icon_data from "./Icon_data";
import Mid from "../Mid/Mid";
import New from "../Mid/New";
import Navbar from "../../Component/Nav/Navbar";
import Card from "../Card/Card";

const Nav2 = () => {
  const scrollRef = useRef(null);
  const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
  const [scrollRightVisible, setScrollRightVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setScrollLeftVisible(scrollLeft > 0);
        setScrollRightVisible(scrollWidth - scrollLeft > clientWidth);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
       <Navbar/>
    <div
      style={{
        // position: "sticky",
        top: "80px",
        zIndex: "1000",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: "5px",
          paddingBottom: "20px",
        }}
      >
        {scrollLeftVisible && (
          <button onClick={scrollLeft} className="arrow-left-arrow">
            <img style={{ height: "10px" }} src="./img/ll.png" alt="" />
          </button>
        )}

        <div className="scrolling-wrapper" ref={scrollRef}>
          {icon_data.map((e) => (
            <div className="icon" key={e.id}>
              <img src={e.image} alt={e.title} />
              <span>{e.title}</span>
            </div>
          ))}
        </div>

        {scrollRightVisible && (
          <button onClick={scrollRight} className="arrow-right-arrow">
            <img style={{ height: "10px" }} src="./img/R.png"  />
          </button>
        )}
      </div>

    </div>
    <Card/>
<Mid/>
<New/>
    </div>
  );
};

export default Nav2;
