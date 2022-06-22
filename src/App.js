import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "Pagination"}</h1>
        <p className="underline"></p>
        <div className="followers">
          <div className="container">
            {data.map((follower) => {
              return <Follower key={follower.id} {...follower}></Follower>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
