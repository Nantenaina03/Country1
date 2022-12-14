import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./card";

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36); 

    // Le useEffect se joue lorque le composant est monté
    useEffect(() => {
        axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => setData(res.data));
    }, []);

    return (
        <div className="countries">
            <ul className="radio-container">
                <input 
                type="range" 
                min="1" max="250" 
                defaultValue={rangeValue} 
                onChange={(e) => setRangeValue(e.target.value)}/>
            </ul>
            <ul>
                {
                    data.slice(0, rangeValue)
                    .map((country, index) => (<Card key={index} country={country}/>))
                }
            </ul>
        </div>
    );
};

export default Countries;