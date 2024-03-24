import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function encodeSearchQueryForURI(query: string): string {
  return encodeURIComponent(query).replace(/[%]/g, "$pc_data$");
}

export function decodeSearchQueryFromURI(queryParam: string): string {
  return decodeURIComponent(queryParam.replaceAll(/\$pc_data\$/g, "%"));
}
