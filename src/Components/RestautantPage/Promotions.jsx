import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Wrapper = styled.header`
  max-width: 100%;
  min-width: 100%;
  position: relative;
  margin: 0;

  position: relative;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  pointer-events: none;

.col{
img {
  cursor: pointer;
  display: block;
  width: 200px;
  height: 60px;
  margin: 0;
}
}
`;

function Promotions() {
  return (
    <Wrapper>
      <div style={{ background: "#171a29", padding: "30px 20px", height: "13rem" ,width:"100vw"}}>
        <div className="container my-3">
          <h1 style={{ color: "white" }}>The Belgian Waffle Co.</h1>
          <p style={{ color: "grey" }}>Desserts, Beverages</p>
        </div>
      </div>
      <div  className="container" style={{display:"flex",flexDirection:"row",position:"relative",left:"8rem",bottom:"1rem",justifyContent:"space-evenly"}}>
        <form>
          <input type="text" id="search" placeholder="        Search for dishes"/>
          <i className='fa fa-search mr-1' style={{position:"relative",right:"15.5rem"}}></i>
        </form>
        <div style={{border:"1px solid white",backgroundColor:"white",height:"2rem",width:"8rem",position:"relative",right:"9rem"}}>
          <p> <i className='fa fa-leaf mr-1'></i>Pure Veg</p>
        </div>
        <div style={{border:"1px solid white",backgroundColor:"white",height:"2rem",width:"8rem",position:"relative",right:"17rem"}}>
          <p> <i className='fa fa-heart mr-1'></i>Favourite</p>
        </div>
      </div>
      <div className="col">
        <img
          style={{ height: "11rem", width: "16rem", position: "relative", bottom: "14rem", left: "4rem" }}
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4qivuqyviy3la2xqufn"
          alt="promotion img"
        />
      </div>
    </Wrapper>
  );
}

export default Promotions;
