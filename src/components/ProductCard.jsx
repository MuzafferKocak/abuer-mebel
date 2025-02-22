"use client";

import { Card } from "flowbite-react";

const products = [
  {
    id: 1,
    title: "Küche 1",
    price: "",
    rating: 5.0,
    image: "/images/products/küche1.jpg",
  },
  {
    id: 2,
    title: "Küche 2",
    price: "",
    rating: 5.0,
    image: "/images/products/küche2.jpg",
  },
  {
    id: 3,
    title: "Küche 3",
    price: "",
    rating: 5.0,
    image: "/images/products/küche3.jpg",
  },
  {
    id: 4,
    title: "Küche 4",
    price: "",
    rating: 5.0,
    image: "/images/products/küche4.jpg",
  },
];

const ProductCard = () => {
  return (
    <section id="cart" className="py-20">
    <h2 className="text-4xl font-bold text-center text-white mb-2 mt-4">
        Products
      </h2>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-2 mt-2">
        {products.map((product) => (
          <Card
            key={product.id}
            className="w-full bg-zinc-900 p-4 rounded-2xl shadow-2xl transition-transform transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h5 className="text-xl font-semibold tracking-tight text-gray-300">
              {product.title}
            </h5>
            <div className="mb-2 mt-2.5 flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.round(product.rating)
                      ? "text-yellow-300"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 ">
                {product.rating}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 ">
                {product.price}
              </span>
              <a
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300"
              >
                Add to cart
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
