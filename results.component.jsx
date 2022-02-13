import React, { useEffect, useState } from "react";
import "./results.style.css";
import { Card } from "../../components/card/card.component";

export function ResultsLayout({ className }) {
  const [images, setImages] = useState([]);
  const [noData, setNoData] = useState(false);
  useEffect(() => {
    const query = window.location.href.split("/")[4];
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${query}`;
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setImages(data.hits);

      if (data.hits.length === 0) {
        setNoData(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={className} id="results">
      {noData && (
        <h1 className="error">Sorry, this search term yielded no results.</h1>
      )}
      {images.map((image) => {
        return <Card image={image} key={image.id} />;
      })}
    </div>
  );
}
