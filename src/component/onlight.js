
import React from 'react'
import './light.css'
import { useState } from 'react';

const Onlight = () => {

    var [onswitch,setOnswitch]= useState("on")

    var changelight = ()=>{
        setOnswitch("off")      //off
    }

    var changenlight = ()=>{
        setOnswitch("on")             //on
    }

    if (onswitch=="on") {        //on
        return (
            <div >
    
               <div className="bulb" />
               <div className="onbulbrect" />
               <div className="bulbstand" />
                <button onClick={changelight} className="onbutton">{onswitch}</button>
            </div>
        )
    }
    else{
        return (
            <div >
    
               <div className="onbulb" />
               <div className="onbulbrect" />
               <div className="bulbstand" />
                <button onClick={changenlight} className="onbutton">{onswitch}</button>
            </div>
        )
    }

    
}

export default Onlight
