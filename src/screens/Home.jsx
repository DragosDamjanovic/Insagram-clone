import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Home/Post/Post";
import SideBar from "../components/Home/Sidebar";
import StoriesBar from "../components/Home/StoriesBar";
import { getPosts } from "../Redux/Actions/PostAction";
import "./../Styles/PagesStyle/HomeStayle.scss";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.Post.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar />
        <div className="col content">
          <main className="d-flex flex-column">
            <div className="container">
              <section className="col">
                <div className=" row mt-3">
                  <StoriesBar />
                  <div className="posts-wraper col-8">
                    {!posts ? null : (
                      <>
                        {posts.map((post) => (
                          <Post key={post._id} postId={post._id} />
                        ))}
                      </>
                    )}
                  </div>
                </div>
                <div className="sugestions-container row"></div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
