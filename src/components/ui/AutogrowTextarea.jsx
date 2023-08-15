import React, { useEffect } from "react";
import { useRef } from "react";

const AutogrowTextarea = () => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    const handleInput = () => {
      textarea.style.height = "auto"; //temporarly set the height to auto
      textarea.style.height = `${textarea.scrollHeight}px`;

    };
    textarea.addEventListener("input", handleInput);

    return () => {
      textarea.removeEventListener("input", handleInput);
    };
  }, []);
  return (
    <>
      <textarea
        overflow-y="hidden"
        ref={textareaRef}
        rows={1}
        placeholder="What is happening?!"
        className="text-base resize-none mx-2 mt-2 p-1 w-full outline-none rounded-lg bg-black placeholder:text-slate-500 focus:outline-none placeholder:text-base "
      />
    </>
  );
};

export default AutogrowTextarea;
