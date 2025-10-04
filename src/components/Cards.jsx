import React, { useState, useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { GrCloudDownload } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "motion/react";

function Cards({ id, data, reference, onDelete }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (data.url) {
      fetch(data.url)
        .then((res) => res.text())
        .then(setContent)
        .catch(console.error);
    }
  }, [data.url]);

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={1.3}
      className="relative w-60 h-72 flex-shrink-0 bg-zinc-700/70 rounded-[50px] text-white p-8 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="mt-3 text-sm leading-tight font-semibold">{data.desc}</p>
      <p className="mt-2 text-xs italic line-clamp-3">{content}</p>

      <div className="footer absolute w-full bottom-0 left-0">
        <div className="mb-3 px-8 items-center flex justify-between">
          <div>{data.fileSize}</div>
          <span
            className="w-7 h-7 bg-zinc-800 rounded-full flex items-center justify-center cursor-pointer"
            onClick={onDelete}
          >
            <AiOutlineCloseCircle />
          </span>
        </div>

        {data.tag.title?.trim() && (
          <div
            className={`tag w-full h-10 ${
              data.tag.color === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <h3 className="text-sm text-white font-semibold">
                {data.tag.title}
              </h3>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
