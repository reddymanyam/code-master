import React, { useEffect, useState } from 'react';

const LeaderBoard = () => {
  const [rank, setRank] = useState([]);

  const leaderBoard = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setRank(data); 
      console.log(data)
    } catch (err) {
      console.log("Error while fetching...", err);
    }
  };

  useEffect(() => {
    leaderBoard();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {rank.map((p, index) => (
            <tr key={index}> 
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.username}</td>
              <td>{p.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default LeaderBoard;
