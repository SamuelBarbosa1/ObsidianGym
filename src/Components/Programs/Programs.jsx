import React from 'react'
import "./Programs.css"
import {programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"

const Programs= () => {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore nosso</span>
            <span>Programas</span>
            <span className='stroke-text'>para moldar você</span>
        </div>
        <div className="programs-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Junta-se a nós</span>
                        <img src={RightArrow} alt="Right Arrow"/>
                    </div>
                </div>
            ))}
        </div>
    </div>

  )
}

export default Programs
