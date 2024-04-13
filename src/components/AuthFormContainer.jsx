import React from "react";


export default function AuthFormContainer({
  title,
  children,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className=" flex rounded-md absolute overflow-hidden bg-transparent p-2 "
    >
      <span className="borderLine"></span>
      <div className="flex flex-col space-y-8 p-5 bg-[#EFFFFF] sm:w-88 md:w-96 rounded-md border-2-black z-20 ">
        <h3 className="text-center sm:text-xl md:text-3xl text-black font-bold mt-4 mb-[20px]">
          {title}
        </h3>
        {children}
      </div>
    </form>
  );
}
