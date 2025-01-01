import React from "react";

const Card = ({
  productName,
  productPrice,
  category,
  img,
  productDescription,
}) => {
  return (
    <>
      <div class="relative flex flex-col justify-center items-center my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div class="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border ">
          <img
            src={img}
            alt="card-image"
            class="h-full w-full object-cover rounded-md"
          />
        </div>
        <div class="p-4">
          <div class="mb-2 flex items-center justify-between">
            <p class="text-slate-800 text-xl font-semibold">{productName}</p>
            <p class="text-cyan-600 text-xl font-semibold">${productPrice}</p>
          </div>
          <p class="text-slate-600 leading-normal font-light">
            {productDescription}
          </p>
          <p class="text-cyan-600 text-xl font-semibold">{category}</p>
          <button
            class="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
