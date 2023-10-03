import React from "react";

function RepoPage({ params: { name } }) {
  return (
    <div className="card">
      <h2>{name}</h2>
    </div>
  );
}

export default RepoPage;
