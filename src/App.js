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
  }, [loading]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "Pagination"}</h1>
        <p className="underline"></p>
        <div className="followers">
          <div className="container">
            {followers.map((follower) => {
              return <Follower key={follower.id} {...follower}></Follower>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
