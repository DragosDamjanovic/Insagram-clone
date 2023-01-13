import React, { useEffect, useState } from "react";
import {
  MessageOutlined,
  PlusSquareOutlined,
  HeartOutlined,
  HomeOutlined,
  SearchOutlined,
  CompassOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { Avatar, Image, Button, Modal } from "antd";
import Notifications from "../Notifications";
import Search from "./Search/Search";
import "../../Styles/ComponentsStyle/Sidebar.scss";
import { PickerOverlay } from "filestack-react";
import { addPost } from "../../Redux/Actions/PostAction";
import { useDispatch } from "react-redux";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postUrl, setPostUrl] = useState("");
  const dispatch = useDispatch();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (postUrl) {
      dispatch(addPost(postUrl));
    }
  }, [dispatch, postUrl]);

  return (
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar">
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
            <li className="nav-item p-2">
              <a href="#" className="nav-link align-middle px-0">
                <HomeOutlined style={{ fontSize: "25px" }} />{" "}
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </li>
            <li className="nav-item p-2">
              <a
                href="#submenu1"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
              >
                <SearchOutlined style={{ fontSize: "25px" }} />{" "}
                <span className="ms-1 d-none d-sm-inline">Search</span>{" "}
              </a>
              <ul
                className="collapse nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <Search style={{ fontSize: "25px" }} />
              </ul>
            </li>
            <li className="nav-item p-2">
              <a href="#" className="nav-link px-0 align-middle">
                <CompassOutlined style={{ fontSize: "25px" }} />{" "}
                <span className="ms-1 d-none d-sm-inline">Explore</span>
              </a>
            </li>
            <li className="nav-item p-2">
              <a
                href="#submenu2"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle "
              >
                <MessageOutlined style={{ fontSize: "25px" }} />{" "}
                <span className="ms-1 d-none d-sm-inline">Messages</span>
              </a>
            </li>
            <li className="nav-item p-2">
              <a
                href="#submenu3"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
              >
                <HeartOutlined style={{ fontSize: "25px" }} />{" "}
                <span className="ms-1 d-none d-sm-inline">Notifications</span>{" "}
              </a>
              <ul
                className="collapse nav flex-column ms-1"
                id="submenu3"
                data-bs-parent="#menu"
              >
                <Notifications style={{ fontSize: "25px" }} />
              </ul>
            </li>
            <li className="nav-item p-2">
              <button
                className="nav-link px-0 align-middle"
                onClick={handleOpen}
              >
                <PlusSquareOutlined style={{ fontSize: "25px" }} />
                <span className="ms-1 d-none d-sm-inline">Create</span>{" "}
              </button>
              {!isOpen ? null : (
                <PickerOverlay
                  apikey={"AAzUaKqVSRm3W89J9ZZnGz"}
                  onSuccess={(res) => console.log(res)}
                  onUploadDone={(res) => setPostUrl(res.filesUploaded[0].url)}
                  onClose={handleClose}
                  open={isOpen}
                />
              )}
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
                src={
                  <Image
                    src="../public/instagram.svg"
                    style={{
                      width: 32,
                    }}
                  />
                }
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
