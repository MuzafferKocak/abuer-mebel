"use client";

import { Card } from "flowbite-react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Küche 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, alias.",
    rating: 5.0,
    image: "/images/products/img5.jpg",
  },
  {
    id: 2,
    title: "Küche 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, alias.",
    rating: 5.0,
    image: "/images/products/img7.jpg",
  },
  {
    id: 3,
    title: "Küche 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, alias.",
    rating: 5.0,
    image: "/images/products/img9.jpg",
  },
  {
    id: 4,
    title: "Küche 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, alias.",
    rating: 5.0,
    image: "/images/products/img4.jpg",
  },
  {
    id: 5,
    title: "Küche 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, alias.",
    rating: 5.0,
    image: "/images/products/img1.jpg",
  },
  {
    id: 6,
    title: "Küche 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, alias.",
    rating: 5.0,
    image: "/images/products/img10.jpg",
  },
];

const ProductCard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="cart" className="py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-2 mt-2">
        Products
      </h2>
      <div className="flex justify-center">
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-3 gap-6 p-2 mt-1 place-items-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
              animate={{
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
            >
              <Card
                key={product.id}
                className="w-full bg-zinc-900 p-3 rounded-2xl shadow-2xl"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[300px] object-fill rounded-lg"
                />
                <h5 className="text-xl font-semibold tracking-tight text-gray-300">
                  {product.title}
                </h5>

                <div className="flex items-center">
                  <span className="text-white ">{product.description}</span>
                </div>
                <div className="mb-1 mt-2 flex items-center ">
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
                  <button className="ml-auto">
                    <HeartIcon className="w-7 h-7 text-gray-400 hover:text-red-600 transition" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCard;
