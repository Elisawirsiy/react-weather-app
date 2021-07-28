import React from "react";

function DateTime() {
  let currentTime = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentTime.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[currentTime.getMonth()];
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`; // or use concat() ="0".concat(hours)
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dates = currentTime.getDate();
  if (dates < 10) {
    dates = `0${dates}`;
  }
  let formatDate = `${day}, ${dates} ${month}`;
  let formatTime = `${hours}:${minutes}`;

  return (
    <div className="Date">
      <div className="date">{formatDate}</div>
      <div className="time">Last Updated: {formatTime}</div>
    </div>
  );
}
export default DateTime;
