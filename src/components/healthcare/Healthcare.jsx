import React, { useState, useEffect } from 'react'
import "./Healthcare.modules.css"; // Fix: .module.css add kiya

export default function Healthcare() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id='find-doctor'>
        <h2 className={`text-light ${isVisible ? 'fade-in-up' : ''}`}>FIND A DOCTOR</h2>
        
        <h1 className={`display-3 mt-4 ${isVisible ? 'slide-in-left' : ''}`}>Find A Healthcare</h1> 
        <h1 className={`display-3 ${isVisible ? 'slide-in-right' : ''}`}>Professionals</h1>

        <p className={`${isVisible ? 'fade-in-up delay-1' : ''}`}>
          Your health matters. Discover experienced doctors and healthcare specialists 
          based on your needs, location, and preferences — all in one simple and 
          user-friendly platform.
        </p>

        <div id="inp">
          <div id="drop">
            <select id='select' className='p-3 hover-scale'>
              <option value="">Department</option>
              <option value="ortho">Orthopedics</option>
              <option value="cardio">Cardiology</option>
              <option value="neuro">Neurology</option>
            </select>

            <input 
              type="text" 
              placeholder='Keyword' 
              className="hover-glow"
            />

            <button className='w-25 hover-pulse'>Search</button>
          </div>
        </div>
    </div>
  )
}
