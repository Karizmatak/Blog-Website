import React, { useState } from "react";

// Destructure the props directly in the component signature
const BlogPost = ({ post }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLiked, setIsLiked] = useState(() => post.likes);

  function handleHeartClick() {
    const newClickedState = !isClicked;

    setIsClicked(newClickedState);

    setIsLiked((prevLikes) =>
      newClickedState ? prevLikes + 1 : prevLikes - 1
    );
  }

  return (
    <>
      <div className="border-b-1 border-gray-200 py-4 w-230">
        <div className="flex flex-row gap-3 items-center text-gray-500">
          <img
            className="w-10 h-10 rounded-full"
            src={post.imageUrl}
            alt="image1"
          />
          <div>{post.author}</div>
          <div>{post.date}</div>
        </div>
        <div className="text-xl font-semibold">{post.title}</div>
        <div className="text-gray-600">{post.description}</div>
        <div className="flex flex-row gap-1 py-2">
          <div className="flex rounded-full bg-gray-200 px-2 py-1 text-gray-600 mr-4 hover:bg-gray-300 cursor-pointer">
            {post.tag}
          </div>
          <div className="flex flex-row items-center justify-center gap-2 text-gray-500">
            <button
              onClick={handleHeartClick}
              className="flex items-center gap-2 text-gray-500 focus:outline-none"
            >
              <i
                className={`${isClicked ? "fa-solid fa-heart" : "fa-regular fa-heart"} text-gray-500 cursor-pointer hover:[text-shadow:0_0_5px_rgba(0,0,0,0.3)] ${isClicked ? "text-red-500" : "text-gray-500"} `}
              ></i>
              {isLiked}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
