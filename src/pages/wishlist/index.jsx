import React, { useEffect, useState } from "react";
import SingleWishlist from "./singleWishlist";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [wished, setWished] = useState(false);

  const fetchUserData = async () => {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    const currentUser = data.find(
      (user) => user.email === localStorage.getItem("userEmail")
    );
    setUser(currentUser);
    setWishlist(currentUser ? currentUser.wishlist : []);
  };

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3001/bags");
    const data = await response.json();
    setProducts(data);
  };

  const clearWishlist = async () => {
    if (user) {
      await fetch(`http://localhost:3001/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wishlist: [] }),
      });

      setWishlist([]);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchProducts();
  }, [wished]);

  return (
    <div className="container max-w-[1128px] flex flex-col justify-between items-start mx-auto py-[50px] gap-12">
      <div className="mb-12 w-full flex items-center justify-between">
        <h1 className="text-[40px] text-[#212121] font-bold">Wishlist</h1>
        <button
          className="py-2 px-4 rounded-lg border-[1px] bg-red-600 text-white border-[#D0D0D0]"
          onClick={clearWishlist}
        >
          Clear Wishlist
        </button>
      </div>
      <div className="w-full flex gap-6 items-center justify-center">
        <div className="flex flex-col gap-6">
          {wishlist.length > 0 ? (
            wishlist.map((item, index) => {
              const product = products.find(
                (prod) => prod.id === item.productId
              );
              return product ? (
                <SingleWishlist
                  setWished={setWished}
                  key={index}
                  image={product.image}
                  name={product.name}
                  id={product.id}
                  color={product.color}
                  size={product.size}
                />
              ) : null;
            })
          ) : (
            <div className="flex items-center justify-center">
              <h1 className="font-bold text-[60px]">Items Not Found</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
