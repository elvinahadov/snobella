import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useStore from "../../../store/store";

const SingleProduct = ({ image, name, id }) => {
  const [wished, setWished] = useState(false); // Initialize to false

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      const fetchUser = async () => {
        try {
          const response = await fetch("http://localhost:3001/users");
          const users = await response.json();
          const user = users.find((user) => user.email === userEmail);
          if (user) {
            // Check if the product is in the user's wishlist
            const isWished = user.wishlist?.some(
              (item) => item.productId === id
            );
            setWished(isWished);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };
      fetchUser();
    }
  }, [id]);

  const addToCart = async (productId) => {
    const userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
      alert("Please log in to add items to your cart.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();
      const user = users.find((user) => user.email === userEmail);

      if (user) {
        const existingProduct = user.basket.find(
          (item) => item.productId === productId
        );

        if (existingProduct) {
          existingProduct.count += 1;
        } else {
          user.basket.push({ productId, count: 1 });
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

        if (updateResponse.ok) {
          alert("Item added to your cart!");
        } else {
          alert("Failed to update cart. Please try again.");
        }
      } else {
        alert("User not found.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

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
          // Remove the product from the wishlist
          user.wishlist = user.wishlist.filter(
            (item) => item.productId !== productId
          );
          alert("Item removed from your wishlist!");
          setWished(false);
        } else {
          user.wishlist.push({ productId });
          alert("Item added to your wishlist!");
          setWished(true);
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

  return (
    <div className="bg-[#F9F9F9] rounded-[8px] w-[360px] h-[508px] flex flex-col px-[24px] py-[28px] items-center justify-center gap-4">
      <div className="flex w-full items-center justify-end pb-6">
        {wished ? (
          <FaHeart
            className="text-[#DF4244] text-[24px] cursor-pointer"
            onClick={() => {
              toggleWishlist(id);
            }}
          />
        ) : (
          <FaRegHeart
            className="text-[#DF4244] text-[24px] cursor-pointer"
            onClick={() => {
              toggleWishlist(id);
            }}
          />
        )}
      </div>
      <div>
        <Link to={`/product/${id}`}>
          <div className="flex items-baseline w-[200px] h-[200px] relative mx-auto">
            <div className="absolute bottom-0">
              <img src={image} alt={name} className="rounded-lg" />
            </div>
          </div>
        </Link>
        <div>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-yellow-500">
                &#9733;
              </span>
            ))}
          </div>
          <p className="text-[16px] font-normal text-[#000] my-4">{name}</p>
          <div className="flex items-center gap-[14px]">
            <p className="text-[20px] font-semibold text-[#F75145]">$130</p>
            <p className="text-[#363636] opacity-75 text-[16px] font-normal">
              From $340.00
            </p>
          </div>
        </div>
        <div>
          <button
            className="py-[11px] w-full border border-[#212121] rounded-[8px] text-[#212121] font-medium text-[16px] mt-7"
            onClick={() => {
              addToCart(id);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
