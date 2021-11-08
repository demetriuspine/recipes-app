import React, { Component } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../images/profileIcon.svg";
import searchIcon from "../images/searchIcon.svg";

function Header({ title }) {
  const [] = useState(false);
  return (
    <header className="header-container">
      <div>
        <Link to="">
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profile Icon"
          />
        </Link>
      </div>
      <div>
        <h1 data-testid="page-title">{title}</h1>
      </div>
    </header>
  );
}

/* data-testid="profile-top-btn" */
/* data-testid="search-top-btn" */
