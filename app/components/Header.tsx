"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <div className="h-64 bg-gradient-to-r from-[#5ecd81] to-[#238878] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">
          Ha shnetshem, prej Sotit!
        </h1>
        {/* SEARCH BAR */}
        <div className="text-left text-lg py-3 m-auto flex justify-center">
          <input
            className="rounded  mr-3 p-2 w-[450px] outline-none"
            type="text"
            placeholder="State, city or town"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link
            href={"/"}
            className="rounded bg-red-600 px-9 py-2 text-white"
            onClick={() => {
              if (search === "") return;
              router.push(`/search`);
            }}
          >
            Let's go
          </Link>
        </div>
        {/* SEARCH BAR */}
      </div>
    </div>
  );
};

export default Header;
