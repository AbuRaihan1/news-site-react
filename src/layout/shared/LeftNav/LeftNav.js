import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategoris] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  }, []);
  return (
    <div>
      <h4>All categories {categories.length}</h4>
      {categories.map((category) => (
        <p key={category.id}>
          {" "}
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
