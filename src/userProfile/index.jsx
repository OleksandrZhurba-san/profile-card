import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../userCard";
import styles from "./styles.module.css";

export default function UserProfile() {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    getUser(userId).then((userData) => setUser(userData.data));
  }, [userId]);

  function getRandomId() {
    return Math.floor(Math.random() * 30);
  }
  function handleClick() {
    setUserId(getRandomId());
  }

  async function getUser(idx) {
    try {
      const response = await axios.get(`https://dummyjson.com/users/${idx}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(user);

  return (
    <div className={styles.user_profile}>
      {user ? <UserCard {...user} /> : <p>loading...</p>}
      <button onClick={handleClick}>Load New User</button>
    </div>
  );
}
