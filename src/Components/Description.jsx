import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import "./Description.css"
import { FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Description = ({weather, units}) => {

    const tempUnit = units === "metric" ? "°C" : "°F";
    const windUnit = units === "metric" ? "m/s" : "m/h";

    const cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: "min",
            data: weather.temp_min,
            unit: tempUnit,
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: "max",
            data: weather.temp_max,
            unit: tempUnit,
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: "feels like",
            data: weather.feels_like,
            unit: tempUnit,
        },
        {
            id: 4,
            icon: <MdCompress />,
            title: "pressure",
            data: weather.pressure,
            unit: "hPa",
        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: "humidity",
            data: weather.humidity,
            unit: "%",
        },
        {
            id: 6,
            icon: <FaWind />,
            title: "wind speed",
            data: weather.speed,
            unit: windUnit,
        },
    ];

// console.log(weather);

    return (
        <div className="section section__description">
            {cards.map(e => (
                <div key={e.id} className="card">
                    <div className="description_card-icon">
                        {e.icon}
                        <small>{e.title}</small>
                    </div>
                    <h2>{e.data+e.unit}</h2>

                </div>
            ))}
        </div>
    )
}

export default Description