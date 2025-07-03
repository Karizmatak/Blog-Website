import React from "react";
import BlogPost from "./BlogPost.jsx";

const blogPostsData = [
  {
    id: "1",
    author: "Zyzz @",
    date: "29 Sep",
    title: "test blog 1",
    description: "this is a sample short description about this blog.",
    tag: "Test",
    likes: 0,
    imageUrl: "https://i.ytimg.com/vi/sCwH_JluYaE/maxresdefault.jpg",
  },
  {
    id: "2",
    author: "David Goggins @",
    date: "27 Sep",
    title: "The Brightest Stars in the Darkest Sky",
    description: "New Zealand's Dark Sky Project at Lake Tekapo",
    tag: "Travel",
    likes: 1,
    imageUrl: "https://i.redd.it/egenc13n74lb1.jpg",
  },
  {
    id: "3",
    author: "David Goggins @",
    date: "27 Sep",
    title: "The Food and Environment in Costa Rica Healed My Gut and My Soul",
    description: "I didn't know I was in for a week of wellness",
    tag: "Food",
    likes: 1,
    imageUrl: "https://i.redd.it/egenc13n74lb1.jpg",
  },
  {
    id: "4",
    author: "Tuna Tavus @",
    date: "26 Sep",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quibusdam dolorum accusamus assumenda reiciendis harum hic voluptas! Necessitatibus, molestias! Rerum tempora aspernatur ipsum alias repudiandae nam tempore ab cupiditate voluptatibus!",
    description: "I didn't know I was in for a week of wellness",
    tag: "Cock",
    likes: 1,
    imageUrl: "https://i.redd.it/egenc13n74lb1.jpg",
  },
];

const Header = () => {
  return (
    <>
      <div className="w-full h-[100px] border border-gray-100 flex items-center pl-10 gap-6 justify-between">
        <div className="w-auto flex flex-row gap-10">
          <img
            src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
            alt="nextjs.logo"
            className="w-[60px] h-[60px]"
          />
          <div className="relative flex items-center">
            <i className="fa-solid fa-magnifying-glass absolute left-3 text-gray-500 text-lg"></i>
            <input
              type="text"
              className="w-[250px] h-[40px] border border-gray-200 rounded-full bg-gray-200 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="pr-10 flex flex-row items-center gap-5">
          <i className="fa-solid fa-bell text-3xl p-4 bg-gray-100 rounded-full"></i>
          <img
            src="https://tartismacicom.wordpress.com/wp-content/uploads/2020/02/regular_show_wallpaper_1280x1024_08.jpg?w=922"
            className="w-16 h-16 rounded-full"
            alt="Muscle Man"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="border-r-1 border-gray-200 w-300 h-200 pl-30 pt-4">
          <div className="border-b-1 flex flex-row w-230 border-gray-200">
            <div className="items-center flex flex-row h-15 text-gray-600 border-b-2 border-gray-400 w-25 justify-center">
              Home
            </div>
          </div>
          {/* Map over blogPostsData to render multiple BlogPost components */}
          {blogPostsData.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        {/* Right Sidebar */}
        <div className="w-[380px] bg-white border-l border-gray-100 p-6">
          {" "}
          {/* Adjusted width and padding */}
          {/* Stories from all interests */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-800 text-lg mb-4">
              Stories from all interests
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Programming
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Hollywood
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Film Making
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Social Media
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Cooking
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Technology
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Finances
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                Travel
              </span>
            </div>
          </div>
          {/* Trending */}
          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-4">
              Trending{" "}
              <i className="fa-solid fa-arrow-trend-up text-sm ml-1 text-gray-500"></i>
            </h3>
            <div className="space-y-6">
              {/* Trending Item 1 */}
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-gray-300">01</span>
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <img
                      src="https://randomuser.me/api/portraits/women/22.jpg"
                      alt="Author"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>tanisha massey @tanisha • 27 Sep</span>
                  </div>
                  <p className="font-semibold text-gray-900 leading-tight">
                    The Brightest Stars in the Darkest Sky
                  </p>
                </div>
              </div>
              {/* Trending Item 2 */}
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-gray-300">02</span>
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <img
                      src="https://randomuser.me/api/portraits/men/33.jpg"
                      alt="Author"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>kunaal kumar @kunaal438 • 27 Sep</span>
                  </div>
                  <p className="font-semibold text-gray-900 leading-tight">
                    What is Apple's Vision Pro Really For?
                  </p>
                </div>
              </div>
              {/* Trending Item 3 */}
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-gray-300">03</span>
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <img
                      src="https://randomuser.me/api/portraits/women/22.jpg"
                      alt="Author"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>tanisha massey @tanisha • 27 Sep</span>
                  </div>
                  <p className="font-semibold text-gray-900 leading-tight">
                    The Food and Environment in Costa Rica Healed My Gut...
                  </p>
                </div>
              </div>
              {/* Trending Item 4 */}
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-gray-300">04</span>
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <img
                      src="https://randomuser.me/api/portraits/men/33.jpg"
                      alt="Author"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>kunaal kumar @kunaal438 • 27 Sep</span>
                  </div>
                  <p className="font-semibold text-gray-900 leading-tight">
                    Change These 12 iOS 17
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
