import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handleClick = (index) => {
    setPage(index);
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "Pagination"}</h1>
        <p className="underline"></p>
        <section className="followers">
          <div className="container">
            {followers.map((follower) => {
              return <Follower key={follower.id} {...follower}></Follower>;
            })}
          </div>
          {!loading && (
            <div className="btn-container">
              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`page-btn ${
                      index === page ? "active-btn" : null
                    }`}
                    onClick={() => {
                      handleClick(index);
                    }}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
