import { useEffect, useState } from "react";
import axios from "axios";
import "./popularFood.scss";




/*----------Recommended Food Component----------*/
const RecommendedFood = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);

  useEffect(() => {
    //read all data
    const readAllData = async () => {
      try {
        const apiUrl = "https://cors-anywhere.herokuapp.com/http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10";

        const response = await axios.get(apiUrl);
        setData(response.data.Items);
      } catch (error) {
        console.error("Failed", error);
      }
    };

    readAllData();

    // window size count and set
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const recommendedData = [];

  data.forEach((item) => {
    if (item.IsRecommended) {
      recommendedData.push(item);
    }
  });


  //right shift item
  const shiftRight = () => {
    setStartIndex((prevStartIndex) =>
      recommendedData.length - prevStartIndex > 5
        ? prevStartIndex + 1
        : prevStartIndex
    );
  };


  // left sift item
  const shiftLeft = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex > 0 ? prevStartIndex - 1 : prevStartIndex
    );
  };

  // get window size
  let a = 5;
  windowWidth > 768 ? (a = 5) : (a = 3);


  // count for adding new item form
  const handleClick = () => {
    count === 0 ? setCount(1) : setCount(0);
  };


  //Return jsx
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
        <h3>Recommended</h3>
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
        {recommendedData.slice(startIndex, startIndex + a).map((item, i) => (
          <div className="card" key={i}>
            <img src={item.ImageUrl} alt={`Image ${i}`} />
            <div className="name">{item.Name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedFood;
