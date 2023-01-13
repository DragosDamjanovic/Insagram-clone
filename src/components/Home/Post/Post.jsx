import React, { useEffect, useState } from "react";
import {
  MoreOutlined,
  HeartOutlined,
  MessageOutlined,
  SendOutlined,
  BookOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Avatar, Image, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../Redux/Actions/PostAction";
import UserPost from "./UserPost";
import { Modal } from "react-bootstrap";

const Post = ({ postId }) => {
  const post = useSelector((state) =>
    state.Post.posts.find((object) => object._id === postId)
  );
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <article className="mb-5">
        <div className="col">
          <div className="row">
            <div className="d-flex flex-row justify-content-between align-items-center p-2">
              <header className="col-10 d-flex flex-row">
                <div>
                  <Avatar
                    src={
                      <Image
                        src="../public/instagram.svg"
                        style={{
                          width: 32,
                        }}
                      />
                    }
                    style={{
                      width: 37,
                      height: 37,
                    }}
                  />
                </div>
                <div className="col mx-2">
                  <div className="row text-start">
                    <span style={{ fontSize: "14px" }}>User</span>
                  </div>
                  <div className="row text-start">
                    <span style={{ fontSize: "14px" }}>Banjaluka</span>
                  </div>
                </div>
              </header>
              <div className="col-2">
                <Button type="link">
                  <MoreOutlined style={{ fontSize: "25px" }} />
                </Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="container p-0"
              style={{
                height: "500px",
              }}
            >
              <picture>
                <source media="(min-width:650px)" srcSet={post.image} />
                <img
                  src={post.image}
                  alt="Flowers"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    top: "0",
                    left: "0",
                  }}
                />
              </picture>
            </div>
          </div>
          <div className="row">
            <section className="col post-comands d-flex flex-row justify-content-between">
              <div>
                <span>
                  <button>
                    <HeartOutlined style={{ fontSize: "25px" }} />
                  </button>
                </span>
                <span>
                  <button>
                    <MessageOutlined style={{ fontSize: "25px" }} />
                  </button>
                </span>
                <span>
                  <button>
                    <SendOutlined style={{ fontSize: "25px" }} />
                  </button>
                </span>
              </div>
              <div>
                <span>
                  <button>
                    <BookOutlined style={{ fontSize: "25px" }} />
                  </button>
                </span>
              </div>
            </section>
            <section className="row likes text-start">
              <span>
                Svidja se korisniku <strong>dragos</strong> i jos{" "}
                <strong>drugih 100</strong>{" "}
              </span>
            </section>
            <div className="row comments mt-1">
              <div className="d-flex justify-content-start flex-column">
                <div className="row user-post-comment d-flex text-start flex-row">
                  <span className="col-5">
                    <a href="/">
                      <span>dragos </span>
                    </a>
                    moj komentar
                  </span>
                </div>
                <div className="row follwers-comments text-start">
                  <Button type="link" onClick={handleShow}>
                    Prikazi sve komentare (<span>53</span>)
                  </Button>
                </div>
              </div>
            </div>
            <div className="row text-start mb-2">
              <div>
                <span>prije 1 dana</span>
              </div>
            </div>
            <section>
              <form className="row post-comands d-flex text-start flex-row">
                <div className="col-1">
                  <SmileOutlined style={{ fontSize: "25px" }} />
                </div>
                <Input className="col-9" placeholder="Add comment..." />
                <button className="col-2">Post</button>
              </form>
            </section>
          </div>
        </div>
      </article>
      <Modal show={show} onHide={handleClose} size="xl">
        <UserPost
          handleClose={handleClose}
          postId={postId}
          image={post.image}
          comments={post.comments}
          post={post}
        />
        {console.log(post)}
      </Modal>
    </>
  );
};

export default Post;
