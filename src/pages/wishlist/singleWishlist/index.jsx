import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const SingleWishlist = ({ image, size, name, color, id,setWished }) => {

  const toggleWishlist = async (productId) => {
    const userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
      alert("Please log in to manage your wishlist.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();

      const user = users.find((user) => user.email === userEmail);

      if (user) {
        // Ensure wishlist is initialized as an array
        if (!Array.isArray(user.wishlist)) {
          user.wishlist = [];
        }

        const existingProduct = user.wishlist.find(
          (item) => item.productId === productId
        );

        if (existingProduct) {
          user.wishlist = user.wishlist.filter(
            (item) => item.productId !== productId
          );
          setWished(false);
          alert("Item removed from your wishlist!");
          setWished((wished)=>!wished)
        } else {
          user.wishlist.push({ productId });
          setWished(true);
          alert("Item added to your wishlist!");
        }

        const updateResponse = await fetch(
          `http://localhost:3001/users/${user.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );

        if (!updateResponse.ok) {
          alert("Failed to update wishlist. Please try again.");
        }
      } else {
        alert("User not found.");
      }
    } catch (error) {
      console.error("Error managing wishlist:", error);
    }
  };

  useEffect(() => {
  }, []);

  return (
    <div className="container max-w-full border-[#E4E4E4] rounded-lg border-[1px] p-4 flex gap-6">
      <div className="p-4 bg-[#F9F9F9] rounded-lg w-[200px] h-[200px] flex justify-center">
        <img src={image} className="rounded-lg"/>
      </div>
      <div className="flex flex-col">
        <div className="flex w-[534px] justify-between">
          <p className="font-medium text-[#212121] text-[16px]">{name}</p>
        </div>
        <div className="flex items-center gap-6 mb-2">
          <p className="text-[#212121] text-opacity-75 text-[14px]">
            Size : {size}
          </p>
          <p className="text-[#212121] text-opacity-75 text-[14px]">
            Color : {color}
          </p>
        </div>
        <div className="mb-2">
          <p className="text-[#212121] text-opacity-75 text-[14px]">Quality</p>
        </div>
      </div>

      <div className="flex justify-end">

          <FaHeart
            className="text-[#DF4244] text-[24px] cursor-pointer"
            onClick={() => {
              toggleWishlist(id);
            }}
          />        
      </div>
    </div>
  );
};

export default SingleWishlist;
