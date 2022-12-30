import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Home/Post/Post";
import SideBar from "../components/Home/Sidebar";
import StoriesBar from "../components/Home/StoriesBar";
import { getPosts } from "../Redux/Actions/PostAction";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar />
        <div className="col">
          <main className="d-flex flex-column">
            <div className="container">
              <section className="col-10">
                <div className="content row mt-3">
                  <StoriesBar />
                  <div className="posts-wraper col-8">
                    <Post />
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
