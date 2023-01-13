import { Avatar, Image } from "antd";
import React from "react";
import "../../Styles/ComponentsStyle/StoriesBar.scss";

const StoriesBar = () => {
  // Dummy data
  const stories = [
    {
      id: 1,
      name: "Profile 1",
      image: "../public/instagram.svg",
    },
    {
      id: 2,
      name: "Profile 2",
      image: "../public/instagram.svg",
    },
    {
      id: 3,
      name: "Profile 3",
      image: "../public/instagram.svg",
    },
  ];

  return (
    <>
      <div className="stories-container col-8 mb-3">
        <div className="d-flex">
          <ul className="row m-3 p-0">
            {stories.map((story) => (
              <li key={story.id} className="col">
                <Avatar
                  src={
                    <Image
                      src={story.image}
                      style={{
                        width: 32,
                      }}
                    />
                  }
                />
                <p className="m-0">{story.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default StoriesBar;
