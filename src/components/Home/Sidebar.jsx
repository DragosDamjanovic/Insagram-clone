import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar } from "@mui/material";
import Search from "./Search/Searc";
import Notifications from "../Notifications";

const SideBar = () => {
  return (
    <>
      {/* <div className="sidebar col-2">
        <div className="sidebar-content p-2">
          <div className="row logo">
            <picture className="row">
              <source
                media="(min-width:650px)"
                srcSet="../public/Instagram_logo.svg.png"
              />
              <img src="../public/Instagram_logo.svg.png" alt="logo" />
            </picture>
          </div>
          <div className="row m-2">
            <div className="row m-2">
              <div className="col-2">
                <HomeIcon />
              </div>
              <div className="col-4">
                <span>Home</span>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-2">
                <SearchIcon />
              </div>
              <div className="col-4">
                <span>Search</span>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-2">
                <ExploreIcon />
              </div>
              <div className="col-4">
                <span>Explore</span>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-2">
                <ChatBubbleOutlineIcon />
              </div>
              <div className="col-4">
                <span>Chat</span>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-2">
                <FavoriteBorderIcon />
              </div>
              <div className="col-4">
                <span>Notifications</span>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-2">
                <AddCircleOutlineIcon />
              </div>
              <div className="col-4">
                <span>Create</span>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-2">
                <Avatar
                  alt="Remy Sharp"
                  src="../public/instagram.svg"
                  sx={{ width: 24, height: 24 }}
                />
              </div>
              <div className="col-4">
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {} */}
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <div className="row logo">
            <picture className="row">
              <source
                media="(min-width:650px)"
                srcSet="../public/Instagram_logo.svg.png"
              />
              <img src="../public/Instagram_logo.svg.png" alt="logo" />
            </picture>
          </div>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <a href="#" className="nav-link align-middle px-0">
                <HomeIcon />{" "}
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#submenu1"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
              >
                <SearchIcon />{" "}
                <span className="ms-1 d-none d-sm-inline">Search</span>{" "}
              </a>
              <ul
                className="collapse show nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <Search />
              </ul>
            </li>
            <li>
              <a href="#" className="nav-link px-0 align-middle">
                <ExploreIcon />{" "}
                <span className="ms-1 d-none d-sm-inline">Explore</span>
              </a>
            </li>
            <li>
              <a
                href="#submenu2"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle "
              >
                <ChatBubbleOutlineIcon />{" "}
                <span className="ms-1 d-none d-sm-inline">Messages</span>
              </a>
            </li>
            <li>
              <a
                href="#submenu3"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
              >
                <FavoriteBorderIcon />{" "}
                <span className="ms-1 d-none d-sm-inline">Notifications</span>{" "}
              </a>
              <ul
                className="collapse nav flex-column ms-1"
                id="submenu3"
                data-bs-parent="#menu"
              >
                <Notifications />
              </ul>
            </li>
            <li>
              <a href="#" className="nav-link px-0 align-middle">
                <AddCircleOutlineIcon />{" "}
                <span className="ms-1 d-none d-sm-inline">Create</span>{" "}
              </a>
            </li>
          </ul>
          {/* <hr> */}
          <div className="dropdown pb-4">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Avatar
                alt="Remy Sharp"
                src="../public/instagram.svg"
                sx={{ width: 24, height: 24 }}
              />
              <span className="d-none d-sm-inline mx-1">Profile</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              {/* <li><hr class="dropdown-divider"/></li> */}
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
