"use client";
import { ChangeEvent, FormEvent } from "react";

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

import { useSearchContext } from "../context/search";
import { useRouter } from "next/navigation";

export function HeaderSearchBar() {
  const router = useRouter();
  const { query, setQuery } = useSearchContext();

  const handleSetQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery && setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const encodedUrlQuery = encodeURIComponent(query ?? "");
    router.push(`/drive/search?q=${encodedUrlQuery}`);
  };

  return (
    <div className="w-full flex-1">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-stone-500 dark:text-stone-400" />
          <Input
            className="w-full appearance-none bg-white pl-8 shadow-none md:w-2/3 lg:w-1/3 dark:bg-stone-950"
            placeholder="Search..."
            type="search"
            value={query}
            onChange={(e) => handleSetQuery(e)}
          />
        </div>
      </form>
    </div>
  );
}
