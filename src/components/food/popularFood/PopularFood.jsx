import React, { useEffect, useState } from "react";
import axios from "axios";
import "./popularFood.scss";

const PopularFood = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const readAllData = async () => {
      try {
        const apiUrl = "/.netlify/functions/proxy";
        const response = await axios.get(apiUrl);

        // Log the API response to the console
        console.log("API Response:", response);

        setData(response.data.Items);
      } catch (error) {
        console.error("Failed", error);
      }
    };

    readAllData();

    //get window size and set
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const popularData = [];

  data.forEach((item) => {
    if (item.IsPopular) {
      popularData.push(item);
    }
  });

  //right shift item
  const shiftRight = () => {
    setStartIndex((prevStartIndex) =>
      popularData.length - prevStartIndex > 5
        ? prevStartIndex + 1
        : prevStartIndex
    );
  };

  //left shift item
  const shiftLeft = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex > 0 ? prevStartIndex - 1 : prevStartIndex
    );
  };

  let a = 5;
  windowWidth > 768 ? (a = 5) : (a = 3);

  const handleClick = () => {
    count === 0 ? setCount(1) : setCount(0);
  };

  // Helper function to generate image URLs dynamically
  const generateImageUrl = (url) => {
    // Check if the URL starts with http, and use it as-is
    if (url.startsWith("http://")) {
      return url;
    }
    // Otherwise, assume it's accessible over both http and https
    return `https:${url}`;
  };

  // Return JSX
  return (
    <div className="popularFoodContainer">
      <form className={count === 1 ? "active" : "inactive"}>
        <label className="selectFileLabel">
          <input
            className="selectFile"
            accept=".jpeg, .png, .jpg"
            type="file"
            name="file"
          />
        </label>
        <input type="text" placeholder="Enter Food Name" />
        <button className="button bg-primary">Submit</button>
      </form>
      <div className="heading">
        <h3>Popular</h3>
        <div className="addFood">
          <h5 onClick={handleClick}>AddMore</h5>
          <div className="buttons">
            <button onClick={shiftLeft} className="leftBtn">
              {"<"}
            </button>
            <button onClick={shiftRight}>{">"}</button>
          </div>
        </div>
      </div>
      <div className="cards">
        {popularData.slice(startIndex, startIndex + a).map((item, i) => (
          <div className="card" key={i}>
            <img src={generateImageUrl(item.ImageUrl)} alt={`Image ${i}`} />
            <div className="name">{item.Name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularFood;
