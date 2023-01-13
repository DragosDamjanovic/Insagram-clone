import { Avatar, Image, Input, Button } from "antd";
import {
  HeartOutlined,
  MessageOutlined,
  SendOutlined,
  BookOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addComment, getPost } from "../../../Redux/Actions/PostAction";
import { useEffect, useState } from "react";
import "../../../Styles/ComponentsStyle/UserPost.scss";
import Comment from "./Comment";

const UserPost = ({ postId, post, image, comments, handleClose }) => {
  const [addComment, setAddComment] = useState("");
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(addComment(postId, { addComment }));
    setEditing(false);
  };

  return (
    <Modal.Body className="p-0">
      <div className="row">
        <div className="col-7 p-0">
          <div
            className="container p-0"
            style={{
              height: "600px",
            }}
          >
            <picture>
              <source media="(min-width:650px)" srcSet={image} />
              <img
                src={image}
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
        <div className="col-5 comments-section p-0">
          <div
            className="mx-4 d-flex flex-column justify-content-between"
            style={{ height: "100%" }}
          >
            <div className="row mt-4">
              <div className="row post-owner p-0">
                <div className="col-10 d-flex flex-row">
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
                      <span style={{ fontSize: "14px" }}>
                        <strong>User</strong>
                      </span>
                    </div>
                    <div className="row text-start">
                      <span style={{ fontSize: "14px" }}>Banjaluka</span>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <button onClick={handleClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <div className="row post-comments pt-3">
                <div className="row post-owner-comment">
                  <div className="col-1 p-0">
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
                  <div className="col-8 mx-2">
                    <div className="row text-start">
                      <span style={{ fontSize: "14px" }}>
                        <strong>User</strong>
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        {" "}
                        Multi-coloured personalisation at a moment’s notice.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row comments mt-2">
                  {!post ? null : (
                    <>
                      {post.comments.map((commentId) => (
                        <Comment
                          key={commentId}
                          commentId={commentId}
                          //post={post}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="row pb-2">
              <div className="row">
                <section className="post-comands d-flex flex-row justify-content-between">
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
              </div>
              <div className="row">
                <span>3,930 likes</span>
              </div>
              <form className="row post-comands d-flex text-start flex-row">
                <div className="col-1">
                  <SmileOutlined style={{ fontSize: "25px" }} />
                </div>
                <Input
                  className="col-9"
                  placeholder="Add comment..."
                  bordered={false}
                  //value={comment}
                  //onChange={(e) => setAddComment(e.target.value)}
                />
                <Button className="col-2" onClick={(e) => onSubmit(e)}>
                  Post
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Modal.Body>
  );
};

export default UserPost;
