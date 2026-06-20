// src/components/Hero.jsx
import React from "react";
import "./Hero.modules.css";

export default function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="heroContent">
          <h1 className="heroTitle">WELCOME TO MEDIX HOSPITAL</h1>
          <h2 className="heroSubtitle">
            Best Healthcare Solution <br /> In Your City
          </h2>
          <div className="heroButtons">
            <button className="heroBtn heroBtnOutline" id="appoint_btn">
              Appointment
            </button>
            <button className="heroBtn heroBtnSolid">Find Doctor</button>
          </div>
        </div>
      </section>
    </div>
  );
}

