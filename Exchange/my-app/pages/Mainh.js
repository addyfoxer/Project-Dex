import React, { Component } from "react";
//import React from 'react';
import Navi from './Navi'
import Image from "next/image";
import img1 from './jh.jpg';
import CryptocurrencyBackground from './CryptocurrencyBackground ';

const Mainh=()=>{
  const imagePath = 'jh.jpg';
  return (
    <>
      <Navi/>
      {/* <div className="canv"><CryptocurrencyBackground/></div> */}
      
      <div className="Mainh" style={{fontFamily: 'fantasy'}}>
      <div className="Mainh-header">
        <div style={{fontSize:'70px',}} >Welcome To UNISOME{process.env.REACT_APP_PROJECT_NAME}</div>
        <div style={{fontSize:'30px',}} >A Decentralized Finance Project on Ethereum</div>
      </div>
      <div className="content">
        <h2 style={{fontSize:'30px',}}>What We Offer</h2>
        <div className="conts">
        <div>Decentralized Finance System to Utilize.</div>
        <div>Swapping.</div>
        <div>Liquidity Provider.</div>
        </div>
        <footer className="foot">Research paper Refernce</footer>
      </div>
      
    </div>
 
    </>
  )
}


export default Mainh;