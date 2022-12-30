import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const Post = () => {
  return (
    <>
      <article>
        <div className="col">
          <div className="row p-2">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <header className="col-10 d-flex flex-row justify-content-between">
                <div>
                  <Avatar alt="Remy Sharp" src="../public/instagram.svg" />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <span>User</span>
                </div>
              </header>
              <div className="col-2">
                <Button>
                  <MoreVertIcon />{" "}
                </Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <picture>
                <source
                  media="(min-width:650px)"
                  srcSet="../../../public/ker.jpg"
                />
                <img src="../../../public/ker.jpg" alt="Flowers" />
              </picture>
            </div>
          </div>
          <div className="row">
            <section className="col post-comands d-flex flex-row justify-content-between">
              <div>
                <span>
                  <button>
                    <FavoriteBorderIcon />
                  </button>
                </span>
                <span>
                  <button>
                    <ChatBubbleOutlineIcon />
                  </button>
                </span>
                <span>
                  <button>
                    <SendIcon />
                  </button>
                </span>
              </div>
              <div>
                <span>
                  <button>
                    <BookmarkBorderIcon />
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
                  <a href="/">
                    <div>
                      Prikazi sve komentare (<span>53</span>)
                    </div>
                  </a>
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
                  <SentimentSatisfiedAltIcon />
                </div>
                <textarea className="col-9"></textarea>
                <button className="col-2">Submit</button>
              </form>
            </section>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;
