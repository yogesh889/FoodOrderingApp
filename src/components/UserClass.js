import React, { useState, useEffect } from "react";

const UserCard = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Loading...",
    location: "Fetching location...",
    avatar_url: "https://via.placeholder.com/150",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await fetch("https://api.github.com/users/yogesh889");
        const json = await data.json();
        setUserInfo(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();

    // Optional cleanup
    return () => {
      console.log("UserCard component unmounted");
    };
  }, []);

  const { name, location, avatar_url } = userInfo;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl overflow-hidden p-6 text-center border border-gray-200">
      <img
        src={avatar_url}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-md"
      />
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">Name: {name}</h2>
      <h3 className="text-lg text-gray-600 mt-1">Location: {location}</h3>
      <h4 className="text-sm text-gray-500 mt-2">Contact: @vaasuk24</h4>
    </div>
  );
};

export default UserCard;
