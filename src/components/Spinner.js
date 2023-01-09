import React from 'react'
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Spinner = ({spinner}) => {
  return (
    <div className={styles.Asset}>
        {spinner && <Spinner animation='border' />}
    </div>
  )
}

export default Spinner