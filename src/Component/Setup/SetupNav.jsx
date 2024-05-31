import React from 'react'
import "./new.css"
const SetupNav = () => {
  return (
    <div  style={{paddingTop:"10px", display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:"0px",zIndex:"1000",backgroundColor:"#fff"}}>
        <div><img style={{height:"50px"}}src="./img/logoo.png" alt="" /></div>
        <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
            <div style={{fontWeight:"500"}}>Ready to Airbnb it?</div>
            <div className='naav' style={{display:"flex",alignItems:"center",width:"142px"}}>
                <div><img style={{height:"40px"}}src="./img/home.png"/></div>
                <div style={{color:'#fff'}}>Airbnb Setup</div>
            </div>
        </div>
    </div>
  )
}

export default SetupNav