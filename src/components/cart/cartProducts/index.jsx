import React, { useEffect, useState } from "react";
import SingleCartProduct from "../singleCartProducts";

const CartProducts = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    const currentUser = data.find(
      (user) => user.email === localStorage.getItem("userEmail")
    );
    setUser(currentUser);
    setCart(currentUser ? currentUser.basket : []);
  };

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3001/bags");
    const data = await response.json();
    setProducts(data);
  };

  const clearCart = async () => {
    if (user) {
      await fetch(`http://localhost:3001/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ basket: [] }),
      });
      
      setCart([]);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchProducts();
  }, []);

  return (
    <section className="container max-w-[1128px]">
      <div className="mb-12 flex items-center justify-between">
        <h1 className="text-[40px] text-[#212121] font-bold">Shopping bag</h1>
        <button
          className="py-2 px-4 rounded-lg border-[1px] bg-red-600 text-white border-[#D0D0D0]"
          onClick={clearCart}
        >
          Clear cart
        </button>
      </div>
      <div className="flex gap-6 justify-between">
        <div className="flex flex-col gap-6">
          {cart.length > 0 ? (
            cart.map((item, index) => {
              const product = products.find(
                (prod) => prod.id === item.productId
              );
              return product ? (
                <SingleCartProduct
                  key={index}
                  image={product.image}
                  name={product.name}
                  id={product.id}
                  size={product.size}
                  price={product.price}
                  color={product.color}
                  count={item.count}
                />
              ) : null;
            })
          ) : (
            <div className="flex items-center justify-center">
              <h1 className="font-bold text-[60px]">Items Not Found</h1>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-[#F9F9F9] w-[360px] rounded-lg py-8 px-6 flex flex-col">
            <div className="flex w-[312px] justify-between mb-3">
              <p className="text-[16px] text-[#212121]">Your subtotal</p>
              <p className="text-[16px] text-[#212121]">
                US $
                {cart
                  .reduce((acc, item) => {
                    const product = products.find(
                      (prod) => prod.id === item.productId
                    );
                    return acc + (product ? product.price * item.count : 0);
                  }, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex w-[312px] justify-between mb-5">
              <p className="text-[16px] text-[#212121]">Shipping charges</p>
              <p className="text-[16px] text-[#212121]">Free</p>
            </div>
            <div className="flex w-[312px] justify-between mb-6">
              <p className="text-[18px] font-medium text-[#212121]">Total</p>
              <p className="text-[18px] font-medium text-[#212121]">
                US $
                {cart
                  .reduce((acc, item) => {
                    const product = products.find(
                      (prod) => prod.id === item.productId
                    );
                    return acc + (product ? product.price * item.count : 0);
                  }, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="border-dashed w-full border mb-6"></div>
            <div className="relative">
              <input
                type="text"
                className="p-4 border border-[#DBDBDB] rounded-lg w-full relative"
                placeholder="Discount promo code"
              />
              <button className="bg-[#FF695E] h-full rounded-r-lg text-white font-medium py-2.5 px-7 absolute right-0 top-0">
                Apply
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="font-medium text-white bg-[#DF4244] text-center py-4 w-full rounded-lg">
              Confirm cart
            </button>
            <button className="font-medium text-[#212121] border border-[#212121] text-center py-4 w-full rounded-lg">
              Cash payment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartProducts;
