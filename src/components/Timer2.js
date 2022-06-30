// rfc ->

import React, { useEffect, useState } from "react"; // useState az egy 'hook', ezeket hasznaljuk a reactben | mindig legkulso szintjen hivhato meg.

export default function Timer2() {
  const [time2, setTime] = useState(0);
  const [countryName, setCountryName] = useState("");
  const [country, setCountry] = useState(null);

  useEffect(() => { // valtozas esemenykezeloje
    console.log("time changed");
  }, [time2]);

  useEffect(() => { 
    async function fetchData() {
      // You can await here
      let response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await response.json();

      setCountry(data[0].name.nativeName[data[0].cca3.toLowerCase()].common);
    }
    if (countryName !== "") {
        fetchData();
    }
  }, [countryName]);

  return (
    <>
      <div>{time2}</div>
      <input
        type="text"
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setTime(time2 + 1);
        }}
      >
        click me
      </button>
      {/* <button onClick={() => { incrementTimer() }}>click me</button> */}
      <div>{country}</div>
    </>
  );
}
