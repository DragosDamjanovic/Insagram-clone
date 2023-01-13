import { useDispatch, useSelector } from "react-redux";
import { getComment } from "../../../Redux/Actions/PostAction";
import { Avatar, Image } from "antd";
import { useEffect } from "react";

const Comment = ({ commentId }) => {
  const dispatch = useDispatch();
  const comment = useSelector((state) =>
    state.Post.post.commentObjects.find((object) => object._id === commentId)
  );

  useEffect(() => {
    dispatch(getComment(commentId));
  }, [commentId, dispatch]);

  console.log(commentId);

  return (
    <>
      {!comment ? (
        <div></div>
      ) : (
        <>
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
                <strong>{comment.user}</strong>
              </span>
              <span style={{ fontSize: "14px" }}>{comment.text}</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Comment;
