import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function TransactionDetail() {
  const style = {
    value: "font-medium md:font-semibold md:text-base text-[15px]",
    property: "text-gray-400 text-sm",
  };
  return (
    <div className="text-white">
      <div className="flex flex-col justify-between items-center gap-3 md:gap-5 font-semibold">
        <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full border-2"></div>
        <p className="text-[15px] md:text-xl ">Anne Mayers Paige</p>
      </div>
      <div className="mt-7 space-y-5">
        <div className="space-y-1">
          <p className={style.property}>Transaction ID</p>
          <p className={`${style.value}`}>343466364DTE</p>
        </div>
        <div className="space-y-1">
          <p className={style.property}>Amount</p>
          <p className={`${style.value}`}>$25,825.00</p>
        </div>
        <div className="space-y-1">
          <p className={style.property}>Date</p>
          <p className={style.value}>20-04-2024</p>
        </div>
        <div className="space-y-1">
          <p className={style.property}>Type</p>
          <p className={style.value}>Debit</p>
        </div>
        <div className="space-y-1">
          <p className={style.property}>Description</p>
          <p className={style.value}>Grocery Store</p>
        </div>
        <div className="space-y-1">
          <p className={style.property}>Category</p>
          <p className={style.value}>Shopping</p>
        </div>
        <div className="space-y-1">
          <p className={style.property}>Status</p>
          <p className={` ${style.value} text-amber-500`}>Pending</p>
        </div>
      </div>
      <div className="grid mt-5 place-content-center">
        <button className="px-12 shadow-md duration-300 font-semibold active:scale-105 py-3 rounded-lg bg-lime-500">
          Edit
        </button>
      </div>
    </div>
  );
}
