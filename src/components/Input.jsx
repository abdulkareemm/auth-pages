import React from 'react'

const Input = ({ handleChange ,name,type}) => {
  return (
    <div className="w-full relative mt-[35px] inputANM">
      <input
        type={type}
        onChange={handleChange}
        name={name}
        className="relative w-full sm:text-sm md:text-xl px-4 py-2 outline-none bg-transparent duration-300 z-10  tracking-[0.05em]"
        required={true}
      />
      <span className="absolute sm:text-sm md:text-xl left-0  px-2 py-2  tracking-[0.05em] duration-300 capitalize font-semibold text-slate-600">
        {name}
      </span>
      <i className="absolute left-0 bottom-0 w-full h-1 rounded-md bg-[#EE204D]/30 duration-300" />
    </div>
  );
};

export default Input