import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../styles/DropdownMenu.module.css";

const Threedots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const DropdownMenu = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={Threedots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          onClick={handleEdit}
          className={styles.DropdownItem}
          aria-label="edit"
        >
          <i className="fas fa-edit"></i>
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt"></i>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
