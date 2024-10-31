import Framer from "@/lib/Framer";
import { Plus, Search } from "lucide-react";
import React from "react";

export default function AccountTitle() {
  return (
    <Framer>
      <div className="flex items-center justify-between p-5 text-white">
        <p className="text-2xl font-semibold text-white">Accounts</p>
        <div className="flex gap-3">
          <div className="px-4">
            <div className="h-12 rounded-lg border-2 w-96 relative">
              <Search
                size={20}
                className="absolute top-1/2 -translate-y-1/2 left-3 text-white"
              />
              <input
                type="text"
                className="h-full w-full bg-transparent outline-none pl-11"
              />
            </div>
          </div>
          <div className="px-5 cursor-pointer duration-300 hover:scale-105 active:scale-100 font-semibold text-sm bg-green-500 py-3 rounded-md h-fit">
            <p>
              {" "}
              <Plus size={15} strokeWidth={5} className="inline text-xs" />{" "}
              Create Account
            </p>
          </div>
          <p className="text-sm cursor-pointer duration-300 h-fit hover:scale-105 active:scale-100 font-semibold py-3 px-5 bg-amber-500 rounded-lg shadow-md">
            Pending Accounts
          </p>
        </div>
      </div>
    </Framer>
  );
}
