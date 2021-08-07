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
`;

function Promotions() {
  return (
    <Wrapper>
      <div style={{ background: "#171a29"}}>
        <div className="container" style={{display:"flex", padding:"0"}}>
              <img style={{ width:"250px", height:"150px", padding:"10px"}}
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4qivuqyviy3la2xqufn"
                alt="promotion img"
              />
            <div className="container" style={{textAlign:"left"}}>
              <h1 style={{color:"white", margin:"0"}}>The Belgian Waffle Co.</h1>
              <p style={{color:"grey", margin:"0"}}>Desserts, Beverages</p>
              <p style={{color:"grey", margin:"0"}}>KIlpauk, Kilpauk</p>
              <h6 style={{color:"white"}}>★ 4.3 | -- mins | ₹ 200 for two</h6>
            </div>
            <div className="container" style={{color:"white", paddingTop:"20px"}}>
              <h5>OFFER</h5>
              <p style={{textAlign:"left", paddingLeft:"12rem"}}><i className="fa fa-badge-percent mr-1"></i>40% off up to ₹80 | Use code<br></br>TRYNEW</p>
            </div>
        </div> 
      </div>
      <div  className="container" style={{display:"flex",flexDirection:"row",position:"relative",left:"8rem",bottom:"1rem",justifyContent:"space-evenly"}}>
        <form>
          <input type="text" id="search" placeholder="        Search for dishes"/>
          <i className='fa fa-search mr-1' style={{position:"relative",right:"10.5rem"}}></i>
        </form>
        <div style={{border:"1px solid white",backgroundColor:"white",height:"2rem",width:"8rem",position:"relative",right:"9rem"}}>
          <p> <i className='fa fa-leaf mr-1'></i>Pure Veg</p>
        </div>
        <div style={{border:"1px solid white",backgroundColor:"white",height:"2rem",width:"8rem",position:"relative",right:"17rem"}}>
          <p> <i className='fa fa-heart mr-1'></i>Favourite</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Promotions;
