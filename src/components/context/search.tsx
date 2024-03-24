"use client";
import { ReactNode, createContext, useContext, useState } from "react";

export interface SearchContextData {
  query?: string;
  setQuery?: (query: string) => void;
}

const SearchContext = createContext<SearchContextData>({});

export function SearchProvider({
  initialQuery,
  children,
}: {
  initialQuery?: string;
  children: ReactNode;
}) {
  const [query, setQueryState] = useState<string>(initialQuery || "");

  const setQuery = (newQuery: string) => {
    setQueryState(newQuery);
  };

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
}
