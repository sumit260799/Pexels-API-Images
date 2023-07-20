import axios from "axios";
import { useState, useEffect } from "react";
import useGlobalContext from "./context";

const url = "https://api.pexels.com/v1/search";
const API_KEY = "8zxA8P9tUOfN3i0X5AG2MIomAtQc2CzVVyGONnXarIN206EytKqij2FG"; // Replace with your actual Pexels API key

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(
          `${url}?query=${searchTerm}&page=${page}`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        setData(result.data.photos);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, page]);

  if (isLoading) {
    return (
      <div className="w-[100%] h-[50vh] sm:h-[60vh] flex justify-center items-center">
        <div class="loading-circle"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  if (data.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      <div className="image-grid">
        {data.map((item) => {
          const imageUrl = item?.src?.large2x;
          return (
            <div key={item.id} className="image-item">
              <img className="image" src={imageUrl} alt={item.photographer} />
            </div>
          );
        })}
      </div>
      <button onClick={() => setPage(page + 1)} className="load-more-button ]">
        Load More
      </button>
    </section>
  );
};

export default Gallery;
