import React, { useState } from "react";

// styles
import "./styles/Weather.css";

// images
import weather from "../../images/weather.png";
import down from "../../images/down-arrow.png";
import up from "../../images/up-arrow.png";
import Calendar from "../../images/calendar.png";
function Weather(props) {
  return (
    <React.Fragment>
      <div className="weatherTop">
        <div className="weatherTopLeft">
          <img src={weather} alt="image Weather" />
          <span>Hà nội</span>
          <span>Trời nắng 28 C</span>
        </div>
        <div className="weatherTopRight">
          <div className="iconWeather">
            <img src={down} alt="img Down" />
            <span>12</span>
          </div>
          <div className="iconWeather">
            <img src={up} alt="img Up" />
            <span>36</span>
          </div>
        </div>
      </div>
      <div className="seperate" />
      <div className="weatherBottom">
        <div className="weatherBottomLeft">
          <img src={Calendar} alt="img Lịch" />
          <span>Thứ 3, 05/10/2021</span>
        </div>
        <div className="weatherBottomRight">
          <span>7/8 âm lịch</span>
        </div>
      </div>
    </React.Fragment>
  );
}

Weather.propTypes = {};

Weather.defaultPros = {};

export default Weather;
