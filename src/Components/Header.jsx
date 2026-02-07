import React from "react";
import styles from "../styles/Header.module.css";
// import profilePic from "../images/profile.jpg"; // Add your picture here

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      {/* <img src={profilePic} alt="Miha Bhaskaran" className={styles.profilePic} /> */}
      <div className={styles.text}>
        <h1>hi, i'm miha!</h1>
        
      </div>
    </div>
  </header>
);

export default Header;
