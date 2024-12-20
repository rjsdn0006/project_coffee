import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [loadData, setLoadData] = useState();

  useEffect(() => {
    axios.get("/api/load").then((res) => {
      setLoadData(res.data);
    });
  }, []);
  return (
    <h1>
      {loadData ? (
        <div>
          {loadData.name}이며 {loadData.age}살입니다.
        </div>
      ) : null}
    </h1>
  );
};

export default Home;
