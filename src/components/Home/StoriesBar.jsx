import { Avatar } from "@mui/material";
import React from "react";

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
      <div className="stories-container row">
        <div className="d-flex">
          <ul className="row">
            {stories.map((story) => (
              <li key={story.id} className="col">
                <Avatar alt="Remy Sharp" src={story.image} />
                <p>{story.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default StoriesBar;
