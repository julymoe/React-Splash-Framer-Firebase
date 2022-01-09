import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../utilis/hooks/useDebounce";
import { useFetchImage } from "../utilis/hooks/useFetchImage";
import Image from "./Image";
import { Loading } from "./Loading";

export const Images = () => {
  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState(null);
  const [images, setImages, errors, isLoading] = useFetchImage(
    page,
    searchTerm
  );

  function handleRemove(index) {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  const debounce = useDebounce();

  function handleInput(e) {
    const text = e.target.value;
    debounce(() => setSearchTerm(text));
  }

  return (
    <section className="text-center">
      <div className="my-5">
        <input
          type="text"
          className="w-full border rounded shadow px-5 py-3"
          onChange={handleInput}
          placeholder="Search Photo Here"
        />
      </div>
      {errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      )}

      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        className="flex flex-wrap"
      >
        {images.map((img, index) => (
          <motion.div
            layoutId={img.urls.regular}
            className="w-1/4 p-1 border flex justify-center"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            key={index}
          >
            <Image
              image={img.urls.regular}
              handleRemove={handleRemove}
              index={index}
            />
          </motion.div>
        ))}
      </InfiniteScroll>

      {isLoading && <Loading />}
    </section>
  );
};
