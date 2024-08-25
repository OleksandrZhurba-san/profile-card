import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

export default function UserCard({ image, firstName, lastName, email, phone }) {
  return (
    <div className={styles.user_card}>
      <img src={image}></img>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>
        <b>email:</b> {email}
      </p>
      <p>
        <b>phone: </b>
        {phone}
      </p>
    </div>
  );
}

UserCard.propTypes = {
  image: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};
