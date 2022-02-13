import React, { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      setError(null)
      setIsLoading(true);
      const res = await api.get(`/users`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      });

      setUsers(res.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.messsage);
    }
  };

  if (isloading) return <h1>Loading....</h1>;
  if (error) return <h1>{error}</h1>
  return (
    <div
      className="grid grid-cols-1 gap-8 xl:grid-cols-4 
        lg:grid-cols-3 md:grid-cols-2"
    >
      {users.map((user) => (
        <h3 key={user.id}>{user.login}</h3>
      ))}
    </div>
  );
};
export default UserResults;
